$(document).ready(function(){
   $('#toggleTextFirstIcon').click(function(){
       $('.hideFirstIcon').toggle();
       $('.showFirstText').toggle();
   });
   $('#toggleSecondIcon').click(function(){
       $('.hideSecondIcon').toggle();
       $('.showSecondText').toggle();
   });
   $('#toggleThirdIcon').click(function(){
       $('.hideThirdIcon').toggle();
       $('.showThirdText').toggle();
   });

   $('#project1').mouseenter(function(){
       $('#projectOne').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
       $('#firstOverlay').toggle();
       $('#projectOne').toggle();
   });
   $('#project1').mouseleave(function(){
       $(this).css('background', 'transparent')
    $('#firstOverlay').fadeToggle(500); 
    $('#projectOne').fadeToggle(500);
});

$('#project2').mouseenter(function(){
    $('#projectTwo').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px', }) ;
    $('#secondOverlay').fadeToggle(500);
    $('#projectTwo').fadeToggle(500);
});
$('#project2').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#secondOverlay').fadeToggle(500);
 $('#projectTwo').fadeToggle(500);;
});

$('#project3').mouseenter(function(){
    $('#projectThree').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#thirdOverlay').fadeToggle(500);
    $('#projectThree').fadeToggle(500);
});
$('#project3').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#thirdtOverlay').fadeToggle(500);
 $('#projectThree').fadeToggle(500);
});

$('#project4').mouseenter(function(){
    $('#projectFour').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#fourthOverlay').fadeToggle(500);
    $('#projectFour').fadeToggle(500);
});
$('#project4').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#fourthOverlay').fadeToggle(500);
 $('#projectFour').fadeToggle(500);
});

$('#project5').mouseenter(function(){
    $('#projectFive').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#fifthOverlay').fadeToggle(500);
    $('#projectFive').fadeToggle(500);
});
$('#project5').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#fifthtOverlay').fadeToggle(500); 
 $('#projectFive').fadeToggle(500);
});

$('#project6').mouseenter(function(){
    $('#projectSix').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#SixthOverlay').fadeToggle(500);
    $('#projectSix').fadeToggle(500);
});
$('#project6').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#sixthOverlay').fadeToggle(500);
 $('#projectSix').fadeToggle(500);
});

$('#project7').mouseenter(function(){
    $('#projectSeven').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#SeventhOverlay').fadeToggle(500);
    $('#projectSeven').fadeToggle(500);
});
$('#project7').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#seventhOverlay').fadeToggle(500);
 $('#projectSeven').fadeToggle(500);
});

$('#project8').mouseenter(function(){
    $('#projectEight').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#eighthOverlay').fadeToggle(500);
    $('#projectEight').fadeToggle(500);
});
$('#project8').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#eighthOverlay').fadeToggle(500);
 $('#projectEight').fadeToggle(500);
});



});
