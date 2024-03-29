<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		// $this->call('UserTableSeeder');
		$this->call('TestsTableSeeder');
		$this->call('UsersTableSeeder');
		$this->call('SchoolsTableSeeder');
		$this->call('ScholarshipsTableSeeder');
	}

}