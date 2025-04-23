<?php

namespace App\Providers;

use App\Models\Todo;
use App\Events\UserRegistered;
use App\Listeners\NotifyAdmin;
use App\Repositories\TodoRepo;
use App\Observers\TodoObserver;
use App\Interfaces\TodoInterface;
use App\Listeners\LogUserRegister;
use App\Listeners\SendWelcomeMail;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(TodoInterface::class, TodoRepo::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
       // Todo::observe(TodoObserver::class);
       Event::listen(UserRegistered::class, SendWelcomeMail::class);
       Event::listen(UserRegistered::class, LogUserRegister::class);
       Event::listen(UserRegistered::class, NotifyAdmin::class);
       
    }
}
