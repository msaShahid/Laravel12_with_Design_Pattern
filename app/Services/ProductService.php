<?php

namespace App\Services;

use App\Interfaces\ProductInterface;

class ProductService
{

    public $productInterface;
    /**
     * Create a new class instance.
     */
    public function __construct(ProductInterface $productInterface)
    {
        $this->productInterface = $productInterface;
    }

    public function createProduct(array $data)
    {
        $product = $this->mapProductFormData($data);
        return $this->productInterface->create($product->toArray());
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


    public function mapProductFormData($request){
        return [
            'name' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'featured_image' => $request->featured_image,
            'featured_image_name' => $request->featured_image ? $request->featured_image->getClientOriginalName() : null,
        ];
    }

}
