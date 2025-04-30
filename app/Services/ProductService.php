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
        $saveProduct = $this->handleImageUpload($product);
        return $this->productInterface->create($saveProduct); 
    }

    public function updateProduct($id, array $data)
    {
        $updateProduct = $this->mapProductFormData($data); 
        $productData = $this->handleImageUpload($updateProduct);
        return $this->productInterface->update($id, $productData);
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

    private function handleImageUpload(array $data): array
    {
        if (isset($data['featured_image']) && $data['featured_image']->isValid()) {
            $path = $data['featured_image']->store('products', 'public');
            $data['featured_image'] = $path;
        }

        return $data;
    }

}
