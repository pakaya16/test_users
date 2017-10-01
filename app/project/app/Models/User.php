<?php
/**
 * Created by PhpStorm.
 * User: pakay
 * Date: 29/06/2017
 * Time: 01:04
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use SoftDeletes;

    protected $table      = 'user';
    protected $dates      = ['deleted_at'];
    protected $softDelete = true;
    protected $fillable   = [
        'id',
        'first_name',
        'last_name',
        'sex',
        'birthday',
        'email',
        'address',
        'telephone',
    ];
}
