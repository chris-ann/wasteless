//var ctrl = new ScrollMagic.Controller();
var scrolling = {state: false};
var navScroll = {state: false};
var scrollDirection = 'FORWARD';
var $play = jQuery('.play');
var $window = jQuery(window);
var $document = jQuery(document);
var scrollTime = 0.3;
var scrollDistance = 150;

var navOne = 0;	//#zero
var navTwo = window.innerHeight * 8; // number the height is multiplied by depends on how many full height vertical sections the user has to scroll through. //#three
var navThree = window.innerHeight * 12; //#four
var navFour = window.innerHeight * 38;	//#six
var navFive = window.innerHeight * 59;	//#seven
var navSix = window.innerHeight * 69;	//#eight

var $navElem = jQuery('.navElem');
var $nav5 = jQuery('#nav5');

var $asideIcon = jQuery('.aside-icon');
var $asideClose = jQuery('.aside-close');
var $aside = jQuery('.aside');

var $playBtn = jQuery('#playBtn');

var scrollDelay;

var $asideIconLid = jQuery('.asideIconLid');

/////////////////////////////////////////////////////////////////
// SECTION 0: INTRO

var $mouse = jQuery('#mouse');
var $mouseWheel = jQuery('#mouseWheel');
var $mouseArrow = jQuery('#mouseArrow');

var $lethLandGreen1 = jQuery('#lethLandGreen1');
var $lethLandGreen2 = jQuery('#lethLandGreen2');
var $ripple1 = jQuery('.ripple1');
var $ripple2 = jQuery('.ripple2');

/////////////////////////////////////////////////////////////////
// SECTION 1: GLOBE
var $one = jQuery('#one');
var $s1t1 = jQuery('#s1t1');
var $s1t2 = jQuery('#s1t2');
var $aside1 = jQuery('#aside1');
var $aside2 = jQuery('#aside2');
var $aside3 = jQuery('#aside3');
var $aside4 = jQuery('#aside4');
var $aside5 = jQuery('#aside5');
var $aside6 = jQuery('#aside6');
var $aside7 = jQuery('#aside7');

//////////////////////////////////////////////////////////////
// SECTION 2: CLOUDS
// SCENE FOR HOLDING CLOUD CONTAINERS IN PLACE

var frac = (-5/6*100);

var $s2t1 = jQuery('#s2t1');
var $s2t2 = jQuery('#s2t2');
var $s2t3 = jQuery('#s2t3');
var $s2t4 = jQuery('#s2t4');

var s2text = [$s2t1, $s2t2, $s2t3, $s2t4];

var $cloudCover1 = jQuery('#cloudCover1');
var $cloudCover2 = jQuery('#cloudCover2');
var $cloudsBack = jQuery('#cloudsBack');
var $cloudsFront = jQuery('#cloudsFront');


////////////////////////////////////////////////////////////////
// SECTION 3: FACTORY

var $resSheep = jQuery('#resSheep');
var $resLogs = jQuery('#resLogs');
var $resRadioactive = jQuery('#resRadioactive');
var $resIngot = jQuery('#resIngot');
var $resCart = jQuery('#resCart');
var $resTree = jQuery('#resTree');
var $resOil = jQuery('#resOil');
var $prodClam = jQuery('#prodClam');
var $prodCup = jQuery('#prodCup');
var $prodBag = jQuery('#prodBag');
var $prodShoe = jQuery('#prodShoe');
var $prodNews = jQuery('#prodNews');
var $prodPhone = jQuery('#prodPhone');
var $prodBattery = jQuery('#prodBattery');

var resIn = [$resSheep, $resLogs, $resRadioactive, $resIngot, $resCart, $resTree,  $resOil];
var prodOut = [$prodClam, $prodCup, $prodBag, $prodShoe, $prodNews, $prodPhone, $prodBattery];

