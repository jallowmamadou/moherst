<?php

use Illuminate\Database\Migrations\Migration;

class AddStatusActivatedUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('users',function($table){
			$table->boolean('visible')->default(0);
			$table->boolean('status')->default(0);
			$table->boolean('activated')->default(0);
			$table->string('email')->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('users',function($table){
			$table->drop_coloum(array('visible','status','activated','email'));
		});
	}

}