<?php

namespace App\Services\GreetingStrategies;

use App\Interfaces\GreetingInterface;

class DefaultGreeting implements GreetingInterface
{
    public function greet(): string{
        return "Hello, Guest You are an user.";
    }
}
