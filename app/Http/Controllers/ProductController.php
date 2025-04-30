<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Services\ProductService;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\ProductFormRequest;

class ProductController extends Controller
{

    public function __construct(
        private ProductService $productService
    ){}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product_list = $this->productService->getAllProducts();
        //dd($product_list->toArray());
        return Inertia::render('products/index',[
            'product_list' => $product_list,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('products/product-form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductFormRequest $request)
    {
        //dd($request->all());
        try {
            
            $product_save = $this->productService->createProduct($request->validated());

            if ($product_save) {
                return redirect()->route('products.index')->with('success', 'Product created successfully.');
            }else{
                return redirect()->route('products.index')->with('error', 'Unable to create product. Please try again');
            }

        } catch (\Throwable $e) {
            Log::error('Product creation failed', [
                'error' => $e->getMessage(),
                'request' => $request->all(),
            ]);

            return redirect()->back()->withInput()->with('error', 'Failed to create product. Please try again.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('products/product-form',[
            'product' => $product,
            'isView' => true,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('products/product-form',[
            'product' => $product,
            'isEdit' => true,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductFormRequest $request, Product $product)
    {
        //dd($request->all(), $product);
        
        try {
            
            $product_update = $this->productService->updateProduct($product->id, $request->validated());

            if ($product_update) {
                return redirect()->route('products.index')->with('success', 'Product Update successfully.');
            }else{
                return redirect()->route('products.index')->with('error', 'Unable to update product. Please try again');
            }

        } catch (\Throwable $e) {
            Log::error('Product update failed', [
                'error' => $e->getMessage(),
                'product_id' => $product->id,
                'request' => $request->all(),
            ]);

            return redirect()->back()->withInput()->with('error', 'Failed to update product. Please try again.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $delete_product = $this->productService->deleteProduct($product->id);
        
        if($delete_product){
            return redirect()->route('products.index')->with('success', 'Product deleted successfully!');
        }
        
    }
}
