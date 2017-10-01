<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiUserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    public function setUp()
    {
        parent::setUp();

        $username = env('DB_USERNAME');
        $password = env('DB_PASSWORD');
        $database = env('DB_DATABASE');
        $host = env('DB_HOST');

        $connection = new \PDO("mysql:host={$host}", $username, $password);
        $connection->query("DROP DATABASE IF EXISTS " . $database);
        $connection->query("CREATE DATABASE " . $database);

        \Artisan::call('migrate:refresh');
        \Artisan::call('db:seed');
    }

    public function testGetUsers()
    {
        $response = $this->call('GET', 'api/v1/users');
        $users = json_decode($response->getContent());
        $this->assertTrue($users->code == '00');
        $this->assertTrue(!empty($users->data[0]->id) ? true : false);
    }

    public function testGetUserByUserid()
    {
        $response = $this->call('GET', 'api/v1/users/1/edit');
        $user = json_decode($response->getContent());

        $this->assertTrue($user->code == '00');
        $this->assertTrue($user->id == 1);
    }

    public function testCanNotCreateUser()
    {
        $response = $this->call('POST', 'api/v1/users');
        $user = json_decode($response->getContent());
        $this->assertTrue($user->code == '01');
        $this->assertTrue(!empty($user->message) ? true : false);
    }

    public function testCanCreateUser()
    {
        $userData = [
            'first_name' => 'fname',
            'last_name' => 'lname',
            'sex' => 'Men',
            'birthday' => '1990-04-15',
            'email' => 'aa@gmail.com',
            'address' => '2/89 ram',
            'telephone' => '0889998888'
        ];

        $response = $this->call('POST', 'api/v1/users', $userData);
        $user = json_decode($response->getContent());
        $this->assertEquals(11, $user->id);
        $this->assertTrue($user->code == '00');
    }

    public function testCanUpdateUserAndGetUser()
    {
        $userData = [
            'first_name' => 'fname',
            'last_name' => 'lname',
            'sex' => 'Men',
            'birthday' => '1990-04-15',
            'email' => 'aab@gmail.com',
            'address' => '2/89 ram',
            'telephone' => '0889998888'
        ];

        $response = $this->call('PUT', 'api/v1/users/1/', $userData);
        $user = json_decode($response->getContent());

        $this->assertTrue($user->code == '00');

        $response = $this->call('GET', 'api/v1/users/1/edit');
        $user = json_decode($response->getContent());

        foreach($userData as $key => $value)
        {
            $this->assertEquals($user->{$key}, $value);
        }
    }

    public function testCanDeleteUser()
    {
        $response = $this->call('DELETE', 'api/v1/users/10');
        $user = json_decode($response->getContent());
        $this->assertTrue($user->code == '00');

        $response = $this->call('GET', 'api/v1/users');
        $users = json_decode($response->getContent());
        $this->assertTrue($users->data[0]->id == 10 ? false : true);
    }
}
