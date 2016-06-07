/*menu.js*/

 function menu(menu){
        var menu=$('#menu'),
         menu_btn = menu.find('.menu_btn'),  
         menu_closebtn = menu.find('.menuclose_btn'),
         menu_dl = menu.find('dl'),
         menu_dt = menu.find('dt');
     menu_closebtn.hide();
     
    // $('#menu').find('.menuclose_btn').hide().prev('.menu_btn').show();
    $('.menu_btn').on('click',function(){
        menu_btn.hide();
        menu_closebtn.fadeIn();
        //menu_btn.hide().next(menu_closebtn).css({'z-index':200});
        menu_dl.stop().animate({'height':'150vw','overflow':'none'},500);
        
            menu_dt.on('click',function(){
            var $this = $(this);
            $this.next('dd').css({'height':'auto'}).toggle();
            });
        });
     menu_closebtn.on('click',function(){
      menu_dl.stop().animate({'height':0,'overflow':'hidden'},100); 
      menu_closebtn.hide();
      menu_btn.fadeIn();
     });
 };