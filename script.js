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

   $('#firstProject').mouseenter(function(){
       $('.work4').toggle();
       $('.hover1').toggle();
   })
   $('#firstProject').mouseleave(function(){
    $('.work4').show();
    $('.hover1').show();
})


});
