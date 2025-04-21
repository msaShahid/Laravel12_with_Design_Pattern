<?php

namespace App\Services\GreetingStrategies;

use App\Interfaces\GreetingInterface;

class AdminGreeting implements GreetingInterface
{
    public function greet(string $name): string{
        return "Hello, $name. You are an admin.";
    }
    
}
