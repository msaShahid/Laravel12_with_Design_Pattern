<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->words(3, true), 
            'description' => fake()->sentence(10), 
            'price' => fake()->randomFloat(2, 10, 500), 
            'featured_image' => fake()->imageUrl(640, 480, 'products', true), 
            'featured_image_name' => fake()->uuid() . '.jpg', 
        ];
    }
}
