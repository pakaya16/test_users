<?php

use Illuminate\Database\Seeder;

use App\Models\User;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++)
        {
            $gender = array_rand(['Men', 'Women'], 1);

            User::create([
                'id' => ($i + 1),
                'first_name' => $faker->firstName($gender == 0 ? 'male' : 'female'),
                'last_name' => $faker->lastName,
                'sex' => ($gender == 0 ? 'Men' : 'Women'),
                'birthday' => $faker->date('Y-m-d', 'now'),
                'email' => $faker->email,
                'address' => $faker->address,
                'telephone' => rand(1111111111,9999999999)
            ]);
        }
    }
}