var $gear = jQuery('.gear');
var $factoryLandFront = jQuery('#factoryLandFront');
var $s3t3 = jQuery('#s3t3');
var $s3t4 = jQuery('#s3t4');

/////////////////////////////////////////////////////////////////
// SECTION 4
var $s4t0 = jQuery('#s4t0');
var $s4t1 = jQuery('#s4t1');
var $s4t2 = jQuery('#s4t2');
var $s4t6 = jQuery('#s4t6');
var $s4t7 = jQuery('#s4t7');
var $s4t8 = jQuery('#s4t8');
var $s4t9 = jQuery('#s4t9');
var $s4t10 = jQuery('#s4t10');

var $OUR = jQuery('#OUR');
var $CES = jQuery('#CES');
var $ITI = jQuery('#ITI');
var $BECA = jQuery('#BECA');
var $ME = jQuery('#ME');
var $CLOGGED = jQuery('#CLOGGED');
var $WITH = jQuery('#WITH');
var $GARBAGE = jQuery('#GARBAGE');

var $garb1 = jQuery('#garb1');
var $garb2 = jQuery('#garb2');
var $garb3 = jQuery('#garb3');
var $garb4 = jQuery('#garb4');
var $garb5 = jQuery('#garb5');

var $land = jQuery('#land');
var $landBack = jQuery('#landBack');
var $landFront = jQuery('#landFront');
var $landTrees = jQuery('#landTrees');
var $landLeaves = jQuery('#landLeaves');
var $leaf  = jQuery('.leaf');
var $liner = jQuery('#liner');
var $landBranches = jQuery('#landBranches');
var $branch = jQuery('.branch');
var $hill1 = jQuery('#hill1');
var $hill2 = jQuery('#hill2');
var $hillFront = jQuery('#hillFront');
var $hillBack = jQuery('#hillBack');
var $grass = jQuery('.grass');

var $dozer = jQuery('#dozer');
var $bridge = jQuery('#bridge');
var $landfillGreenDots = jQuery('#landfillGreenDots');
var $landfillBrownDots = jQuery('#landfillBrownDots');

var $m1 = jQuery('#m1');
var $m2 = jQuery('#m2');
var $m3 = jQuery('#m3');
var $m4 = jQuery('#m4');
var $m5 = jQuery('#m5');
var $m6 = jQuery('#m6');
var $m7 = jQuery('#m7');
var $m8 = jQuery('#m8');

var garbText = [$WITH, $GARBAGE, $CLOGGED, $ME, $BECA, $CES, $ITI, $OUR];
var backGarb = [$garb5, $garb4, $garb3, $garb2];
var introText = [$s4t0, $s4t1, $s4t2];
var dumpText = [$s4t6, $s4t7];
var allLand= [$land, $landBack, $landTrees];

var landwTrees = [$land, $landTrees];

var brownStroke = '#8F776D';
var brownFill = '#E0C8BE';
var darkBrownStroke = '#695850';

var garbStroke = ['#garb1 .st0', '#garb1 .st1', '#garb1 .st2', '#garb1 .st4', '#garb1 .st6', '#garb1 .st7', '#garb1 .st9', '#garb1 .st10'];
var garbFill = ['#garb1 .st2', '#garb1 .st5', '#garb1 .st6'];

var leaves = [$landLeaves, $leaf];
var decayStrokes = [$landFront, $liner, $landBranches, $branch, $hill1, $hill2, $grass];


var meth1 = [$m3, $m2, $m6, $m8];
var meth2 = [$m7, $m1, $m4, $m5];

var methAll = meth1.concat(meth2);

var stag1 = 0.3;
var stag2 = 0.7;


