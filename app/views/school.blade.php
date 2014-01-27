@include('_partials/doc')
	@section('style')
		<!-- {{ HTML::style('assets/dist/css/bootstrap.min.css') }}		 -->
	{{ HTML::style('css/main.css') }}		 
	{{ HTML::style('css/style.css') }}	 
	@show
       
    </head>
    <body>
    	<div class="top">
    	<?php $page = 'page'; ?>
    	<div class="main-header">
  			<div class="fixheda ">			  	
		  		<div class="userheda fixheda_style">
		  			<div class="hedacont">
						<ul class="navigation">
				            <li class="active" id="first">
				                <a href="index.php" <?php echo ($page == 'index')? 'id=here' : ''  ?>>
					                <span class="light <?php echo ($page == 'index')? 'light-active' : ''  ?>"></span>
					                <span class="lt">home</span>
				                </a>
				            </li>
				            <li class="">
				                <a href="notification.php?sid=<?php echo urlencode($_SESSION['lece_id']); ?>" <?php echo ($page == 'notification')? 'id=here' : ''  ?>>
									<span class="light <?php echo ($page == 'notification')? 'light-active' : ''  ?>"></span>
									<span class="lt">Notifications</span>				                
				                </a>
				            </li>
				            <li class="">
				                <a href="moherst.php?sid=<?php echo urlencode($_SESSION['lece_id']); ?>" <?php echo ($page == 'moherst')? 'id=here' : ''  ?>>
									<span class="light <?php echo ($page == 'moherst')? 'light-active' : ''  ?>"></span>
									<span class="lt">Moherst</span>				                
				                </a>
				            </li>
			            </ul>
			            <div class="navbar" id="user_options">
							<ul class="nav pull-right">
		                      <li class="dropdown">
		                        <a href="#" class="dropdown-toggle usrname" data-toggle="dropdown"><?php echo (isset($username) && !empty($username))? htmlentities($username) : 'No-UserName' ; ?><b class="caret"></b></a>
		                        <ul class="dropdown-menu">
		                          <li><a href="help.php">help</a></li>
		                          <li><a href="user_settings.php">settings</a></li>
		                          <li class="divider"></li>
		                          <li><a href="../logout.php">sign out</a></li>
		                        </ul>
		                      </li>
                    		</ul>						                		            	
			            </div>
		  			</div>
		  		</div>
		  		<?php if (isset($_GET['sid'])): ?>
		  			<?php if (!empty($_GET['sid'])): ?>
				  		<div class="scope">
				  			<div class="hedacont">
								<div class="navbar">
					              <div class="navbar-inner" id="scopebar">
					                <div class="container">
					                  <a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-responsive-collapse">
					                    <span class="icon-bar"></span>
					                    <span class="icon-bar"></span>
					                    <span class="icon-bar"></span>
					                  </a>
					                  <a class="brand" href="school.php?sid=<?php echo urlencode($schl_id); ?>"><?php echo htmlentities($lcn); ?></a>
					                  <div class="nav-collapse collapse navbar-responsive-collapse">
					                    <ul class="nav">
					                      <li <?php echo ($page == 'students')? 'class="active"' : '';?>><a href="students.php?sid=<?php echo urlencode($schl_id); ?>">students</a></li>	
					                      							  
										  <li <?php echo ($page == 'staff')? 'class="active"' : '';?>><a href="staff.php?sid=<?php echo urlencode($schl_id); ?>">staff</a></li>
										  <li <?php echo ($page == 'courses')? 'class="active"' : '';?>><a href="courses.php?sid=<?php echo urlencode($schl_id); ?>">courses</a></li>
										  <li <?php echo ($page == 'contact')? 'class="active"' : '';?>><a href="contact.php?sid=<?php echo urlencode($schl_id); ?>">contact</a></li>					                     
 					                      <li <?php echo ($page == 'classes')? 'class="active"' : '';?>><a href="classes.php?sid=<?php echo urlencode($schl_id); ?>">classes</a></li>
					                      <li <?php echo ($page == 'statistics')? 'class="active"' : '';?>><a href="statistics.php?sid=<?php echo urlencode($schl_id); ?>">statistics</a></li>
 					                    </ul>
					                    <ul class="nav pull-right">
					                      <li class="divider-vertical"></li>
 					                      <li class="dropdown">
					                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Options<b class="caret"></b></a>
					                        <ul class="dropdown-menu">
					                          <li><a href="#">moherst portal</a></li>
					                          <li><a href="#">downloads</a></li>
					                          <li><a href="#">school users</a></li>
					                          <li class="divider"></li>
					                          <li><a href="#">School settings</a></li>
					                        </ul>
					                      </li> 
					                    </ul>
					                  </div><!-- /.nav-collapse -->
					                </div>
					              </div><!-- /navbar-inner -->
								</div>		  				
				  			</div>	
					  	</div>		  				
		  			<?php endif ?>
		  		<?php endif ?>
			</div>		
  		</div>
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