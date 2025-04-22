<?php

namespace App\Services\GreetingStrategies;

use App\Interfaces\GreetingInterface;

class AdminGreeting implements GreetingInterface
{
    public function greet(): string{
        return "Hello, You are an admin.";
    }
    
}