////////////////////////////////////////////
// SECTION 5
var $s5t1 = jQuery('#s5t1');
var $s5t2 = jQuery('#s5t2');
var $s5t3 = jQuery('#s5t3');
var $s5t4 = jQuery('#s5t4');
var $s5t5 = jQuery('#s5t5');
var $s5t6 = jQuery('#s5t6');
var $s5t7 = jQuery('#s5t7');
var $s5t8 = jQuery('#s5t8');
var $s5t9 = jQuery('#s5t9');
var $s5t10 = jQuery('#s5t10');
var $s5t11 = jQuery('#s5t11');
var $s5t12 = jQuery('#s5t12');
var $s5t13 = jQuery('#s5t13');
var s5t123 = [$s5t1, $s5t2, $s5t3];

var $orgIcon = jQuery('#orgIcon'), $recyIcon = jQuery('#recyIcon'), $garbIcon = jQuery('#garbIcon');
var icons = [$orgIcon, $recyIcon, $garbIcon];

var $garbPerc = jQuery('#garbPerc'), $recyPerc = jQuery('#recyPerc'), $orgPerc = jQuery('#orgPerc');
var perc = [$garbPerc, $recyPerc, $orgPerc];

var $g1 = jQuery('#g1'), $g2 = jQuery('#g2'), $g3 = jQuery('#g3'), $g4 = jQuery('#g4'), $g5 = jQuery('#g5'), $g6 = jQuery('#g6'), $g7 = jQuery('#g7'), $g8 = jQuery('#g8'), $g9 = jQuery('#g9'), $g10 = jQuery('#g10'), $g11 = jQuery('#g11'), $g12 = jQuery('#g12'), $g13 = jQuery('#g13'), $g14 = jQuery('#g14'), $g15 = jQuery('#g15'), $g16 = jQuery('#g16'), $g17 = jQuery('#g17'), $g18 = jQuery('#g18'), $g19 = jQuery('#g19'), $g20 = jQuery('#g20'), $g21 = jQuery('#g21');
var gData = [$g1, $g2, $g3, $g4, $g5, $g6, $g7, $g8, $g9, $g10, $g11, $g12, $g13, $g14, $g15, $g16, $g17, $g18, $g19, $g20, $g21];

var $r1 = jQuery('#r1'), $r2 = jQuery('#r2'), $r3 = jQuery('#r3'), $r4 = jQuery('#r4'), $r5 = jQuery('#r5'), $r6 = jQuery('#r6'), $r7 = jQuery('#r7'), $r8 = jQuery('#r8'), $r9 = jQuery('#r9'), $r10 = jQuery('#r10'), $r11 = jQuery('#r11'), $r12 = jQuery('#r12'), $r13 = jQuery('#r13'), $r14 = jQuery('#r14'), $r15 = jQuery('#r15'), $r16 = jQuery('#r16'), $r17 = jQuery('#r17'), $r18 = jQuery('#r18'), $r19 = jQuery('#r19'), $r20 = jQuery('#r20'), $r21 = jQuery('#r21');
var rData = [$r1, $r2, $r3, $r4, $r5, $r6, $r7, $r8, $r9, $r10, $r11, $r12, $r13, $r14, $r15, $r16, $r17, $r18, $r19, $r20, $r21];

var $o1 = jQuery('#o1'), $o2 = jQuery('#o2'), $o3 = jQuery('#o3'), $o4 = jQuery('#o4'), $o5 = jQuery('#o5'), $o6 = jQuery('#o6'), $o7 = jQuery('#o7'), $o8 = jQuery('#o8'), $o9 = jQuery('#o9'), $o10 = jQuery('#o10'), $o11 = jQuery('#o11'), $o12 = jQuery('#o12'), $o13 = jQuery('#o13'), $o14 = jQuery('#o14'), $o15 = jQuery('#o15'), $o16 = jQuery('#o16'), $o17 = jQuery('#o17'), $o18 = jQuery('#o18'), $o19 = jQuery('#o19'), $o20 = jQuery('#o20'), $o21 = jQuery('#o21'), $o22 = jQuery('#o22'), $o23 = jQuery('#o23'), $o24 = jQuery('#o24'), $o25 = jQuery('#o25'), $o26 = jQuery('#o26'), $o27 = jQuery('#o27'), $o28 = jQuery('#o28'), $o29 = jQuery('#o29'), $o30 = jQuery('#o30'), $o31 = jQuery('#o31'), $o32 = jQuery('#o32'), $o33 = jQuery('#o33'), $o34 = jQuery('#o34'), $o35 = jQuery('#o35'), $o36 = jQuery('#o36');
var oData = [$o1, $o2, $o3, $o4, $o5, $o6, $o7, $o8, $o9, $o10, $o11, $o12, $o13, $o14, $o15, $o16, $o17, $o18, $o19, $o20, $o21, $o22, $o23, $o24, $o25, $o26, $o27, $o28, $o29, $o30, $o31, $o32, $o33, $o34, $o35, $o36];

