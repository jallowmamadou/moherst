<?php

class UsersTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		// DB::table('users')->truncate();

		$users = [
[			'fullname'=>'mamadou jallow',
			'username'=>'developer',
			'password'=>'$2y$10$sDx1N0vIRdvsdIT9fUEfdOdgZkJbqh2lJtj5ZSTOUvTQ1SZfD06y2',
			'privileges'=>'all', // what can you do edit delete add view
			'domain'=>'admin',		//internal or external user (eg moherst, school or unesco)
			'userGroup'=>'all',	// 
			'userType'=>'super'		// determines what you see or the pages you access on your domain (eg god or prophet )
],
[			'fullname'=>'mamadou jallow',
			'username'=>'default',
			'password'=>'$2y$10$sDx1N0vIRdvsdIT9fUEfdOdgZkJbqh2lJtj5ZSTOUvTQ1SZfD06y2',
			'privileges'=>'all', // what can you do edit delete add view
			'domain'=>'admin',		//internal or external user (eg moherst, school or unesco)
			'userGroup'=>'all',	// 
			'userType'=>'super'		// determines what you see or the pages you access on your domain (eg god or prophet )
]
,
[			'fullname'=>'mamadou jallow',
			'username'=>'school',
			'password'=>'$2y$10$sDx1N0vIRdvsdIT9fUEfdOdgZkJbqh2lJtj5ZSTOUvTQ1SZfD06y2',
			'privileges'=>'all', // what can you do edit delete add view
			'domain'=>'school',		//internal or external user (eg moherst, school or unesco)
			'userGroup'=>'all',	// 
			'userType'=>'super'		// determines what you see or the pages you access on your domain (eg god or prophet )
]
,
[			'fullname'=>'mamadou jallow',
			'username'=>'schoolarship',
			'password'=>'$2y$10$sDx1N0vIRdvsdIT9fUEfdOdgZkJbqh2lJtj5ZSTOUvTQ1SZfD06y2',
			'privileges'=>'all', // what can you do edit delete add view
			'domain'=>'schoolarship',		//internal or external user (eg moherst, school or unesco)
			'userGroup'=>'all',	// 
			'userType'=>'super'		// determines what you see or the pages you access on your domain (eg god or prophet )
]
		];

		// Uncomment the below to run the seeder
		DB::table('users')->insert($users);
	}

}
