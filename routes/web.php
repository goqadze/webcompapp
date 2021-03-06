<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PaymentController@index');
Route::get('/filter', 'PaymentController@filter');
Route::post('/store', 'PaymentController@store');

Route::get('/categories', 'PaymentController@categories');