var $two = jQuery('#two');
var $three = jQuery('#three');
var $four = jQuery('#four');
var sections = [$one, $two, $three, $four]

var $garbData = jQuery('#garbData');
var $recyData = jQuery('#recyData');
var $orgData = jQuery('#orgData');
var landData = [$garbData, $recyData, $orgData];

var $garbBin = jQuery('#garbBin');
var $recyBin = jQuery('#recyBin');
var $orgBin = jQuery('#orgBin');
var $garbBinBody = jQuery('#garbBinBody');
var bins = [$garbBin, $recyBin, $orgBin];

var $garbBinLid = jQuery('#garbBinLid');
var $recyBinLid = jQuery('#recyBinLid');
var $orgBinLid = jQuery('#orgBinLid');
var binLids = [$garbBinLid, $recyBinLid, $orgBinLid];

var $garbPerc = jQuery('#garbPerc');
var $recyPerc = jQuery('#recyPerc');
var $orgPerc = jQuery('#orgPerc');

var s5tFade = [$s5t3, $s5t4, $s5t5, $s5t6, $s5t7, $garbPerc, $recyPerc, $orgPerc]
var tgtw = [$s5t9, $s5t10, $s5t11]

var garbDataHeight = $garbData.height();
var recyDataHeight = $recyData.height();
var orgDataHeight = $orgData.height();

var garbIconHeight = $garbIcon.height();
var recyIconHeight = $recyIcon.height();
var orgIconHeight = $orgIcon.height();

var binHeightFull = $garbBin.height();
var binHeightBottom = $garbBinBody[0].getBoundingClientRect().height;


////////////////////////////////////////////
// SECTION 6: Lethbridge

var $s6t1 = jQuery('#s6t1');
var $s6t2 = jQuery('#s6t2');
var $s6t3 = jQuery('#s6t3');
var $s6t4 = jQuery('#s6t4');
var $s6t5 = jQuery('#s6t5');
var $s6t6 = jQuery('#s6t6');
var $s6t7 = jQuery('#s6t7');
var $s6t8 = jQuery('#s6t8');
var $s6t9 = jQuery('#s6t9');
var $s6t10 = jQuery('#s6t10');
var $s6t11 = jQuery('#s6t11');
var $s6t12 = jQuery('#s6t12');
var $s6t13 = jQuery('#s6t13');
var $s6t14 = jQuery('#s6t14');
var $s6t15 = jQuery('#s6t15');
var $s6t16 = jQuery('#s6t16');
var $s6t17 = jQuery('#s6t17');

var $row1 = jQuery('#row1');
var $row2 = jQuery('#row2');
var $row3 = jQuery('#row3');
var $row4 = jQuery('#row4');

var $galtGround = jQuery('#galtGround');
var $galtFront = jQuery('#galtFront');
var $galtMid = jQuery('#galtMid');
var $galtBack = jQuery('#galtBack');
var $galtFountain = jQuery('#galtFountain');
var $galtBackGarb = jQuery('#galtBackGarb');
var $galtMidGarb = jQuery('#galtMidGarb');
var $galtFrontGarb = jQuery('#galtFrontGarb');

