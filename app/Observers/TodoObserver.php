<?php

namespace App\Observers;

use App\Models\Todo;
use App\Models\User;

class TodoObserver
{
    /**
     * Handle the Todo "created" event.
     */
    public function created(Todo $todo): void
    {
        // dd($todo);
        $users = User::all();
        foreach($users as $user){
            $user->notify(new TodoCreatedNotification($todo));
        }
    }

    /**
     * Handle the Todo "updated" event.
     */
    public function updated(Todo $todo): void
    {
        //
    }

    /**
     * Handle the Todo "deleted" event.
     */
    public function deleted(Todo $todo): void
    {
        //
    }

    /**
     * Handle the Todo "restored" event.
     */
    public function restored(Todo $todo): void
    {
        //
    }

    /**
     * Handle the Todo "force deleted" event.
     */
    public function forceDeleted(Todo $todo): void
    {
        //
    }
}
