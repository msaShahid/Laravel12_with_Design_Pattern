<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\RoleGreetingService;

class GreetingController extends Controller
{
    private $roleGreeting;
    public function __construct(RoleGreetingService $roleGreetingService)
    {
        $this->roleGreeting = $roleGreetingService;
    }

    public function showGreetings($role){

       return $this->roleGreeting->getGreeting($role);

        // if($role === 'admin') {
        //     return 'Hello, admin!';
        // } elseif ($role === 'editor'){
        //     return 'Hello, editor!';
        // } elseif ($role === 'publisher'){
        //     return 'Hello, publisher!';
        // }else{
        //     return 'Hello, user!';
        // }
    }
}
