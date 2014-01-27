<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table) {
			$table->increments('id');
			$table->string('username');
			$table->string('hpassword');
			$table->string('userType');  // 
			$table->string('fullname')->nullable();
			$table->string('ip')->default(0);
			$table->string('pc')->nullable();	
			$table->string('privileges')->nullable(); // veda(view edit delete add)
			$table->string('domain')->nullable(); // eg school admin records guest: 
			$table->string('userGroup')->nullable();  // moherst school guest
			$table->boolean('link')->default(0);	// yes or not : is a school or not
			$table->integer('lickId')->default(0); // school id
			$table->boolean('deleted')->default(0);
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
