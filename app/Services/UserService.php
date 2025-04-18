<?php

namespace App\Services;

use App\Factories\Userfactory;

class UserService
{
    protected $userFactory;
    /**
     * Create a new class instance.
     */
    public function __construct(Userfactory $userFactory)
    {
        $this->userFactory = $userFactory;
    }

    public function createAndSaveUser($request)
    {
       $user = $this->userFactory->createUser($request);
       
    }
}
