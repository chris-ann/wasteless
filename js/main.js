var ctrl = new ScrollMagic.Controller();
//var scrolling = {state: false};
//var navScroll = {state: false};
//var scrollDirection = 'FORWARD';
//var play = $('.play');

//THIS MAKES THE SCROLL "EASE" WHEN YOU STOP SCROLLING

//var $window = $(window);
//var scrollTime = 0.3;
//var scrollDistance = 150;

$window.on("mousewheel DOMMouseScroll", function (event) {
	event.preventDefault();
	var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
	var scrollTop = $window.scrollTop();
	var finalScroll = scrollTop - parseInt(delta * scrollDistance);

	TweenMax.to($window, scrollTime, {scrollTo: {y: finalScroll,autoKill: true},ease: Power1.easeOut, overwrite: 5});
});


// THIS OVERRIDES THE ANCHOR NAV TO MAKE IT SCROLL TO THAT ANCHOR
ctrl.scrollTo(function (newpos) {
//	if(newpos==="#six") {
//		newpos = newpos + "100%";
//	}
	TweenMax.to(window, 0.5, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
});

$document.on("click", "a[href^='#']", function (e) {
	navScroll.state = true;
	scrolling.state = true;	// forces checkScrollState to turn the scroll off and remove class
	checkScrollState();
	
	var id = jQuery(this).attr("href");
	var elem = jQuery('id');
	if (jQuery(id).length > 0) {
		e.preventDefault();
		// trigger scroll
		ctrl.scrollTo(id, function() {
//			console.log('nav-scroll is complete');
		});
		elem.addClass('nav-active');
	}
});

// make the nav values work so the colours fill in the appropriate circle
// the total Y distance to each section set by screen height
//var navOne = 0;	//#zero
//var navTwo = window.innerHeight * 7; // number the height is multiplied by depends on how many full height vertical sections the user has to scroll through. //#three
//var navThree = window.innerHeight * 11; //#four
//var navFour = window.innerHeight * 37;	//#six
//var navFive = window.innerHeight * 58;	//#seven
//var navSix = window.innerHeight * 67;	//#eight

function highlightNav(id) {
    $navElem.attr("class", "navElem"); //takes off class from all navbar a tags
    jQuery(id).attr("class", "navElem active"); // add class to target id
}

//test for distance scrolled and run highlight function with corresponding ID
function navUpdate(distanceY) {
    if (distanceY >= navOne && distanceY < navTwo) {
        highlightNav("#nav1");
    } else if (distanceY >= navTwo && distanceY < navThree) {
        highlightNav("#nav2");
    } else if (distanceY >= navThree && distanceY < navFour) {
        highlightNav("#nav3");
    } else if (distanceY >= navFour && distanceY < navFive) {
        highlightNav("#nav4");
    } else if (distanceY >= navFive && distanceY < navSix) {
        highlightNav("#nav5");
    } else {
        highlightNav("#nav6");
    }
}

//add scrolling event listner to window
window.addEventListener('scroll', function () {
    var scrollPoint = window.pageYOffset; // find out how far the user has scrolled
    navUpdate(scrollPoint);
});

//run update function when page first loads
navUpdate(window.pageYOffset);

jQuery('.navElem').hover(function() {
    jQuery('#' + jQuery(this).attr("id") + ' + div.label').show();
    }, function() {
    jQuery('#' + jQuery(this).attr("id") + ' + div.label').hide();
});

// make the mouse icon start the autoScroll
$mouse.on("click", function(){
	if(!scroll.state){
		checkScrollState();
	}
});


// code to run the asides

$asideIcon.on("click", function(e) {
    e.preventDefault();
    jQuery('#' + jQuery(this).attr("id") + ' + .aside').fadeToggle();
});

$asideIcon.bind(".mouseleave", function() {
    $asideIcon.bind("mouseover", asideHover);
});

$asideIcon.on("mouseover", function(event) {
    jQuery('#' + jQuery(this).attr("id") + ' + .aside').fadeIn();
    $( this ).unbind( event );
});

$asideClose.on("click", function() {
    fadeAside();
});


// global so that it can be called in the timelines
function fadeAside() {
	$aside.fadeOut('5000');
}

$document.on("scroll", function() {
//	console.log('call for scroll');
	scrollDirection = ctrl.info("scrollDirection");
	
	if (scrollDirection == 'REVERSE') {
		checkScrollState();
		scrollDirection = 'FORWARD';
	}
});

// Toggle autoScroll when you click on the play button
$playBtn.on("click", function () {
//	console.log('call for click');
	if(scrolling.state){
		scrolling.state = false;
	} else if (!scrolling.state) {
		scrolling.state = true;
	}
	
	checkScrollState();
});

$window.keypress(function (e) {
	if (e.keyCode === 0 || e.keyCode === 32) {
		e.preventDefault();
		if (scrolling.state) {
			scrolling.state = false;
		} else if (!scrolling.state) {
			scrolling.state = true;
		}

		checkScrollState();
	}
})


// if the navigation is running it doesn't call the "breaks" in the middle of the timelines
function checkNavState() {
	if(!navScroll.state){
		scrolling.state = true;
		checkScrollState();
	}
}

// Check which class the button has, check if it's paused, and then play it
function checkScrollState() {

	if(scrollDirection == 'REVERSE') {
		scrolling.state = true;	// this will make it stop
	}
	if (scrolling.state) {
		stopScroll();
	} else if (!scrolling.state) {
		startScroll();
	}
}

// Start and stop the auto-scrolling
//var scrollDelay;
function startScroll() {
//	console.log('Start!')
	navScroll.state = false;	// turn it off once you hit play
    $playBtn.addClass('play-active');
    jQuery('#playIcn').hide();
	jQuery('#pauseIcn').show();
	window.scrollBy(0, 5);
	scrollDelay = setTimeout('startScroll()', 1);
}

function stopScroll() {
//	console.log('Stop!')
	$playBtn.removeClass('play-active');
    jQuery('#pauseIcn').hide();
    jQuery('#playIcn').show();
	clearTimeout(scrollDelay);
}

// binfo animation
new TimelineMax({repeat: -1, ease: Linear.easeNone})
	.fromTo($asideIconLid, 1, {rotation: '-10'}, {rotation: '0', transformOrigin: '0% 50%', ease: Bounce.easeOut})
	.to($asideIconLid, 0.75, {rotation: '-10', ease: Linear.easeNone}, '+=0.5')
;

// All of the values for the times are multiples of 8. Change times in the same proportions

var tween0land = new TimelineMax({repeat: -1, ease: Linear.easeNone})
	.add('lethLandStart')
	.fromTo($lethLandGreen1, 45, {left: '0%'}, {left: '-250%', ease: Linear.easeNone}, 'lethLandStart')
	.fromTo($lethLandGreen2, 63, {left: '100%'}, {left: '-250%', ease: Linear.easeNone}, 'lethLandStart+=27')
	.fromTo($lethLandGreen1, 18, {left: '100%'}, {left: '0%', ease: Linear.easeNone}, 'lethLandStart+=72')
;

var rippleTween = new TimelineMax({repeat: -1, repeatDelay: 1.5})
	.add('1')
	.staggerFromTo([$ripple1, $ripple2], 1, {scale: 0, transformOrigin: '50% 50%'}, {scale: 1}, 0.25, '1')
	.staggerFromTo([$ripple1, $ripple2], 0.2, {autoAlpha: 1}, {autoAlpha: 0}, 0.25, '1+=0.8')
;

var mouseWheelAnim = new TimelineMax({repeat: -1, repeatDelay: 0.2})
	.add('mouseStart')
	.to($mouse, 0, {y: '50%'})
	.fromTo($mouseWheel, 1.25, {y: '-40%', autoAlpha: 0.5}, {y: '30%', autoAlpha: 1}, 'mouseStart')
	.fromTo($mouseArrow, 1.25, {y: '-40%', autoAlpha: 0.5}, {y: '60%', autoAlpha: 1}, 'mouseStart')
;

/////////////////////////////////////////////////////////////////
// SECTION 1: GLOBE
// TWEEN
var tween1 = new TimelineMax()
	.add('1')
	.from($s1t2, 0.5, {top: '100%', ease: Back.easeOut.config(3)}, '1+=0.3')
	.to($s1t2, 0, {'z-index': 5}, '1+=0.5')	// bring it in front of the clouds
	
	.call(fadeAside, [], this, '1+=0.7')	// fade popup if it's open (scroll up)
	.fromTo($aside0, 0.2, {bottom: '-25%', autoAlpha: 1}, {bottom: '0px', right: '0px'}, '1+=0.55')

	.add('2', '1+=1')
	
	.call(checkNavState, '2')
	.call(fadeAside, [], this, '2+=0.1')	// fade popup if it's open
	.to($s1t1, 2, {autoAlpha: 1}, '2')	// placeholder
;

// SCENE
//PIN SECTION
new ScrollMagic.Scene({
	triggerHook: 0,
	triggerElement: '#one',
	duration: '300%'				// extend 100% longer so you don't see it move up
})
	.setPin('#onePin')
	.setTween(tween1)
	.addTo(ctrl);


//////////////////////////////////////////////////////////////
// SECTION 2: CLOUDS
// SCENE FOR HOLDING CLOUD CONTAINERS IN PLACE


// LETS MOVE US SOME CLOUDS AND TEXT
//var frac = (-5/6*100);
//var s2text = ['#s2t1', '#s2t2', '#s2t3', '#s2t4']

var tween2a = new TimelineMax()
	
	.to($cloudCover1, 0, {y: '-83%'})
	.to($cloudCover2, 0, {autoAlpha: 0, bottom: 0, y: '100%'})
	.to(s2text, 0, {y: '50%'})		// centers text completely

	.add('1')
	.fromTo($one, 0.5, {autoAlpha: 1}, {autoAlpha: 0},'1+=0.25')
	.fromTo($cloudsBack, 4, {y: 0}, {y: '-75%', ease: Linear.easeNone}, '1')
	.fromTo($cloudsFront, 4, {y: 0}, {y: (frac + '%'), ease: Linear.easeNone}, '1')

	.fromTo($s2t1, 0.45, {autoAlpha: 1, bottom: '90%'}, {bottom: '60%'}, '1')
//
	.add('2', '1+=1')
	.to($cloudCover1, 1, {y: '-100%'}, '2-=0.5')
	.to($s2t1, 0.5, {bottom: '125%', ease: Power3.easeIn}, '2')

	.fromTo($s2t2, 0.5, {bottom: '-10%', autoAlpha: 1}, {bottom: '50%'}, '2')

//
	.add('3', '2+=1')
	.to($s2t2, 0.5, {bottom: '125%', ease: Power3.easeIn}, '3-=0.1')
	.fromTo($s2t3, 0.62, {bottom: '-10%', autoAlpha: 1}, {bottom: '50%'}, '3')

//
	.add('4', '3+=1')
	.to($s2t3, 0.5, {bottom: '125%', ease: Power3.easeIn}, '4')
	.fromTo($s2t4, 0.5, {bottom: '-10%', autoAlpha: 1}, {bottom: '50%'}, '4+=0.1')


	.to($cloudCover2, 0, {autoAlpha: 1}, '4+=0.5')
	.to($cloudCover2, 0.5, {y: '45%'}, '4+=0.5')
//	.call(checkNavState, [], this, '4+=1')
;

new ScrollMagic.Scene({
	triggerHook: 0,
	triggerElement: '#twoPin',
	duration: '300%'
})
	.setPin('#twoPin')
	.addTo(ctrl);

new ScrollMagic.Scene({
	triggerHook: 1,
	triggerElement: '#twoPin',
	duration: '400%'
})
	.setTween(tween2a)
	.addTo(ctrl);


////////////////////////////////////////////////////////////////
// SECTION 3: FACTORY
//PIN THE SECTION DOWN
new ScrollMagic.Scene({
	triggerHook: 0.05,
	triggerElement: '#threePin',
	duration: '300%'
})
	.setPin('#threePin')
	.addTo(ctrl);

// TWEEN AND SCENE FOR THE FACTORY ANIMATION
//var resIn = [$resSheep, $resLogs, $resRadioactive, $resIngot, $resCart, $resTree,  $resOil];
//var prodOut = [$prodClam, $prodCup, $prodBag, $prodShoe, $prodNews, $prodPhone, $prodBattery];

var tween3conveyor = new TimelineMax()
	.add('start')
	// Animate the conveyor belt gears
	.to($gear, 2, {transformOrigin: '50% 50%', rotation: 360, ease: Linear.easeNone, repeat: -1}, 'start')

	// Bring resources in and send products out
	.staggerFromTo(resIn, 5.25, {left: '-10%'}, {left: '50%', repeat: -1, ease: Linear.easeNone}, 0.75, 'start')
	.staggerFromTo(prodOut, 5.25, {left: '-10%'}, {left: '40%', repeat: -1, ease: Linear.easeNone, transformOrigin: '50% 0'}, 0.75, 'start')
;

new ScrollMagic.Scene({
	triggerHook: 1,
	triggerElement: '#threePin',
})
	.setTween(tween3conveyor)
	.addTo(ctrl);

// TWEEN AND SCENE FOR THE TEXT
var tween3text = new TimelineMax()
	.add('1')
	.fromTo($factoryLandFront, 0.15, {y: '3%'}, {y: '0%'}, '1')
	.add('2', '1+=0.5')
	
	.fromTo($s3t3, 0.5, {x: '-50%', y: '50%', bottom: '-25%', autoAlpha: 1}, {bottom: '55%'}, '2')
	.fromTo($s3t4, 0.5, {x: '-50%', y: '50%', bottom: '-25%', autoAlpha: 1}, {bottom: '50%'}, '2+=0.45')

	.add('3', '2+=1')

	.to($s3t4, 0.5, {autoAlpha: 1})
;

new ScrollMagic.Scene({
	triggerHook: 0,
	triggerElement: '#threePin',
	duration: '300%'
})
	.setTween(tween3text)
	.addTo(ctrl);

/////////////////////////////////////////////////////////////////
// SECTION 4: FILL WITH TRASH AND THEN LANDFILL ANIMATION
// BRING IN FIRST TEXT BEFORE ENTIRE SECTION IS PINNED
var tween4b = new TimelineMax()
	.add('textStart')
	.to($s4t0, 0, {autoAlpha: 1})
	.fromTo($s4t0, 0.2, {top: '40%'}, {top: '30%'})
	.to($s4t1, 0.5, {autoAlpha: 1})
	.fromTo($s4t1, 1, {top: '65%'}, {top: '35%'}, 'textStart+=0.5')
	.to($s4t2, 0.25, {autoAlpha: 1}, 'textStart+=1')
	.fromTo($s4t2, 1, {top: '85%'}, {top: '40%'}, 'textStart+=1')
;
new ScrollMagic.Scene({
	triggerElement: '#fourPin',
	triggerHook: 0.5,
	duration: '100%'
})
	.setTween(tween4b)
	.addTo(ctrl);

//START OF SEQUENCE, PINNED AND READY TO ROLL (literally)
//var garbText = ['#WITH', '#GARBAGE', '#CLOGGED', '#ME', '#BECA', '#CES', '#ITI', '#OUR'];
//var backGarb = ['#garb5', '#garb4', '#garb3', '#garb2'];
//var introText = ['#s4t0', '#s4t1', '#s4t2'];
//var dumpText = ['#s4t6', '#s4t7'];
//var allLand= ['#land', '#landBack', '#landTrees'];
//
//var landwTrees = ['#land', '#landTrees'];
//
//var brownStroke = '#8F776D';
//var brownFill = '#E0C8BE';
//var darkBrownStroke = '#695850';
//
//var garbStroke = ['#garb1 .st0', '#garb1 .st1', '#garb1 .st2', '#garb1 .st4', '#garb1 .st6', '#garb1 .st7', '#garb1 .st9', '#garb1 .st10'];
//var garbFill = ['#garb1 .st2', '#garb1 .st5', '#garb1 .st6'];
//
//var leaves = ['#landLeaves', '.leaf'];
//var decayStrokes = ['#landFront', '#liner', '#landBranches', '.branch', '#hill1', '#hill2', '.grass'];
//
//
//var meth1 = ['#m3', '#m2', '#m6', '#m8'];
//var meth2 = ['#m7', '#m1', '#m4', '#m5'];
//var methAll = meth1.concat(meth2);

var tween4 = new TimelineMax()
	.to(garbText, 0, {autoAlpha: 0})
	
	.to($garb1, 0, {y: '50%'})
	.add('garbStart', '+=0.5')


	//MOVE GARBAGE PILES
	.from($garb1, 1, {bottom: '-30%'}, 'garbStart')
	.fromTo($garb2, 1, {bottom: '-95%'}, {bottom: 0}, 'garbStart')

	.to($garb3, 0, {autoAlpha: 1}, 'garbStart+=0.3')
	.fromTo($garb3, 1, {bottom: '-80%'}, {bottom: 0}, 'garbStart+=0.3')

	.to($garb4, 0, {autoAlpha: 1}, 'garbStart+=0.75')			/*show the section immediately*/
	.fromTo($garb4, 1, {bottom: '-60%'}, {bottom: 0}, 'garbStart+=0.75')

	.to($garb5, 0, {autoAlpha: 1}, 'garbStart+=1.25')
	.fromTo($garb5, 1, {bottom: '-60%'}, {bottom: 0}, 'garbStart+=1.25')

	//MOVE TEXT
	.fromTo(introText, 0.75, {'z-index': 0}, {top: '-=20%'}, 'garbStart+=0.75')

	.add('garbText1')
	.to($OUR, 0, {autoAlpha: 1}, 'garbText1')
	.fromTo($OUR, 1/3, {y: '80%'}, {y: '0%'}, 'garbText1')

	.to([$CES, $ITI], 0, {autoAlpha: 1}, 'garbText1+=0.1')
	.fromTo([$CES, $ITI], 1/3, {y: '80%'}, {y: '0%'}, 'garbText1+=0.1')

	.add('garbText2', 'garbText1+=0.5')	
	.to([$BECA, $ME], 0, {autoAlpha: 1}, 'garbText2')
	.fromTo($BECA, 1/3, {y: '80%'}, {y: '0%'}, 'garbText2')
	.fromTo($ME, 1/3, {y: '100%'}, {y: '0%'}, 'garbText2')

	.to($CLOGGED, 0, {autoAlpha: 1}, 'garbText2+=0.1')
	.fromTo($CLOGGED, 1/3, {y: '80%'}, {y: '0%'}, 'garbText2+=0.1')

	.add('garbText3', 'garbText2+=0.5')
	.to($WITH, 0, {autoAlpha: 1}, 'garbText3')
	.fromTo($WITH, 1/3, {y: '80%'}, {y: '0%'}, 'garbText3')

	.to($GARBAGE, 0, {autoAlpha: 1}, 'garbText3+0.1')
	.fromTo($GARBAGE, 1/3, {y: '48%'}, {y: '0%'}, 'garbText3+0.1')

	.call(fadeAside, [], this, 'garbText3+=0.4')	// fade popup if it's open on scroll up
	.fromTo($aside1, 0.25, {bottom: '-25%', autoAlpha: 1}, {bottom: '0px', right: '0px'}, 'garbText3+=0.2')

	.call(checkNavState, [], this, 'garbText3+=0.65')
//	.call(fadeAside, [], this, 'garbText3+=0.7')	// fade popup if it's open

	.add('garbOut', 'garbText3+=0.75')
	// make land show up behind everything
	.to(landwTrees, 0, {autoAlpha: 1, bottom: '-100%'}, 'garbOut')
	.to($landBack, 0, {autoAlpha: 1, bottom: '-100%'}, 'garbOut')

	.to(backGarb, 1, {bottom: '-110%'}, 'garbOut')		/*trash piles & text make their exit*/
	.to($aside1, 1, {bottom: '-25%'}, 'garbOut')
	.call(fadeAside, [], this, 'garbOut+=0.1')	// fade popup if it's open
	.to([backGarb, $aside1], 0, {autoAlpha: 0}, 'garbOut+=1')	// hide the trash piles so they don't show up anywhere
	.to($WITH, 1, {y: '80%'}, 'garbOut')
	.to($GARBAGE, 1, {y: '48%'}, 'garbOut')

	.to([$WITH, $GARBAGE], 0, {autoAlpha: 0}, 'garbOut+=1')
	.to(introText, 0.25, {autoAlpha: 0}, 'garbOut')					// fade out intro text (behind/above trash)
	
	//LAND
	.add('landStart')
	.fromTo(landwTrees, 1, {left: '-100%', bottom: '-100%'}, {bottom: '-45%', ease: Linear.easeNone}, 'landStart-=1')
	.fromTo($landBack, 1, {left: '-100%', bottom: '-100%'}, {bottom: '-45%'}, 'landStart-=0.5')
	.fromTo($hillFront, 1, {y: '50%'}, {y: '0%'}, 'landStart-=0.5')



	.to($garb1, 0.3, {bottom: '10%', ease: Linear.easeNone}, 'landStart-=0.3') // move garbage up slightly
	.fromTo($dozer, 1, {left: '-55%', bottom: '-45%'}, {left: '0%', x: '-3%', ease: Linear.easeNone}, 'landStart') // move dozer in
	.fromTo($s4t6, 1, {bottom: '50%'}, {bottom: '80%', autoAlpha: 1}, 'landStart-=0.5')
	.fromTo($s4t7, 1, {bottom: '50%'}, {bottom: '75%', autoAlpha: 1}, 'landStart+=1')

	.to(landwTrees, 1, {left: '-200%', ease: Linear.easeNone}, 'landStart+=1') //Flat land, moving over
	.to($landBack, 1, {left: '-200%'}, 'landStart+=1')
	.to($hillFront, 1, {x: '+=20%'}, 'landStart+=1')
	.to($hillBack, 1, {x: '+=22%'}, 'landStart+=1')

	.to($dozer, 1, {left: '-=10%', ease: Linear.easeNone}, 'landStart+=1')	// move trash left
	.to($garb1, 1, {right: '+=10%', ease: Linear.easeNone}, 'landStart+=1')	// move dozer left

	//LANDUP1
	.add('landUp1', 'landStart+=2')
	.to(landwTrees, 1, {left: '-300%', bottom: '0%', ease: Linear.easeNone}, 'landUp1')
	.fromTo($bridge, 1, {bottom: '-100%', x: '15%'}, {bottom: '0%', x: '0%', ease: Linear.easeNone}, 'landUp1')
	.to($landBack, 1, {left: '-300%', bottom: '0%', ease: Linear.easeNone}, 'landUp1')
	.to($hillFront, 1, {x: '+=20%', y: '+=9%', ease: Linear.easeNone}, 'landUp1')
	.to($hillBack, 1, {x: '+=22%', y: '+=12%', ease: Linear.easeNone}, 'landUp1')

//	.to('#dozer', 1, {left: '-=5%', bottom: '0%'}, 'landUp1') //move dozer up & over
	.to($dozer, 1, {bottom: '0%', ease: Linear.easeNone}, 'landUp1') //move dozer up & over
	.to($dozer, 1, {left: '-=10%', ease: Power3.easeInOut}, 'landUp1')
	.to($garb1, 0.35, {bottom: '30%', ease: Linear.easeNone}, 'landUp1')	// move trash up & over
	.to($s4t6, 1, {bottom: '90%'}, 'landUp1')	// move text up
	.to($s4t7, 1, {bottom: '85%'}, 'landUp1')

	.to($garb1, 0.75, {right: '+=5%', transformOrigin: '75% 50%', rotation: 180, ease: Linear.easeNone}, 'landUp1+=0.4')
	.to($garb1, 0.75, {bottom: '10%',  ease: Power1.easeOut}, 'landUp1+=0.45')
	.fromTo($s4t8, 0.5, {bottom: '-25%', y: '50%', left: '3%', autoAlpha: 1}, {bottom: '25%'}, 'landUp1+=1')

	.call(fadeAside, [], this, 'landUp1+=1.7')
	.fromTo($aside2, 0.5, {bottom: '-25%', autoAlpha: 1}, {bottom: '0px', right: '0px'}, 'landUp1+=1.25')

	.call(checkNavState, [], this, 'landUp1+=1.9')

	//TURN LEFT (DONE WITH COULEE)
	.add('turnLeft', 'landUp1+=2')
	.to($dozer, 0, {scaleX: '-1', left: '-=4%', ease: Linear.easeNone}, 'turnLeft') // flip dozer around
	.to(landwTrees, 1, {left: '-200%', bottom: '-45%', ease: Linear.easeNone}, 'turnLeft')
	.to($landBack, 1, {left: '-200%', bottom: '-45%', ease: Linear.easeNone}, 'turnLeft')
	.to($hillFront, 1, {x: '-=20%', y: '-=9%', ease: Linear.easeNone}, 'turnLeft')
	.to($hillBack, 1, {x: '-=22%', y: '-=12%', ease: Linear.easeNone}, 'turnLeft')
	.to($bridge, 0.5, {bottom: '-40%', x: '15%', ease: Linear.easeNone}, 'turnLeft')
	.to($bridge, 0, {autoAlpha: 0}, 'turnLeft+=0.5')
	.to($aside2, 0.5, {right: '-25%'}, 'turnLeft')
	.call(fadeAside, [], this, 'turnLeft')	// fade popup if it's open

	.to($garb1, 1, {bottom: '-=40%', right: '-50%'}, 'turnLeft')	// keep trash in coulee
	.to($dozer, 1, {bottom: '-45%', ease: Linear.easeNone}, 'turnLeft') //move dozer down
	.to(dumpText, 0.5, {bottom: '-=15%', left: '+=150%'},'turnLeft')	// move text off
	.to($s4t8, 0.5, {bottom: '-=50%', left: '+=75%'}, 'turnLeft')	// separate so it goes @ same time

	.to(allLand, 1, {left: '-100%', ease: Linear.easeNone}, 'turnLeft+=1')
	.to($hillFront, 1, {x: '-=20%', ease: Linear.easeNone}, 'turnLeft+=1')
	.to($hillBack, 1, {x: '-=22%', ease: Linear.easeNone}, 'turnLeft+=1')
	
	.to($dozer, 1.5, {left: '+=40%', ease: Linear.easeNone}, 'turnLeft')	// move dozer to the left	
	.to($garb1, 0, {right: '100%', bottom: '8%'}, 'turnLeft+=1')	// reset the trash position
	.to($garb1, 0.5, {right: '42%', ease: Linear.easeNone}, 'turnLeft+=1') // trash back into frame
	.to($s4t9, 0.5, {autoAlpha: 1, bottom: '70%'}, 'turnLeft+=0.5')

	//LANDUP2
	.add('landUp2', 'turnLeft+=2')
	.to(landwTrees, 1, {left: '0%', bottom: '0%', ease: Linear.easeNone}, 'landUp2')
	.to($landBack, 1, {left: '0%', bottom: '0%', ease: Linear.easeNone}, 'landUp2')
	.to($hillFront, 1, {x: '-=20%', y: '+=9%', ease: Linear.easeNone}, 'landUp2')
	.to($hillBack, 1, {x: '-=22%', y: '+=12%', ease: Linear.easeNone}, 'landUp2')

	.to($garb1, 0.5, {bottom: '35%', ease: Linear.easeNone}, 'landUp2') 	// move trash up partway
	.to($dozer, 1, {bottom: '0%', ease: Linear.easeNone}, 'landUp2') // Move dozer up too
	.to($s4t9, 1, {bottom: '+=10%'}, 'landUp2')

	.to($garb1, 0.65, {transformOrigin: '75% 50%', rotation: 0, ease: Power1.easeIn}, 'landUp2+=0.35')
	.to($garb1, 0.6, {bottom: '10%', ease: Power1.easeOut}, 'landUp2+=0.6')
	.fromTo($s4t10, 1, {bottom: '-25%', y: '50%', right: '8%', autoAlpha: 1}, {bottom: '25%'}, 'landUp2+=1')

	.add('decay')

	.to($s4t10, 1, {color: '#8F7760'}, 'decay')
	.to($s4t9, 1, {autoAlpha: 0}, 'decay')
	.to('#dozer .st0', 1.75, {stroke: brownStroke, fill: brownFill}, 'decay+=1')
	.to('#dozer .st1', 1.75, {stroke: brownStroke}, 'decay+=1')
	.to('#dozer .st2', 1.75, {fill: brownStroke}, 'decay+=1')

	.to(leaves, 1.75, {fill: brownFill}, 'decay')
	.to(decayStrokes, 1, {stroke: brownStroke}, 'decay+=1')
	.to(garbStroke, 2, {stroke: brownStroke}, 'decay+=0.5')
	.to(garbFill, 2, {fill: brownFill}, 'decay+=0.5')
	.to('#garb1 .st8', 2, {fill: brownStroke}, 'decay')
	.to($landfillGreenDots, 2, {autoAlpha: 0}, 'decay')
	.fromTo($landfillBrownDots, 2, {autoAlpha: 0}, {autoAlpha: 1}, 'decay')
	
	// make the leaves disappear
	.to(leaves, 1, {autoAlpha: 0}, 'decay+=1.25')
	// make the garbage "decay"
	.to($garb1, 2.5, {scaleX: 1.05, scaleY: 0.95}, 'decay+=0.5')
	.fromTo(methAll, 2, {autoAlpha: 0, stroke: brownStroke}, {autoAlpha: 1}, 'decay')
	.call(checkNavState, [], this, 'decay+=2')

;
							
new ScrollMagic.Scene({	
	triggerElement: '#fourPin',
	triggerHook: 'onLeave',
	duration: '1800%'
})
	.setTween(tween4)
	.addTo(ctrl);

//var stag1 = 0.3;
//var stag2 = 0.7;

//Methane animation
var tween4meth1 = new TimelineMax({repeat: -1, ease: Linear.easeNone})
	.add('methane1Start')

	.staggerFromTo(meth1, 0.7, {drawSVG: '100% 100%'}, {drawSVG: '50% 100%', ease: Linear.easeNone}, stag1, 'methane1Start')
	.staggerTo(meth1, 0.35, {drawSVG: '75% 25%', ease: Linear.easeNone}, stag1, 'methane1Start+=0.7')
	.staggerTo(meth1, 0.7, {drawSVG: '0% 0%', ease: Linear.easeNone}, stag1, 'methane1Start+=1.05')
;

var tween4meth2 = new TimelineMax({repeat: -1, ease: Linear.easeNone})
	.add('methane2Start')
	.staggerFromTo(meth2, 0.8, {drawSVG: '100% 100%'}, {drawSVG: '50% 100%', ease: Linear.easeNone}, stag2, 'methane2Start')
	.staggerTo(meth2, 0.4, {drawSVG: '75% 25%', ease: Linear.easeNone}, stag2, 'methane2Start+=0.8')
	.staggerTo(meth2, 0.8, {drawSVG: '0% 0%', ease: Linear.easeNone}, stag2, 'methane2Start+=1.2')
	.addCallback(randVal, 'methane2Start+=2')
;

new ScrollMagic.Scene({
	triggerHook: 1,
	triggerElement: '#fourPin'
})
	.setTween(tween4meth1, tween4meth2)
	.addTo(ctrl);

//SCENE JUST TO HOLD THE PIN, SINCE ITS A DIFFERENT LENGTH THAN THE REST OF EVERYTHING
new ScrollMagic.Scene({
	triggerElement: '#fourPin',
	triggerHook: 'onLeave',
	duration: '1700%'
})
	.setPin('#fourPin')
	.addTo(ctrl);


////////////////////////////////////////////
// SECTION 5: TRASH DATA
// This is where the garbage is split into sections and we see the data from Lethbridge's landfill

// Scene to pin the section
new ScrollMagic.Scene({
	triggerElement: '#fivePin',
	triggerHook: 'onLeave',
	duration: '800%'
})
	.setPin('#fivePin')
	.addTo(ctrl);

//// TWEEN AND SEQUENCE
//var s5t123 = ['#s5t1', '#s5t2', '#s5t3'];
//var icons = ['#orgIcon', '#recyIcon', '#garbIcon'];
//var perc = ['#garbPerc', '#recyPerc', '#orgPerc'];
//var gData = ['#g1', '#g2', '#g3', '#g4', '#g5', '#g6', '#g7', '#g8', '#g9', '#g10', '#g11', '#g12', '#g13', '#g14', '#g15', '#g16', '#g17', '#g18', '#g19', '#g20', '#g21'];
//var rData = ['#r1', '#r2', '#r3', '#r4', '#r5', '#r6', '#r7', '#r8', '#r9', '#r10', '#r11', '#r12', '#r13', '#r14', '#r15', '#r16', '#r17', '#r18', '#r19', '#r20', '#r21'];
//var oData = ['#o1', '#o2', '#o3', '#o4', '#o5', '#o6', '#o7', '#o8', '#o9', '#o10', '#o11', '#o12', '#o13', '#o14', '#o15', '#o16', '#o17', '#o18', '#o19', '#o20', '#o21', '#o22', '#o23', '#o24', '#o25', '#o26', '#o27', '#o28', '#o29', '#o30', '#o31', '#o32', '#o33', '#o34', '#o35', '#o36'];
//
//var sections = ['#one', '#two', '#three', '#four']
//var landData = ['#garbData', '#recyData', '#orgData'];
//var bins = ['#garbBin', '#recyBin', '#orgBin'];
//var binLids = ['#garbBinLid', '#recyBinLid', '#orgBinLid'];
//var s5tFade = ['#s5t3', '#s5t4', '#s5t5', '#s5t6', '#s5t7', '#garbPerc', '#recyPerc', '#orgPerc']
//var tgtw = ['#s5t9', '#s5t10', '#s5t11']
//
//var garbDataHeight = $('#garbData').height();
//var recyDataHeight = $('#recyData').height();
//var orgDataHeight = $('#orgData').height();
//
//var garbIconHeight = $('#garbIcon').height();
//var recyIconHeight = $('#recyIcon').height();
//var orgIconHeight = $('#orgIcon').height();
//
//var binHeightFull = $('#garbBin').height();
//var binHeightBottom = $('#garbBinBody')[0].getBoundingClientRect().height;

var tween5 = new TimelineMax()
	.add('1')

	.fromTo($s5t1, 1, {bottom: '30%'}, {bottom: '70%', autoAlpha: 1}, '1+=0.25')
	.fromTo($s5t2, 1, {bottom: '25%'}, {bottom: '65%', autoAlpha: 1}, '1+=0.75')

	////////////////////
	.add('2', '1+=1.55')

	.to(icons, 0, {autoAlpha: 1, 'z-index': 3}, '2+=0.25')
	.to($s5t3, 0.5, {bottom: '45%', autoAlpha: 1}, '2+=0.5')
	.fromTo($s5t1, 0.75, {bottom: '70%'}, {bottom: '150%'}, '2+=1.2')
	.fromTo($s5t2, 0.75, {bottom: '65%'}, {bottom: '145%'}, '2+=1.2')	

	.to($s5t3, 0.75, {bottom: '85%'}, '2+=1.2')
	.fromTo($s5t4, 0.5, {bottom: '60%'}, {bottom: '80%', autoAlpha: 1}, '2+=1.5')

	.add('2.5', '2+=1.7')

	// move icons and text in from the bottom- coming in from center and corners!
	.fromTo($s5t5, 0.3, {left: 0, bottom: 0, autoAlpha: 1, x: '-100%', y: '100%'}, {bottom: garbIconHeight, x: '-50%', y: '-25%', left: '25%'}, '2.5')
	.fromTo($s5t6, 0.3, {left: '50%', bottom: 0, autoAlpha: 1, x: '-50%', y: '100%'}, {bottom: recyIconHeight, y: '-25%'}, '2.5')
	.fromTo($s5t7, 0.3, {left: '100%', bottom: 0, autoAlpha: 1, x: '100%', y: '100%'}, {bottom: orgIconHeight, left: '75%', x: '-50%', y: '-25%'}, '2.5')

	.fromTo($garbIcon, 0.25, {left: 0, x: '-100%', bottom: 0, y: '100%'}, {left: '25%', x: '-50%', y: '0%'}, '2.5')
	.fromTo($recyIcon, 0.25, {left: '50%', bottom: 0, x: '-50%', y: '100%'}, {y: '0%'}, '2.5')
	.fromTo($orgIcon, 0.25, {left: '100%', bottom: 0, x: '100%', y: '100%'}, {left: '75%', x: '-50%', y: '0%'}, '2.5')

	/////////////////////
	.add('3', '2.5+=0.4')

	// set percentages in position
	.to($garbPerc, 0, {left: '25%'})
	.to($recyPerc, 0, {left: '50%'})
	.to($orgPerc, 0, {left: '75%'})
	.to(perc, 0, {autoAlpha: 1, bottom: '110%', x: '-50%', y: '50%'}, '3')

	// drop percentages in, wiggle them to give impression of "landing"
	.fromTo($garbPerc, 0.25, {left: '25%'}, {bottom: '25%', ease: Expo.easeIn}, '3')
	.to($garbPerc, 0.05, {rotation: '5'}, '3+=0.25')
	.to($garbPerc, 0.05, {rotation: '-5'}, '3+=0.3')
	.to($garbPerc, 0.05, {rotation: '0'}, '3+=0.35')

	.to($garbIcon, 0.3, {top: '100%', scale: 0.25}, '3+=0.3')	//shrink large icon
	.to($garbData, 0, {bottom: 0, left: '25%', x: '-50%', autoAlpha: 1}, '3+=0.5')	//set data in place
	.staggerTo(gData, 0, {autoAlpha: 1}, 0.0075, '3+=0.5')	// bring in little icons
	.to([$s5t5, $garbPerc], 0.27, {bottom: '+=' + (garbDataHeight-garbIconHeight)}, '3+=0.5')

	/////////////////////
	.add('4', '3+=0.35')

	.fromTo($recyPerc, 0.25, {left: '50%'}, {bottom: '25%', ease: Expo.easeIn}, '4')
	.to($recyPerc, 0.05, {rotation: '5'}, '4+=0.25')
	.to($recyPerc, 0.05, {rotation: '-5'}, '4+=0.3')
	.to($recyPerc, 0.05, {rotation: '0'}, '4+=0.35')

	.to($recyIcon, 0.25, {top: '100%', scale: 0.25}, '4+=0.3')
	.to($recyData, 0, {bottom: 0, left: '50%', x: '-50%', autoAlpha: 1}, '4+=0.5')
	.staggerTo(rData, 0, {autoAlpha: 1}, 0.0075, '4+=0.5')
	.to([$s5t6, $recyPerc], 0.25, {bottom: '+=' + (recyDataHeight-recyIconHeight)}, '4+=0.5')


	////////////////////
	.add('5', '4+=0.35')

	.fromTo($orgPerc, 0.25, {left: '75%'}, {bottom: '25%', ease: Expo.easeIn}, '5')
	.to($orgPerc, 0.05, {rotation: '5'}, '5+=0.25')
	.to($orgPerc, 0.05, {rotation: '-5'}, '5+=0.3')
	.to($orgPerc, 0.05, {rotation: '0'}, '5+=0.35')

	.to($orgIcon, 0.25, {top: '100%', scale: 0.25}, '5+=0.3')
	.to($orgData, 0, {bottom: 0, left: '75%', x: '-50%', autoAlpha: 1}, '5+=0.5')
	.staggerTo(oData, 0, {autoAlpha: 1}, 0.0075, '5+=0.5')
	.to([$s5t7, $orgPerc], 0.48, {bottom: '+=' + (orgDataHeight-orgIconHeight)}, '5+=0.5')

	////////////////////
	.add('6', '5+=1.7')
	.to(s5tFade, 0.5, {autoAlpha: 0}, '6')
	.to(landData, 1, {bottom: '+=' + (binHeightBottom)}, '6')
	.fromTo(bins, 1, {bottom: '-50%', x: '-65%'}, {bottom: 0}, '6-=0.25')
	.staggerFromTo(binLids, 0.75, {transformOrigin: '100% 100%', rotation: '90'}, {rotation: '-30'}, 0.05, '6+=0.25')

	.fromTo($s5t8, 1, {bottom: '100%', autoAlpha: 1}, {bottom: '75%', ease: Expo.easeIn}, '6-=0.25')

	///////////////////
	.add('9', '6+=1')
	.staggerTo(landData, 1, {bottom: '-50%'}, 0.5, '9+=0.75')

	/////////////////
	.add('10', '9+=1')
	.staggerFromTo(tgtw, 0.1, {bottom: '50%', autoAlpha: 0}, {autoAlpha: 1}, 0.5, '10-=0.05')

	.add('11', '10+=0.75')
	.to(binLids, 0.25, {rotation: 90, ease: Power2.easeIn}, '11+=0.5')
	.fromTo($s5t12, 0.35, {autoAlpha: 1, bottom: '100%'}, {bottom: '45%', y: '75%', ease: Expo.easeIn}, '11+=0.4')
	.to($s5t12, 0.04, {rotation: '5'}, '11+=0.7')
	.to($s5t12, 0.04, {rotation: '-5'}, '11+=0.74')
	.to($s5t12, 0.04, {rotation: '0'}, '11+=0.78')

	.add('12', '11+=1.25')

	.to('.fiveContainer *', 0.75, {autoAlpha: 0}, '12')
	// FUTURE GENERATIONS WILL WONDER 
	.fromTo($s5t13, 0.25, {bottom: '50%', y: '50%'}, {autoAlpha: 1}, '12+=0.75')
	.to($s5t13, 0.25, {autoAlpha: 0}, '12+=1.75')
;

new ScrollMagic.Scene({
	triggerElement: '#fivePin',
	triggerHook: 1,
	duration: '800%'
})
	.setTween(tween5)
	.addTo(ctrl);


////////////////////////////////////////////
// SECTION 6: Lethbridge
// This is where we tie all these claims back to Lethbridge 

var tween6 = new TimelineMax()
	.to(sec6offRight, 0, {autoAlpha: 1, bottom: '85%'})
	.to(sec6offBottom, 0, {autoAlpha: 1, bottom: '-100%'})
	.to(sec6offTop, 0, {autoAlpha: 1, bottom: '150%'})
	
/////  1  /////
	.add('1')

	.to($s6t1, 0, {autoAlpha: 1, bottom: '65%'}, '1')
	.to($s6t2, 0.2, {autoAlpha: 1, bottom: '60%'}, '1+=0.2')

	.call(fadeAside, [], this, '1+=0.65')	// fade popup if it's open

	.to([$s6t1, $s6t2], 0.25, {bottom: '+=15%'}, '1+=0.7')		// move first sentence up
	.fromTo($s6t3, 0.3, {bottom: '65%'}, {autoAlpha: 1, bottom: '60%'}, '1+=0.7')

	.call(fadeAside, [], this, '1+=0.8')	// fade popup if it's open
	.fromTo($aside3, 0.2, {bottom: '-25%', autoAlpha: 1}, {bottom: '0px', right: '0px'}, '1+=0.65')

	.call(checkNavState, [], this, '1+=1')
	
/////  2  /////
	.add('2', '1+=1.1')	
	.to(sec6g1, 0.2, {left: '-150%'}, '2')	// move out group1
	.to([$lethLandBlue1, $lethLandBlue2], 0.2, {bottom: '-100%'}, '2')
	.to(sec6g1, 0, {autoAlpha: 0})
	.to($aside3, 0.1, {bottom: '-25%'}, '2')
	.call(fadeAside, [], this, '2')	// fade popup if it's open

	.from($s6t4, 0.25, {right: '-200%', ease: Linear.easeNone}, '2')

	.fromTo($wasteHome, 0.5, {right: '-100%'}, {right: '0%', ease: Power2.easeInOut}, '2-=0.1')

	.fromTo($s6t5, 0.25, {bottom: '60%', scale: 0.75}, {autoAlpha: 1, bottom: '75%', scale: 1}, '2+=0.55')
	.fromTo($s6t6, 0.2, {bottom: '50%', scale: 0.75}, {autoAlpha: 1, bottom: '70%', scale: 1}, '2+=0.65')

/////  3  /////
	.add('3', '2+=1')
	.to(sec6g2, 0.2, {left: '-160%'}, '3')	// move out group2
	.to($s6t4, 0.05, {left: '-200%', autoAlpha: 0, ease: Linear.easeNone}, '3+=0.2')
	.to($wasteHome, 0.25, {right: '100%', ease: Power2.easeInOut}, '3+=0.05')

	.fromTo($wasteWork, 0.5, {right: '-100%'}, {right: '0%', ease: Power2.easeInOut}, '3-=0.1')
	.from($s6t7, 0.25, {right: '-150%', ease: Linear.easeNone}, '3')
	.call(fadeAside, [], this, '3+=0.2')
	.fromTo($aside5, 0.2, {bottom: '-25%', autoAlpha: 1}, {bottom: '0px', right: '0px'}, '3+=0.15')

	.call(checkNavState, [], this, '3+=0.45')

/////  4  /////
	.add('4', '3+=0.55')

	.to($s6t7, 0.2, {left: '-150%', ease: Linear.easeNone}, '4')
	.to($aside5, 0.1, {bottom: '-25%'}, '4')
	.call(fadeAside, [], this, '4+=0.05')	// fade popup if it's open

	.to($wasteWork, 0.25, {right: '100%', ease: Power2.easeInOut}, '4+=0.05')

	.fromTo($wasteFreeTime, 0.5, {right: '-100%'}, {right: '0%', ease: Power2.easeInOut}, '4-=0.1')
	.from($s6t8, 0.25, {right: '-150%', ease: Linear.easeNone}, '4')

	.to($s6t8, 0.2, {left: '-150%', ease: Linear.easeNone}, '4+=0.75')
	.to($wasteFreeTime, 0.25, {right: '100%'}, '4+=0.75')

/////  5  /////
	.add('5', '4+=0.75')

	.to($s6t9, 0.5, {bottom: '70%'}, '5-=0.15')
	.staggerFromTo(pop, 0.3, {bottom: '-=100%'}, {bottom: 0}, 0.075, '5')

	.call(fadeAside, [], this, '5+=0.4')	// fade popup if it's open

	.fromTo($s6t10, 0.5, {bottom: '-50%', 'z-index': 1}, {bottom: '50%'}, '5+=0.25')	
	.fromTo($aside4, 0.3, {bottom: '-25%', autoAlpha: 1}, {bottom: '0px', right: '0px'}, '5+=0.5')


	.call(checkNavState, [], this, '5+=1')

/////  6- water tower  /////
	.add('6', '5+=1.26')
	.to([$s6t9, $s6t10], 0.25, {bottom: '-50%'}, '6')
	.to($aside4, 0.25, {bottom: '-25%'}, '6')
	.call(fadeAside, [], this, '6')	// fade popup if it's open
	.to($population, 0.25, {bottom: '-=100%'}, '6')
	.to($s6t11, 0.2, {bottom: '85%'}, '6')

	.to($s6t12, 0, {autoAlpha: 1}, '6')
	.from($waterTower, 0.25, {right: '-100%'}, '6+=0.4')
	.fromTo($waterTowerPile, 0.35, {bottom: '-=100%', autoAlpha: 1}, {bottom: 0}, '6+=0.7')
	.from($s6t12, 0.35, {left: '150%'}, '6+=0.2')


/////  7- train bridge  /////
	.add('7', '6+=1.25')
	.to([$s6t11, $s6t12], 0.2, {left: '-150%'}, '7')
	.to($s6t11, 0.05, {autoAlpha: 0}, '7+=0.2')
	.to($s6t13, 0.2, {bottom: '65%'}, '7')
	.to($waterTower, 0.25, {right: '+=150%'}, '7')

	.fromTo($trainSceneBridge, 0.25, {bottom: '-=100%', right: 0}, {bottom: 0}, '7')

	.fromTo($train, 1.1, {right: '-150%', bottom: 0}, {right: 0}, '7+=0.2')
	.to($trainSceneBridge, 1.1, {right: '-=100%'}, '7+=0.2')

/////  8- galt gardens  /////
	.add('8', '7+=1.5')
	.to($s6t13, 0.2, {bottom: '-100%'}, '8')
	.to([$train, $trainSceneBridge], 0.25, {bottom: '-=100%'}, '8-=0.05')
	.to($s6t14, 0.5, {bottom: '75%'}, '8+=0.25')
	.fromTo(galtGardens, 0.5, {bottom: '100%', left: 0}, {bottom: '0%'}, '8')
	.staggerFromTo(galtGarb, 0.3, {bottom: '100%', left: 0, y: 0}, {bottom: '0%', ease: Power3.easeIn, y: 100}, 0.075, '8+=0.75')

/////  9  /////
	.add('9', '8+=1.25')
	.to($s6t14, 0.5, {bottom: '-=100%'}, '9')

	.to($s6t15, 0.25, {autoAlpha: 1}, '9+=0.2')
	.to($s6t15, 0.25, {autoAlpha: 0}, '9+=0.65')

/////  10  /////
	.add('10', '9+=0.9')
	
	.fromTo($s6t16, 0.25, {autoAlpha: 0, bottom: '85%'}, {autoAlpha: 1}, '10')
	.fromTo($s6t17, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, '10+=0.5')
	.to(galtGardens, 0.1, {autoAlpha: 1}, '10+=1')
;

// Scene to pin the section
new ScrollMagic.Scene({
	triggerElement: '#sixPin',
	triggerHook: 'onLeave',
	duration: '2000%'
})
	.setPin('#sixPin')
	.addTo(ctrl);

new ScrollMagic.Scene({
	triggerElement: '#sixPin',
	triggerHook: 0,
	duration: '2000%'
})
	.setTween(tween6)
	.addTo(ctrl);


// THIS HOLDS ALL OF THE CONSTANTLY LOOPING ANIMATIONS ON THE SCENES (fire)
// note- morph doesn't like the jQuery variables
MorphSVGPlugin.convertToPath("#s1a, #s1b, #s2a, #s2b, #s3a, #s3b, #s4a, #s4b, #s5a, #s5b, #s6a, #s6b, #s7a, #s7b, #s8a, #s8b, #s9a, #s9b, #s10a, #s10b, #s11a, #s11b");
MorphSVGPlugin.convertToPath("#t1b-8, #t1a-8, #t2b-8, #t2a-8");

var tween6freeTime = new TimelineMax()
.add('freeStart')
	.to('#fire1', 1, {morphSVG: '#fire2', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s1a', 0.5, {morphSVG: '#s1b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s2a', 0.5, {morphSVG: '#s2b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s3a', 0.5, {morphSVG: '#s3b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s4a', 0.5, {morphSVG: '#s4b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s5a', 0.5, {morphSVG: '#s5b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s6a', 0.5, {morphSVG: '#s6b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s7a', 0.5, {morphSVG: '#s7b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s8a', 0.5, {morphSVG: '#s8b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s9a', 0.5, {morphSVG: '#s9b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s10a', 0.5, {morphSVG: '#s10b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
	.to('#s11a', 0.5, {morphSVG: '#s11b', repeat: -1, yoyo: true, ease: Linear.easeNone}, 'freeStart')
;


var tween6clouds = new TimelineMax()
	.add('cloudStart')
	.to($homeCloud1a, 17, {morphSVG: $homeCloud1b,repeat: -1, ease: Linear.easeNone}, 'cloudStart+=7')
	.to($homeCloud2a, 29, {morphSVG: $homeCloud2b,repeat: -1, ease: Linear.easeNone}, 'cloudStart')
;

var tween6wind = new TimelineMax({repeat: -1})
	.add('windStart')
	.staggerFromTo(wind1, 0.4, {drawSVG: '0%'}, {drawSVG: '0% 60%', ease: Linear.easeNone}, stag1, 'windStart')
	.staggerFromTo(wind1, 0.5, {drawSVG: '0% 60%'}, {drawSVG: '40% 100%', ease: Linear.easeNone}, stag1, 'windStart+=0.4')
	.staggerFromTo(wind1, 0.4, {drawSVG: '40% 100%'}, {drawSVG: '100% 100%', ease: Linear.easeNone}, stag1, 'windStart+=0.9')

	.staggerFromTo(wind2, 0.4, {drawSVG: '0%'}, {drawSVG: '0% 60%', ease: Linear.easeNone}, stag2, 'windStart')
	.staggerFromTo(wind2, 0.5, {drawSVG: '0% 60%'}, {drawSVG: '40% 100%', ease: Linear.easeNone}, stag2, 'windStart+=0.4')
	.staggerFromTo(wind2, 0.4, {drawSVG: '40% 100%'}, {drawSVG: '100% 100%', ease: Linear.easeNone}, stag2, 'windStart+=0.9')
;

var tween6tree = new TimelineMax({repeat: -1, yoyo: true, ease: Elastic.easeOut.config(1,0.5)})
	.add('treeStart')

	.to($t1a1, 2, {morphSVG: $t1b1}, 'treeStart')
	.to($t1a2, 2, {morphSVG: $t1b2}, 'treeStart')
	.to($t1a3, 2, {morphSVG: $t1b3}, 'treeStart')
	.to($t1a4, 2, {morphSVG: $t1b4}, 'treeStart')
	.to($t1a5, 2, {morphSVG: $t1b5}, 'treeStart')
	.to($t1a6, 2, {morphSVG: $t1b6}, 'treeStart')
	.to($t1a7, 2, {morphSVG: $t1b7}, 'treeStart')
	.to('#t1a-8', 2, {morphSVG: '#t1b-8'}, 'treeStart')

//	.to($t1a8, 2, {morphSVG: $t1b8}, 'treeStart')
//
	.to($t2a1, 2, {morphSVG: $t2b1}, 'treeStart')
	.to($t2a2, 2, {morphSVG: $t2b2}, 'treeStart')
	.to($t2a3, 2, {morphSVG: $t2b3}, 'treeStart')
	.to($t2a4, 2, {morphSVG: $t2b4}, 'treeStart')
	.to($t2a5, 2, {morphSVG: $t2b5}, 'treeStart')
	.to($t2a6, 2, {morphSVG: $t2b6}, 'treeStart')
	.to($t2a7, 2, {morphSVG: $t2b7}, 'treeStart')
	.to('#t2a-8', 2, {morphSVG: '#t2b-8'}, 'treeStart')
//	.to($t2a8, 2, {morphSVG: $t2b8}, 'treeStart')
;

var tween6fount = new TimelineMax({repeat: -1})
	.add('fountStart')

	.staggerFromTo(fount1, 0.1, {drawSVG: '0%'}, {drawSVG: '0% 30%', ease: Linear.easeNone}, stag1, 'fountStart')
	.staggerFromTo(fount1, 0.5, {drawSVG: '0% 30%'}, {drawSVG: '60% 90%', ease: Linear.easeNone}, stag1, 'fountStart+=0.1')
	.staggerFromTo(fount1, 0.2, {drawSVG: '60% 90%'}, {drawSVG: '100% 100%', ease: Linear.easeNone}, stag1, 'fountStart+=0.6')

	.staggerFromTo(fount2, 0.1, {drawSVG: '0%'}, {drawSVG: '0% 30%', ease: Linear.easeNone}, stag2, 'fountStart+=0.2')
	.staggerFromTo(fount2, 0.5, {drawSVG: '0% 30%'}, {drawSVG: '60% 90%', ease: Linear.easeNone}, stag2, 'fountStart+=0.3')
	.staggerFromTo(fount2, 0.2, {drawSVG: '60% 90%'}, {drawSVG: '100% 100%', ease: Linear.easeNone}, stag2, 'fountStart+=0.8')
	.addCallback(randVal, 'fountStart+=1')	//update stagger values
;

var tween6leth = new TimelineMax({repeat: -1, ease: Linear.easeNone})
	.add('lethLandB1Start')
	.fromTo($lethLandBlue1, 45, {left: '0%'}, {left: '-250%', ease: Linear.easeNone}, 'lethLandB1Start')
	.fromTo($lethLandBlue2, 63, {left: '100%'}, {left: '-250%', ease: Linear.easeNone}, 'lethLandB1Start+=27')
	.fromTo($lethLandBlue1, 18, {left: '100%'}, {left: '0%', ease: Linear.easeNone}, 'lethLandB1Start+=72')
;

new ScrollMagic.Scene ({
	triggerElement: '#sixPin',
	duration: 0
})
	.setTween(tween6leth, tween6clouds, tween6wind, tween6freeTime, tween6fount, tween6tree)	
	.addTo(ctrl);


////////////////////////////////////////////
// SECTION 7: Waste Interactive
// This is where we show how small actions can make a large impact

var tween7a = new TimelineMax()
	.to($slide1, 0.75, {autoAlpha: 1})
//
	.add('1')
	.fromTo($slide1, 1, {left: '0%'}, {left: '-100%'}, '1')
	.fromTo($slide2, 1, {left: '100%', bottom: '0%'}, {left: '0%'}, '1')	// slide 2 in
	.call(checkNavState, [], this, '1+=2')
	.call(tween7garDoorTrig, [], this, '1+=2.5')	
//
	.add('2', '1+=5')

	.to($slide2, 1, {bottom: '100%'}, '2')
	.fromTo($slide3, 1, {bottom: '-200%', left: '0%'}, {bottom: '0%'}, '2')
	.call(checkNavState, [], this, '2+=2')
	.call(tween7cupsTrig, [], this, '2+=2.5')
//
	.add('3', '2+=5')
	.to($slide3, 1, {left: '100%'}, '3')
	.fromTo($slide4, 1, {left: '-100%', bottom: '0%'}, {left: '0%'}, '3')
	.call(checkNavState, [], this, '3+=2')
	.call(tween7bathroomBoxTrig, [], this, '3+=2.5')
	.call(tween7bathroomBinTrig, [], this, '3+=3')

//
	.add('4', '3+=6')
	.to($slide4, 1, {bottom: '100%'}, '4')
	.fromTo($slide5, 1, {bottom: '-200%', left: '0%'}, {bottom: '0%'}, '4')
	.call(checkNavState, [], this, '4+=2')
	.call(tween7mowerTrig, [], this, '4+=2.5')

//
	.add('5', '4+=5.1')
	.to($slide5, 1, {left: '-100%'}, '5')
	.fromTo($slide6, 1, {left: '100%', bottom: '0%'}, {left: '0%'}, '5')
	.call(checkNavState, [], this, '5+=2')
	.call(tween7bagsTrig, [], this, '5+=2.5')

	.to($slide2, 2, {autoAlpha: 1})
;

new ScrollMagic.Scene ({
	triggerElement: '#sevenPin',
	triggerHook: 0,
	duration: '900%'
})
	.setTween(tween7a)
	.setPin('#sevenPin')
	.addTo(ctrl);

//STATIC ANIMATIONS FOR SECTION 7
/////////////////////////////////
var tween7garDoor = new TimelineMax({repeat: -1, ease: Linear.easeNone})
	.fromTo($garageDoor, 1, {y: '-5%'}, {y: '0%', ease: Bounce.easeOut})
	.to($garageDoor, 0.5, {y: '-5%'})
;

var cupLidShake = ($cupLid.toArray());		
shuffle(cupLidShake);									// randomly assign the cups into even/odd arrays

var tween7cups = new TimelineMax({repeat: -1, ease: Linear.easeNone})
	.to($cups, 0, {x:'0.0001%'})
	.to($treeData, 0, {x: '150%'})
	.add('cupStart')
	.staggerTo(cupLidShake, 0, {transformOrigin: '50% 50%'}, 0.25, 'cupStart')

	.staggerTo(cupLidShake, 0.2, {y: -20, ease: Power2.easeIn}, 0.25, 'cupStart')	//move up
	.staggerTo(cupLidShake, 0.2, {y: 0, ease: Power2.easeOut}, 0.25, 'cupStart+=0.3') // move down
	.staggerTo(cupLidShake, 0.1, {rotation: '8', ease: Linear.easeNone}, 0.25, 'cupStart')
	.staggerTo(cupLidShake, 0.2, {rotation: '-8', ease: Linear.easeNone}, 0.25, 'cupStart+=0.1')
	.staggerTo(cupLidShake, 0.1, {rotation: '0', ease: Linear.easeNone}, 0.25, 'cupStart+=0.3')
;

var tween7bathroomBox = new TimelineMax({repeat: -1, yoyo: true, ease: Linear.easeNone})
	.to($sl4t3A, 0, {morphSVG: $sl4t3A})
	.add('boxMove')
	.fromTo($sl4Box, 1, {scaleY: 0.85, scaleX: 1.05}, {scaleY:1, scaleX: 1, transformOrigin: '50% 100%'}, 'boxMove')
;

var tween7bathroomBin = new TimelineMax({repeat: -1, ease: Linear.easeNone})
	.to($sl4t5A, 0, {morphSVG: $sl4t5A})
	.fromTo($sl4BinLid, 1, {rotation: '-10'}, {rotation: '0', transformOrigin: '0% 50%', ease: Bounce.easeOut})
	.to($sl4BinLid, 0.65, {rotation: '-10', ease: Linear.easeNone})
;

var tween7mower = new TimelineMax({repeat: -1, yoyo: true, ease: Linear.easeNone})
	.to($truck, 0, {x: '200%'})
	.to($mower, 0, {x: '0.001%'})
	.to($mowerBody, 0.2, {y: '-2%', ease: Linear.easeNone})
;

var tween7bags = new TimelineMax()
	.to(bags, 0, {x: '0.1%', y: '0.1%'})
	.staggerFromTo(bags, 0.5, {rotation: '-5'}, {rotation: '5', transformOrigin: '50% 50%', ease: Linear.easeNone, repeat: -1, yoyo: true}, 0.2)
;

var motionPath = MorphSVGPlugin.pathDataToBezier($carPath, {align: $car});
TweenMax.set($car, {xPercent: -50, yPercent: -50, transformOrigin: '50% 50%'});

var tween7Car = new TimelineMax({repeat: -1, ease: Linear.easeNone})
	.to($car, 0, {scale: -1})
	.to($car, 4, {bezier: {values: motionPath, type: 'cubic', autoRotate: true}, ease: Linear.easeNone})
	.to($car, 0, {scale: 1})
	.from($car, 4, {bezier: {values: motionPath, type: 'cubic', autoRotate: true}, ease: Linear.easeNone})
;

// TRIGGERED ANIMATIONS
// Set up as functions so that the timeline can call them at certain points
//////////////////////////
function tween7garDoorTrig() {
	tween7garDoor.pause();
	new TimelineMax()
		.to($garageDoor, 1, {y: '-83%'})
	;
}

function tween7cupsTrig() {
	tween7cups.pause();
	new TimelineMax()
		.add('move')
		.to($cups, 1, {x: '-200%'}, 'move')
		.to($treeData, 1, {x: '0%'}, 'move')
	;
}

function tween7bathroomBoxTrig() {
	tween7bathroomBox.pause();
	new TimelineMax()
		.fromTo($sl4t3A, 1, {autoAlpha: 1}, {morphSVG: $sl4t3B})
	;
}

function tween7bathroomBinTrig() {
	tween7bathroomBin.pause();
	new TimelineMax()
		.fromTo($sl4t5A, 1, {autoAlpha: 1}, {morphSVG: $sl4t5B})
}

function tween7mowerTrig() {
	tween7mower.pause();
	new TimelineMax()
		.add('mowerStart')
		.to($mower, 1, {x: '-400%',ease: Power2.easeIn}, 'mowerStart')
		.to($truck, 1, {x: '0%',ease: Power1.easeOut}, 'mowerStart+=0.5')
	;
}

function tween7bagsTrig() {
	tween7bags.pause();
	new TimelineMax()
		.add('scatter')
		.to($bag1, 1, {x: '125%', y: '250%'}, 'scatter')
		.to($bag2, 1, {x: '550%', y: '-155%'}, 'scatter')
		.to($bag3, 1, {x: '-25%', y: '-300%'}, 'scatter')
		.to($bag4, 1, {x: '-200%', y: '300%'}, 'scatter')
		.to($bag5, 1, {x: '-400%', y: '-150%'}, 'scatter')
	;
}

/******************************************************************************/
// Going to need to reconsider how the wasteInfo section will reset when I get all of the new animation triggers and automations working
var staticAnims = [tween7garDoor, tween7cups, tween7cups, tween7bathroomBox, tween7bathroomBin, tween7mower, tween7bags];

var footerHeight = jQuery("footer").height();
var totalHeight = jQuery(document).height();

$window.on('scroll', function() {
	var yPos = window.pageYOffset;
	var sec7Pos = navFive;

	if(yPos >= (sec7Pos - 75) && yPos < (sec7Pos + 75)) {
		playStatics();
	}
    
    if(yPos >= (totalHeight - footerHeight - window.innerHeight - 100)) {
        checkScrollState();
        console.log("we made it!");
    }
});

$nav5.click(function() {
	playStatics();
});

function playStatics() {
	for (var i = 0; i < staticAnims.length; i++) {
		staticAnims[i].play();
	}
}

/******************************************************************************/


////////////////////////////////////////////
// SECTION 8: WHAT YOU CAN DO
// This is the prologue to the Resources Section
var widFrac = window.innerWidth / 8;
var tween8 = new TimelineMax()
	.add('1')
	.to($s8col1, 0, {left: widFrac, x: '-50%'})
	.to($s8col2, 0, {left: widFrac*3, x: '-50%'})
	.to($s8col3, 0, {left: widFrac*5, x: '-50%'})
	.to($s8col4, 0, {left: widFrac*7, x: '-50%'})
	.to($questionMark, 0, {bottom: '0%'})
	.fromTo($s8t2, 0.3, {autoAlpha: 0, bottom: '80%'}, {autoAlpha: 1}, '1+=0.1')

	.add('2', '1+=0.75')
	.to([$s8t1, $s8t2, $questionMark], 0.5, {autoAlpha: 0, bottom: '+=125%'}, '2')
	.fromTo($s8t3, 0.5, {autoAlpha: 0, bottom: '55%'}, {autoAlpha: 1, bottom: '75%'}, '2+=0.2')
	
	.add('3', '2+=0.5')
	.fromTo($reduceIcon, 0.15, {bottom: '125%'}, {bottom: '40%'}, '3')
	.fromTo($s8t4, 0.15, {autoAlpha: 1, bottom: '-25%'}, {bottom: '30%'}, '3')
	.fromTo($s8t5, 0.15, {autoAlpha: 1, bottom: '-25%'}, {bottom: '21.5%'}, '3')

	.add('4', '3+=0.35')
	.fromTo($reuseIcon, 0.15, {bottom: '125%'}, {bottom: '40%'}, '4')
	.fromTo($s8t6, 0.15, {autoAlpha: 1, bottom: '-25%', }, {bottom: '30%'}, '4')
	.fromTo($s8t7, 0.15, {autoAlpha: 1, bottom: '-25%'}, {bottom: '25%'}, '4')

	.add('5', '4+=0.35')
	.fromTo($recycleIcon, 0.15, {bottom: '125%'}, {bottom: '40%'}, '5')
	.fromTo($s8t8, 0.15, {autoAlpha: 1, bottom: '-25%', }, {bottom: '30%'}, '5')
	.fromTo($s8t9, 0.15, {autoAlpha: 1, bottom: '-25%'}, {bottom: '25%'}, '5')

	.add('6', '5+=0.35')
	.fromTo($compostIcon, 0.15, {bottom: '125%'}, {bottom: '40%'}, '6')
	.fromTo($s8t10, 0.15, {autoAlpha: 1, bottom: '-25%', }, {bottom: '30%'}, '6')
	.fromTo($s8t11, 0.15, {autoAlpha: 1, bottom: '-25%'}, {bottom: '21.5%'}, '6')

	.add('7', '6+=0.5')
	.to($colSection, 0.5, {bottom: '+=100%', autoAlpha: 0}, '7')
	.fromTo($s8t12, 0, {autoAlpha: 0}, {autoAlpha: 1}, '7')
	.fromTo($s8t12, 0.25, {bottom: '-25%'}, {bottom: '50%'}, '7')

	.add('8', '7+=0.5')
	.fromTo($s8t12, 0.1, {bottom: '50%'}, {bottom: '60%'}, '8')
	.fromTo($s8t13, 0.25, {bottom: '50%', autoAlpha: 0}, {bottom: '35%', autoAlpha: 1}, '8')

	.add('9', '8+=0.5')
	.to($s8t12, 0.5, {autoAlpha: 1}, '9')	// placeholder so everything before works

;

new ScrollMagic.Scene ({
	triggerElement: '#eightPin',
	triggerHook: 0,
	duration: '800%'
})
	.setTween(tween8)
	.setPin('#eightPin')
	.addTo(ctrl);



// Make some random values for staggered times between staggerTo animations
function randVal() {
	stag1 = Math.random() * 0.9 + 0.1;
	stag1 = stag1.toFixed(2);
	
	stag2 = Math.random() * 0.9 + 0.1;
	stag2 = stag2.toFixed(2);
		
};

function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function addClass(element, cls) {
	jQuery(element).addClass(cls);
}