var sec6g1 = [$s6t1, $s6t2, $s6t3];
var sec6g2 = [$s6t4, $s6t5, $s6t6];

var sec6offRight = [$s6t4, $s6t7, $s6t8];
var sec6offBottom = [$s6t9, $s6t10, $s6t13, $s6t16];
var sec6offTop = [$s6t11, $s6t14];
var pop = [$row1, $row2, $row3, $row4];

var galtGardens = [$galtGround, $galtFront, $galtMid, $galtBack, $galtFountain];
var galtGarb = [$galtBackGarb, $galtMidGarb, $galtFrontGarb];

var $aside3 = jQuery('#aside-3');
var $aside4 = jQuery('#aside-4');
var $aside5 = jQuery('#aside-5');
var $lethLandBlue1 = jQuery('#lethLandBlue1');
var $lethLandBlue2 = jQuery('#lethLandBlue2');
var $wasteHome = jQuery('#wasteHome');
var $wasteWork = jQuery('#wasteWork');
var $wasteFreeTime = jQuery('#wasteFreeTime');
var $population = jQuery('.population');

var $waterTower = jQuery('.waterTower');
var $waterTowerPile = jQuery('#waterTowerPile');
var $train = jQuery('#train');
var $trainSceneBridge = jQuery('#trainSceneBridge');

var $fire1 = jQuery('#fire1');
var $fire2 = jQuery('#fire2');

var $s1a = jQuery('#s1a');
var $s1b = jQuery('#s1b');
var $s2a = jQuery('#s2a');
var $s2b = jQuery('#s2b');
var $s3a = jQuery('#s3a');
var $s3b = jQuery('#s3b');
var $s4a = jQuery('#s4a');
var $s4b = jQuery('#s4b');
var $s5a = jQuery('#s5a');
var $s5b = jQuery('#s5b');
var $s6a = jQuery('#s6a');
var $s6b = jQuery('#s6b');
var $s7a = jQuery('#s7a');
var $s7b = jQuery('#s7b');
var $s8a = jQuery('#s8a');
var $s8b = jQuery('#s8b');
var $s9a = jQuery('#s9a');
var $s9b = jQuery('#s9b');
var $s10a = jQuery('#s10a');
var $s10b = jQuery('#s10b');
var $s11a = jQuery('#s11a');
var $s11b = jQuery('#s11b');

var $t1a1 = jQuery('#t1a-1');
var $t1a2 = jQuery('#t1a-2');
var $t1a3 = jQuery('#t1a-3');
var $t1a4 = jQuery('#t1a-4');
var $t1a5 = jQuery('#t1a-5');
var $t1a6 = jQuery('#t1a-6');
var $t1a7 = jQuery('#t1a-7');
var $t1a8 = jQuery('#t1a-8');

var $t1b1 = jQuery('#t1b-1');
var $t1b2 = jQuery('#t1b-2');
var $t1b3 = jQuery('#t1b-3');
var $t1b4 = jQuery('#t1b-4');
var $t1b5 = jQuery('#t1b-5');
var $t1b6 = jQuery('#t1b-6');
var $t1b7 = jQuery('#t1b-7');
var $t1b8 = jQuery('#t1b-8');

var $t2a1 = jQuery('#t2a-1');
var $t2a2 = jQuery('#t2a-2');
var $t2a3 = jQuery('#t2a-3');
var $t2a4 = jQuery('#t2a-4');
var $t2a5 = jQuery('#t2a-5');
var $t2a6 = jQuery('#t2a-6');
var $t2a7 = jQuery('#t2a-7');
var $t2a8 = jQuery('#t2a-8');

var $t2b1 = jQuery('#t2b-1');
var $t2b2 = jQuery('#t2b-2');
var $t2b3 = jQuery('#t2b-3');
var $t2b4 = jQuery('#t2b-4');
var $t2b5 = jQuery('#t2b-5');
var $t2b6 = jQuery('#t2b-6');
var $t2b7 = jQuery('#t2b-7');
var $t2b8 = jQuery('#t2b-8');

