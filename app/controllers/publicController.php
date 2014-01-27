<?php 

class publicController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
		protected $layout = 'public';
	public function index()
	{
		$this->layout->content = View::make('home.index');
	}
	public function postLogin()
	{
		$creditials = array(
				'username' => Input::get('username'),
				'password' => Input::get('password')
		);

	 	// see if they are in the database
		if ( Auth::attempt($creditials) ) {
			if ( Auth::check() ) {
				// dd(Auth::user()->id);
				$status = User::whereId(Auth::user()->id)->update(array('status'=>1)) ;

				// 	// turn on status to active


				// create a log file and show that time, pc , ip 


			 	// put userdata in session
				Session::put('userName',Auth::user()->username);
				Session::put('userType',Auth::user()->userType);
				Session::put('userId',Auth::user()->id);
				Session::put('userDomain',Auth::user()->domain);
				Session::put('userGroup',Auth::user()->userGroup);
				Session::put('link',Auth::user()->link);
				Session::put('privileges',Auth::user()->privileges);

				//  redirect to  appropriate dashboard
				if ( $status ) {
					return Redirect::intended(Auth::user()->domain)->with('userdata',Auth::user());
				}else{

				// switch ($status) {
				// 	case Auth::user()->userType == 'super' :
				// 		// 
				// 		break;
				// 	case Auth::user()->userType == 'admin' :
				// 		// dd(Auth::user()->userType);
				// 		break;
				// 	case Auth::user()->userType == 'isuser' :
				// 		// dd(Auth::user()->userType);
				// 		break;
				// 	case Auth::user()->userType == 'users' :
				// 		// dd(Auth::user()->userType);
				// 		break;				
				// 	default:
				// 		// dd(Session::all());
				// 		break;
				// }

				}

			}
		}
		else{ #credentials wrong for the user

			// else if not logged in redirect back with errors
			return Redirect::to('login')->with('flash_error','access denied')->withInput();

		}
		
	}
	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}