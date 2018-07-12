;(function(){
  // $('.crm-menu-item').click(function(){
  //   $(this).addClass('active').siblings().removeClass('active');
  // });
})()
;(function(){
  $('.crm-phone-menu').click(function(){
    $('body').toggleClass('show-menu');
  });
  $('.mask').click(function(){
    $('body').removeClass('show-menu');
  })
})()
;(function(){
  laydate.render({
    elem: '#start' //指定元素
  });
  laydate.render({
    elem: '#end' //指定元素
  });
})()

function showpop(id){
  $('.mask').fadeIn();
  $('#'+id).addClass('show');
  $('.icon-close').click(function(){
    var pop =$(this).parents('.pop');
    pop.removeClass('show');
    $('.mask').fadeOut();
  })
}