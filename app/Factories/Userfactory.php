<?php

namespace App\Factories;

use App\Models\User;

class Userfactory
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    /**
     *  Function: createUser
     * @param userrequest
     * @return App\models\User
     */ 
    public function createuser($userRequest): User
    {
      return new User($userRequest);
    }
}
