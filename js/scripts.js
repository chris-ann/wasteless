var distanceY = window.pageYOffset;
var shrinkOn = 200;
var wastecount = 0;
var p = 0;
var scrollpoint;

jQuery( document ).ready(function() {

    jQuery(".homelink").empty();
    jQuery("header ul.menu li:not(:first)").append("<hr>");
    jQuery("header ul.menu li:not(:first)").addClass("toggle");

    console.log("hello");
    
    window.addEventListener("scroll", function(e){
        distanceY = window.pageYOffset;
        //console.log(distanceY);
        if (distanceY < shrinkOn || p >= 30){
            show();
        } else {
            hide();
        }
        // If user scrolls up add to value of p
        if (distanceY < scrollpoint) {
            p++;
        }
        else {
            p = 0;
        }
        scrollpoint = distanceY;
    });

    
    jQuery("header").on("mouseenter", function() {
        if (distanceY > shrinkOn){
            show(); 
        }
    }); 
    jQuery("header").on("mouseleave", function() {
        if (distanceY > shrinkOn){
            hide(); 
        }
    }); 

    function show() {
        jQuery(".toggle").fadeIn(50);
        jQuery("nav#main").removeClass("mini");
        //console.log("removeMini"); 
    }
    function hide() {
        jQuery("nav#main").addClass("mini");
        jQuery(".toggle").hide();
        //console.log("mini");
    }


    var offset2;
    var xPrev = 0;

    jQuery(document).on('mousemove', function(e){

        jQuery( ".flyingwaste" ).each(function( index2 ) {
            //offset2 = jQuery(this).offset();
            //console.log("1: " + offset1[index2].left + " 2: " + offset2.left);
            if(xPrev>e.pageX) {
                // if(diff < 100) {
                    jQuery(this).stop();
                    jQuery(this).animate({ "left": "-=10px" }, "slow", "linear" );;
                // } else {

                // }
            } else {
                jQuery(this).stop();
                jQuery(this).animate({ "left": "+=10px" }, "slow", "linear" );
            }
            //console.log(index + ": " + "left" + offset.left + ", top" + offset.top) ;
        });
        xPrev=e.pageX;
    });

});



/*
 jQuery animateNumber plugin v0.0.11
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function(d){var p=function(b){return b.split("").reverse().join("")},l={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},h=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=l.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:h}:d.fx.step.number=h;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var k=Math.floor(a);d(e.elem).prop("number",a).text(k+b)}},separator:function(b,a){b=b||" ";a=
a||3;return function(e,k){var c=Math.floor(e).toString(),s=d(k.elem);if(c.length>a){for(var f=c,g=a,l=f.split("").reverse(),c=[],m,q,n,r=0,h=Math.ceil(f.length/g);r<h;r++){m="";for(n=0;n<g;n++){q=r*g+n;if(q===f.length)break;m+=l[q]}c.push(m)}f=c.length-1;g=p(c[f]);c[f]=p(parseInt(g,10).toString());c=c.join(b);c=p(c)}s.prop("number",e).text(c)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},l,b),e=d(this),k=[a],c=1,h=arguments.length;c<h;c++)k.push(arguments[c]);if(b.numberStep){var f=
this.each(function(){this._animateNumberSetter=b.numberStep}),g=a.complete;a.complete=function(){f.each(function(){delete this._animateNumberSetter});g&&g.apply(this,arguments)}}return e.animate.apply(e,k)}})(jQuery);
