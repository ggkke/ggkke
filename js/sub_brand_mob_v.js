function story(){
	var imgbox     = $('.story_imgbox'),
        menubar = $('.bs_menubar'),
        menubtn = menubar.find('a');


    menubtn.on('click', function(e){
		e.preventDefault();
			
		var imgspan = imgbox,
            data_img = $(this).attr("data-img");
    
        imgbox.html('<img>');
        imgbox.find('img').attr({'src': data_img });
        imgbox.show(5000);
    });
        imgbox.html("<img src='./img/article/sub_brand/brandstory_bi.png'>").css({'width': '100%', 'height': 'auto'});
}
            
    
