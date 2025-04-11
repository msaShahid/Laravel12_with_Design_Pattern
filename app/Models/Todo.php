<?php

namespace App\Models;

use App\Observers\TodoObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;

#[ObservedBy([TodoObserver::class])]
class Todo extends Model
{
    protected $fillable = ['title', 'description'];
}
