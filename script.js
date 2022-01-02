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

   $('#hover').mouseenter(function(){
       $('.work4').toggle();
       $('.hover1').toggle();
   })
   $('#hover').mouseleave(function(){
    $('.work4').toggle();
    $('.hover1').toggle();
})


});
