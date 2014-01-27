<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
// Route::get('test',function(){
// 	$uri =Request::segment(1);
// 	if (Request::is('test/*'))
// 	{
// 	    return 'yes';
// 	}
//  Request::path();
// dd($uri);
// });
Route::resource('/','publicController');
Route::get('login','publicController@index');
Route::get('logout',function(){
	if ( Auth::check() ) {
			$status = User::whereId(Auth::user()->id)->update(array('status'=>0));
			Auth::logout();
			Session::flush();
			return Redirect::to('/');
		}else{
			return Redirect::to('login');
		}

});
Route::post('login','publicController@postLogin');
Route::group(array('before' => 'auth','before'=>'place'), function()
{
  	Route::resource('admin','AdminController');
 	Route::resource('school', 'SchoolsController');
 	Route::resource('scholarship', 'ScholarshipsController');
});






