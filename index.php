<?php defined( '_JEXEC' ) or die( 'Restricted access' );
$Itemid = JRequest::getInt('Itemid');
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
	<head>
		<link rel="shortcut icon" type="image/ico" href="favicon.ico"/>
		
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta property="og:title" content="Wasteless | An Environment Lethbridge Project" />
		<meta property="og:description" content="Did you know Lethbrige is one of the most wasteful cities on earth? Wasteless is an online educational tool that makes the case for waste reduction in Lethbridge." />
		<meta property="og:image" content="http://www.wasteless.ca/images/section1_screencap2.png" />
		<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/system/css/system.css" type="text/css" />
		<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/system/css/general.css" type="text/css" />
		<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/template.css" type="text/css" />	
		
        <jdoc:include type="head" />
        <?php JHtml::_('jquery.framework'); ?>
	  	<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/scripts.js"></script>
		
		<?php if ($Itemid==102) { ?>
			<link rel="stylesheet" type="text/css" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/style.css">
			<link rel="stylesheet" type="text/css" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/style_svg.css">
			<link rel="stylesheet" type="text/css" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/aside-styles.css">
		<?php } ?>
		
	</head>

	<body>
    
<!--		<div id="fb-root"></div>-->
		<script>
			(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		</script>
      
		<div id="container">
			<header class="wrap">
				<nav id="main">
					
					<jdoc:include type="modules" name="masthead" />

				</nav>
				<div class="clearflt"></div>
              	<div id="sociallinks">
                	<div class="fb-share-button" data-href="http://www.wasteless.ca/waste-in-yql" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.wasteless.ca%2Fwaste-in-yql&amp;src=sdkpreparse">Share on Facebook</a>
                  </div>
                  <a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-hashtags="wastelessYQL" data-related="EnviroLeth" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
			</header>
            
            <jdoc:include type="modules" name="banner1" />
			
            <?php if ($Itemid==102) { ?>
                 <?php include 'wasteinyql.html'; ?>  
            <?php } ?>
        
            <main>

                <jdoc:include type="component" />

            </main>

			<footer>
				<div class="wrap">
					<div class="col_320">
						<h2>Site Pages</h2>
						<nav>
							<jdoc:include type="modules" name="footernav" />
						</nav>
					</div>
					<div class="col_320">
						<h2>Get in Touch</h2>
						<a class="button blue" href="mailto:info@environmentlethbridge.org">info@environmentlethbridge.org</a>
					</div>
					<div class="col_320">
						<h2>
						<!-- <p><a href="tel:1-403-330-6241">403-330-6241</a><br>
						<a href="mailto:info@environmentlethbridge.org">info@environmentlethbridge.org</a></p> -->
						<img src="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/images/EnvironmentLeth_logo.svg" style="width: 60%" alt="Environment Lethbridge Logo"></h2>
						<p class="copy">&#64; 2016 Environment Lethbridge </p> 
					</div>
					<div class="clearflt"></div>
					
				</div>
			</footer>
		</div>

		
      
      	<?php if ($Itemid==102) { ?>
      	    <script>
		      window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')
		    </script>
          
			<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/svgcheckbx.js"></script>

			<!--SNAP SVG, JUST USING TO GRAB BEZIER POINTS FOR NOW-->
			<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/snap.svg-min.js"></script>

			<!-- Include ScrollMagic and GSAP plugin -->
			<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/plugins/TimelineMax.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
            <!--<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/plugins/TweenMax.min.js"></script>-->  
			<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/plugins/jquery.gsap.min.js"></script>
			<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/plugins/plugins/DrawSVGPlugin.min.js"></script>
			<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/plugins/plugins/MorphSVGPlugin.min.js"></script>
			
			<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.0/TweenMax.min.js"></script>-->
		    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
		    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js"></script>
			<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>
			
            <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/mainvars.js"></script>
		    <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/main.js"></script>
            
	

			<!-- COMMENT PLUGIN -->
			<script>
			(function(d, s, id){
			  var js,
			      fjs = d.getElementsByTagName(s)[0],
			      p = (('https:' == d.location.protocol) ? 'https://' : 'http://'),
			      r = Math.floor(new Date().getTime() / 1000000);
			  if (d.getElementById(id)) {return;}
			  js = d.createElement(s); js.id = id; js.async=1;
			  js.src = p + "www.opinionstage.com/assets/loader.js?" + r;
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'os-widget-jssdk'));
			</script>
    	<?php } ?>
	</body>
</html>