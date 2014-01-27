@include('_partials/doc')
	@section('style')
		<!-- {{ HTML::style('assets/dist/css/bootstrap.min.css') }}		 -->
	{{ HTML::style('css/start-main.css') }}		 
	{{ HTML::style('css/start-style.css') }}	 
	@show
       
    </head>
    <body>
    	<div class="top">
<!--     		@section('top')
    			@parent
    		@show -->
    		@yield('top')
    	</div>
	    <div class="container">
	    	@yield('container')
	    </div>
	    <footer>
	    	<div class="hedacont">MOHERST &copy; Copyright 2013</div>
	    	@yield('footer')
	    </footer>
	    	@yield('script')
@include('_partials/footer')