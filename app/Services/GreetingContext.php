<?php

namespace App\Services;

use App\Interfaces\GreetingInterface;

class GreetingContext
{
    private $greetingInterface;
    /**
     * Create a new class instance.
     */
    public function __construct(GreetingInterface $greetingInterface)
    {
        $this->greetingInterface = $greetingInterface;
    }

    public function showGreeting(): string {
       return $this->greetingInterface->greet();
    }
}
