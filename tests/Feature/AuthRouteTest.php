<?php

namespace Juzaweb\Themes\Itech\Tests\Feature;

use Juzaweb\Themes\Itech\Tests\TestCase;

class AuthRouteTest extends TestCase
{
    public function test_login_page()
    {
        $response = $this->get(route('login'));
        $response->assertStatus(200);
    }

    public function test_register_page()
    {
        $response = $this->get(route('register'));
        $response->assertStatus(200);
    }

    public function test_forgot_password_page()
    {
        $response = $this->get(route('forgot-password'));
        $response->assertStatus(200);
    }
}
