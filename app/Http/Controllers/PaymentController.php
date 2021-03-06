<?php

namespace App\Http\Controllers;

use App\Category;
use App\Filters\PaymentFilters;
use App\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:4',
            'amount' => 'required|numeric|min:0.01',
            'comment' => 'required|min:4',
            'category_id' => 'required|exists:categories,id',
            'created_at' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
        }

        return Payment::create($request->all())->loadCategory();
    }

    /**
     * Display a filtered listing of the resource.
     *
     * @param PaymentFilters $filters
     * @return void
     */
    public function filter(PaymentFilters $filters)
    {
        return Payment::latest()->filter($filters)->withCategory()->get();
    }

    /**
     * Get a listing of the resource.
     *
     * @return Category[]|\Illuminate\Database\Eloquent\Collection
     */
    public function categories()
    {
        return Category::all('id', 'title');
    }
}
