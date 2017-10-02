<?php
namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Rules\Sex;
use Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'limit'          => 'nullable|numeric|min:1',
            'page'           => 'nullable|numeric|min:1',
            'orderByField'   => 'nullable|alpha',
            'orderByType'    => 'nullable|alpha',
            'conditionField' => 'nullable|alpha'
        ]);

        if($validator->fails())
            return $this->validateFail($validator);

        $limit    = (int)e($request->get('limit') ?? 10);
        $page     = (int)e($request->get('page') ?? 1);
        $field    = (string)e($request->get('orderByField') ?? 'id');
        $sortType = (string)e($request->get('orderByType') ?? 'desc');
        $userData = User::select('id', 'first_name', 'last_name', 'sex', 'birthday', 'email', 'address', 'telephone')
                    ->orderBy($field, $sortType)
                    ->take($limit)
                    ->skip(($page - 1) * $limit);

        if($request->get('conditionField') && $request->get('conditionValue'))
            $userData->where(e($request->get('conditionField')), e($request->get('conditionValue')));

        $result = $userData->get();

        if($result->isEmpty())
        {
            return response()->json([
                'code'    => '01',
                'message' => 'No data in system.'
            ], 404);
        }
        else
        {
            return response()->json([
                'code'  => '00',
                'count' => $userData->count(),
                'data'  => $result
            ]);
        }
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name'  => 'required',
            'sex' => [
                'required', new Sex
            ],
            'birthday'  => 'required|date|date_format:Y-m-d',
            'email' => ['required', 'unique:user,email', 'email'],
            'address' => 'required',
            'telephone' => ['required', 'numeric', 'digits:10']
        ]);

        if($validator->fails())
            return $this->validateFail($validator);

        $user = User::create([
            'first_name' => e($request->get('first_name')),
            'last_name'  => e($request->get('last_name')),
            'sex'  => e($request->get('sex')),
            'birthday'  => e($request->get('birthday')),
            'email'  => e($request->get('email')),
            'address'  => e($request->get('address')),
            'telephone'  => e($request->get('telephone')),
        ]);

        if(!empty($user->id))
            return response()->json([
                'code'    => '00',
                'id'      => $user->id,
                'message' => 'create user success.'
            ]);

        return response()->json([
            'code'    => '01',
            'message' => 'can\'t create user.'
        ], 404);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(int $id)
    {
        $result = User::select('id', 'first_name', 'last_name', 'sex', 'birthday', 'email', 'address', 'telephone')
                        ->find(e($id));

        if($result)
            return response()->json(array_merge(['code' => '00'], $result->toArray()));

        return response()->json([
            'code'    => '01',
            'message' => 'No data in system.'
        ], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $user = User::find($id);

        $fields = [
            'first_name' => 'required',
            'last_name'  => 'required',
            'sex' => [
                'required', new Sex
            ],
            'birthday'  => 'required|date|date_format:Y-m-d',
            'address' => 'required',
            'telephone' => ['required', 'numeric', 'digits:10']
        ];

        if($user->email != $request->get('email'))
            $fields['email'] = ['required', 'unique:user,email', 'email'];

        $validator = Validator::make($request->all(), $fields);

        if($validator->fails())
            return $this->validateFail($validator);

        $result = $user->update([
            'first_name' => e($request->get('first_name')),
            'last_name'  => e($request->get('last_name')),
            'sex'  => e($request->get('sex')),
            'birthday'  => e($request->get('birthday')),
            'email'  => e($request->get('email')),
            'address'  => e($request->get('address')),
            'telephone'  => e($request->get('telephone')),
        ]);

        if($result)
            return response()->json([
                'code'    => '00',
                'message' => 'update user success.'
            ]);

        return response()->json([
            'code'    => '01',
            'message' => 'can\'t update user.'
        ], 404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $user = User::find($id);

        if($user->id)
        {
            $user->delete();

            return response()->json([
                'code'    => '00',
                'message' => 'delete user success.'
            ]);
        }

        return response()->json([
            'code'    => '01',
            'message' => 'can\'t delete user.'
        ], 404);
    }

    private function validateFail($validator)
    {
        $message = '';
        $messageList = [];

        foreach($validator->messages()->all() as $word)
        {
            $messageList[] = $word;
            $message = ($message ? $message . ' ' : '') . $word;
        }

        return response()->json([
            'code'    => '01',
            'message' => $message,
            'messageList' => $messageList,
        ], 200);
    }
}