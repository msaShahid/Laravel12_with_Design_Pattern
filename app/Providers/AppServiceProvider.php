<?php

namespace App\Providers;

use App\Models\Todo;
use App\Repositories\TodoRepo;
use App\Observers\TodoObserver;
use App\Interfaces\TodoInterface;
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
    }
}
