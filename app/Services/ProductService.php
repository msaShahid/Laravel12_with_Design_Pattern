<?php

namespace App\Services;

use App\Interfaces\ProductInterface;

class ProductService
{

    /**
     * Create a new class instance.
     */
    public function __construct(
        private ProductInterface $productInterface
    ) {}

    public function createProduct(array $data)
    {
        $product = $this->mapProductFormData($data); 
    
        if (isset($product['featured_image'])) {
            $path = $product['featured_image']->store('products', 'public');
            $product['featured_image'] = $path;
        }
    
        return $this->productInterface->create($product); 
    }

    public function updateProduct($id, array $data)
    {
        return $this->productInterface->update($id, $data);
    }

    public function getAllProducts()
    {
        return $this->productInterface->all();
    }

    public function getProductById($id)
    {
        return $this->productInterface->find($id);
    }

    public function deleteProduct($id)
    {
        return $this->productInterface->delete($id);
    }

    public function mapProductFormData($request)
    {
        return [
            'name' => $request['name'],
            'description' => $request['description'],
            'price' => $request['price'],
            'featured_image' => $request['featured_image'] ?? null,
            'featured_image_name' => isset($request['featured_image']) 
                ? $request['featured_image']->getClientOriginalName() 
                : null,
        ];
    }

}
