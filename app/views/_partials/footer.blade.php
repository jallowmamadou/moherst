            {{HTML::script('js/jquery-1.9.1.js')}}
            {{HTML::script('js/bootstrap.js')}}
            {{HTML::script('js/bootstrap-tooltip.js')}}
            {{HTML::script('js/bootstrap-popover.js')}}
            {{HTML::script('js/bootstrap-alert.js')}}
            {{HTML::script('js/bootstrap-button.js')}}
		    <script type="text/javascript">
		    $('.tipify').tooltip();
		    $(".alert").alert();
		    $('.pressed').on('click',function(){
		     $(this)
		            .text($(this).data('loading-text'))
		    });
			 </script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script> 
    </body>
</html>