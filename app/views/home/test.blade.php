	{{Form::open(array('url'=>'','class'=>'form-signin'))}}
	{{Form::close()}}
		<div class="content">
		<div class="signin">
		      <form class="form-signin" action="" method="post" id="signin">
		        <h2 class="form-signin-heading">Please sign in</h2>
		        <div class="alert alert-info">
				other users here
				</div>
				<div class="input-feild">
							<span class="add-class-name">Username <a href="#" data-toggle="tooltip" title="" data-original-title="A user name unique to you" class="tipify">What is this?</a></span>
					        <input type="text" class="input-block-level" placeholder="ENTER USERNAME " name="UserName" value="<?php echo (isset($_POST['UserName']))? htmlentities($_POST['UserName']) : ''; ?>" required autofocus>
		        			<span  class="add-class-fee">Password</span>
		        			<input type="password" name="pwd" class="input-block-level" placeholder="ENTER PASSWORD " required>
				</div>
		        <?php if(!empty($loginError['general'])):  ?>
		        <div class="alert alert-error">
				<?php echo htmlentities($loginError['general']); ?>
				</div>
				<?php endif; ?>	
				<label class="checkbox">
		        	<input type="checkbox"><span>always remember me</span>
		        </label>
		        <button type="submit" name="signin" class="btn btn-large btn-primary btn-block pressed" type="submit"  data-loading-text="Signing In...">Sign in</button>  
		      </form>
		</div>		
	</div>