var $wind1a = jQuery('#wind1a');
var $wind1b = jQuery('#wind1b');
var $wind1c = jQuery('#wind1c');
var $wind2a = jQuery('#wind2a');
var $wind2b = jQuery('#wind2b');
var $wind2c = jQuery('#wind2c');

var $f1 = jQuery('#f1');
var $f2 = jQuery('#f2');
var $f3 = jQuery('#f3');
var $f4 = jQuery('#f4');
var $f5 = jQuery('#f5');

var wind1 = [$wind1a, $wind2b, $wind1c];
var wind2 = [$wind2c, $wind2a, $wind1b];

var tree1a = [$t1a1, $t1a2, $t1a3, $t1a4, $t1a5, $t1a6, $t1a7, $t1a8];
var tree1b = [$t1b1, $t1b2, $t1b3, $t1b4, $t1b5, $t1b6, $t1b7, $t1b8];

var fount1 = [$f1, $f3];
var fount2 = [$f5, $f2, $f4];

var $homeCloud1a = jQuery('#homeCloud1a');
var $homeCloud1b = jQuery('#homeCloud1b');
var $homeCloud2a = jQuery('#homeCloud2a');
var $homeCloud2b = jQuery('#homeCloud2b');




////////////////////////////////////////////
// SECTION 7

var $slide1 = jQuery('#slide1');
var $slide2 = jQuery('#slide2');
var $slide3 = jQuery('#slide3');
var $slide4 = jQuery('#slide4');
var $slide5 = jQuery('#slide5');
var $slide6 = jQuery('#slide6');

var $garageDoor = jQuery('#garageDoor');
var $cupLid = jQuery('.cupLid');
var $cups = jQuery('#cups');
var $treeData = jQuery('#treeData');
var $sl4t3A = jQuery('#sl4t3A');
var $sl4t3B = jQuery('#sl4t3B');
var $sl4Box = jQuery('#sl4Box');
var $sl4t5A = jQuery('#sl4t5A');
var $sl4t5B = jQuery('#sl4t5B');
var $sl4BinLid = jQuery('#sl4BinLid');
var $truck = jQuery('#truck');
var $mower = jQuery('#mower');
var $mowerBody = jQuery('#mowerBody');
var $bag1 = jQuery('#bag1');
var $bag2 = jQuery('#bag2');
var $bag3 = jQuery('#bag3');
var $bag4 = jQuery('#bag4');
var $bag5 = jQuery('#bag5');

var bags = [$bag1, $bag2, $bag3, $bag4, $bag5];
var $car = jQuery('#car');
var $carPath = jQuery('#carPath');

////////////////////////////////////////////
// SECTION 8

var $s8t1 = jQuery('#s8t1');
var $s8t2 = jQuery('#s8t2');
var $s8t3 = jQuery('#s8t3');
var $s8t4 = jQuery('#s8t4');
var $s8t5 = jQuery('#s8t5');
var $s8t6 = jQuery('#s8t6');
var $s8t7 = jQuery('#s8t7');
var $s8t8 = jQuery('#s8t8');
var $s8t9 = jQuery('#s8t9');
var $s8t10 = jQuery('#s8t10');
var $s8t11 = jQuery('#s8t11');
var $s8t12 = jQuery('#s8t12');
var $s8t13 = jQuery('#s8t13');

var $colSection = jQuery('.colSection');
var $s8col1 = jQuery('.s8col1');
var $s8col2 = jQuery('.s8col2');
var $s8col3 = jQuery('.s8col3');
var $s8col4 = jQuery('.s8col4');

var $questionMark = jQuery('#questionMark');
var $reduceIcon = jQuery('#reduceIcon');
var $reuseIcon = jQuery('#reuseIcon');
var $recycleIcon = jQuery('#recycleIcon');
var $compostIcon = jQuery('#compostIcon');