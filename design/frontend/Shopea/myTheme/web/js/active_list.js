define([
    'jquery'
], function($){
    "use strict";
    var drop_block = $('.collapsibleTab');
    $('.caret').click(function() {
        if($(this).parents('.collapsibleTab').hasClass('active')){
            $('.active').removeClass("active");
            
          } else if(drop_block.hasClass('active')){
            $('.active').removeClass("active");
             $(this).parents('.collapsibleTab').toggleClass('active'); } 
             else {
                $(this).parents('.collapsibleTab').toggleClass('active');       
             }
          
       
        
    });
});
        
        
