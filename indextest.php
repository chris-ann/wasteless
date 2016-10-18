<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">

	<link rel="shortcut icon" type="image/ico" href="favicon.ico"/>	
	<link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/template.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/style_svg.css">
	<link rel="stylesheet" type="text/css" href="css/aside-styles.css">
</head>
	
<body>
    <script>
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <header class="wrap">
        <nav id="main">

            <ul class="nav menu">
                <li class="item-101"><a class="homelink" href="/" >|</a></li>
                <li class="item-102 current active toggle"><a href="/waste-in-yql" title="Waste in Lethbridge" >Waste in YQL</a></li>
                <li class="item-103 toggle"><a href="/yql-resources" title="Resources in YQL" >Resources in YQL</a></li>
            </ul>


        </nav>
        <div class="clearflt"></div>
        <div id="sociallinks">
            <div class="fb-share-button" data-href="http://www.wasteless.ca/waste-in-yql" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.wasteless.ca%2Fwaste-in-yql&amp;src=sdkpreparse">Share on Facebook</a>
          </div>
          <a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-hashtags="wastelessYQL" data-related="EnviroLeth" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </header>
    <?php include 'wasteinyql.html'; ?> 
    
	<!--SCRIPTS-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script>
      window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')
    </script>
 
    <!-- Include ScrollMagic and GSAP plugin -->
	<script src="js/plugins/TimelineMax.min.js"></script>
	<script src="js/plugins/TweenMax.min.js"></script>
	<script src="js/plugins/jquery.gsap.min.js"></script>
	<script src="js/plugins/plugins/DrawSVGPlugin.min.js"></script>
	<script src="js/plugins/plugins/MorphSVGPlugin.min.js"></script>
	
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.0/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>
	 <!-- DEBUGGER -->
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
	 <script src="js/mainvars.js"></script>
     <script src="js/main.js"></script>
    <script src="js/scripts.js"></script>
</body>
</html>