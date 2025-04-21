<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GreetingController;
use App\Http\Controllers\SingletonController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


Route::resource('todos',TodoController::class);
Route::resource('users', UserController::class);

Route::get('singleton', [SingletonController::class,'singletonLog']);

Route::get('greeting/{role}', [GreetingController::class,'showGreetings']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
