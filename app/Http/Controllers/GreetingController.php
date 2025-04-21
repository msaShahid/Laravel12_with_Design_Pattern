<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GreetingController extends Controller
{
    public function showGreetings($role){

        if($role === 'admin') {
            return 'Hello, admin!';
        } elseif ($role === 'editor'){
            return 'Hello, editor!';
        } elseif ($role === 'publisher'){
            return 'Hello, publisher!';
        }else{
            return 'Hello, user!';
        }
    }
}
