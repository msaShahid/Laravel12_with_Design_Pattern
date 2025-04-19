<?php

namespace App\Services;

use App\Factories\Userfactory;
use Illuminate\Support\Facades\Hash;

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
       $user->password = Hash::make($request['password']);
       return $user->save();
      
    }
}
