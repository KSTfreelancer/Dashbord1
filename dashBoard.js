
// SideBar Show Hight
var navHideShow=$(".sidebar_right .nav .nav_left i");
navHideShow.click(function(){
    $(".sidebar_left_top").toggleClass('sidebar_left_top_mediaq');
    $(".sidebar_left_top").toggleClass('sidebar_left_top_mediaq_On');
    $(".sidebar_left").toggleClass('sidebar_left_no');
    $(".sidebar_left").toggleClass('sidebar_left_to_right');
    $(".sidebar_left_top").toggleClass('sidebar_left_top_no');
    $(".sidebar_right .nav .nav_left i").toggleClass('nav_icon_moved');
})

// Li Activ Calss
var ilActiv =$(".sidebar_left_all_catagory li");
ilActiv.click(function(){

  

    var URL=$("a",this).attr( "href" );
    if(URL == "#" || URL == ''){
       
    }
    else{
         $("li").removeClass("activ_side_nav");
        $(this).addClass("activ_side_nav");
    }
})

// LI Drop Down
$(".first_li").click(function(){
    $(this).parent().toggleClass("li_bg_activ");
    $("i.roted_icon",this).toggleClass("rotrd_action");
    $(this).siblings().slideToggle(500);
});
$(".second_li").click(function(){
    $(this).parent().toggleClass("li_bg_activ");
    $("i.roted_icon",this).toggleClass("rotrd_action");
     $(this).siblings().slideToggle(500);
})