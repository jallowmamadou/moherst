@section('style')
	@parent
	
@stop
@section('top')
	<div class="top_bar_container">
		<div class="top_bar_inner top_bar_style">
			<div class="top_bar_up">
				<h2>WELCOME TO HIGHER EDUCATION MANAGEMENT INFORMATION SYSTEM (HEMIS)</h2>
			</div>
			<div class="navbar">
				<ul class="nav nav-pills">
					  <li>
					    <a href="http://moherst.gov.gm/">MoHERST</a>
					  </li>
					  <li><a href="http://moherst.info/">MOHERST INFO</a></li>
					  <li><a href="http://dev.moherst.info/">DEV</a></li>
					  <li><a href="http://apps.moherst.info/">APPS</a></li>
					  <li><a href="http://hemis.moherst.info/">HEMIS</a></li>
					  <li><a href="http://app.moherst.info/">APP</a></li>
				</ul>
			</div>
		</div>
	</div>
@stop
@section('container')
	<div class="content">
		<div class="signin">
			<h2 class="form-signin-heading">Please sign in</h2>
			    @if (Session::has('flash_error'))
			        <div id="flash_error">{{ Session::get('flash_error') }}</div>
			    @endif
			{{Form::open(array('url'=>'login','class'=>'form-signin','id'=>''))}}
				<div class="input-feild">
					<span class="add-class-name">Username <a href="#" data-toggle="tooltip" title="" data-original-title="A user name unique to you" class="tipify">What is this?</a></span>
					{{Form::input('text','username','',array('class'=>'input-block-level','placeholder'=>"ENTER USERNAME ",'required'=>'required'))}}
					<span  class="add-class-fee">Password</span>
					{{Form::input('password','password','',array('class'=>'input-block-level','placeholder'=>"ENTER PASSWORD",'required'=>'required'))}}
					{{Form::input('submit','signin','Sign In',array('class'=>'btn btn-large btn-primary btn-block pressed'))}}		        			
				</div>
			{{Form::close()}}
		</div>	

	</div>

@stop




