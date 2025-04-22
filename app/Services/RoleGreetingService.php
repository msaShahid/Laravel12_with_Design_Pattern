<?php

namespace App\Services;

use App\Services\GreetingContext;
use App\Services\GreetingStrategies\AdminGreeting;
use App\Services\GreetingStrategies\EditorGreeting;
use App\Services\GreetingStrategies\DefaultGreeting;
use App\Services\GreetingStrategies\PublisherGreeting;

class RoleGreetingService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getGreeting($role){
       // dd($role);
        switch($role){
            case 'admin':
                $strategy = new AdminGreeting;
                break;
            case 'editor':
                $strategy = new EditorGreeting;
                break;
            case 'publisher':
                $strategy = new PublisherGreeting;
                break;
            default:
                $strategy = new DefaultGreeting;
        }

        $greetContext =  new GreetingContext($strategy);
        return $greetContext->showGreeting();
    }
}
