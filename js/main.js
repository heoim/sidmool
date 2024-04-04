// jQuery

$(function () {
  //nav_gnb_respon
  //header 메뉴 반응형일때 sub메뉴 나타내기
  $(".gnb_respon_hidden").click(function () {
    $(".nav_gnb_respon_show").slideToggle();
    $(".nav_search").stop().slideUp(600);
    // 반응형 메뉴 눌렀을 때 검색창 닫기
  });

  // 외부영역 클릭시 닫히기

  //nav_gnb_respon
  // header 메뉴 반응형일때 sub메뉴의 아코디언 효과
  $(".nav_gnb_respon_show > li").mouseenter(function () {
    $(this).children(".sub_menu_show").stop().slideDown(600);
  });
  $(".nav_gnb_respon_show > li").mouseleave(function () {
    $(this).children(".sub_menu_show").stop().slideUp(600);
  });

  // nav_search
  // 돋보기 눌렀을 때 검색창 나타나기
  $(".nav_search_icon").click(function () {
    $(".nav_search").slideToggle();
    $(".nav_gnb_respon_show").stop().slideUp(600);
    // 돋보기 아이콘 눌렀을때 서브메뉴 닫기
  });

  // menu
  $("nav ul.gnb").mouseenter(function () {
    $(this).find(".sub_menu").stop().slideDown(600);
    $(".nav_search").stop().slideUp(600);
    // 주메뉴 버튼 마우스 오버시 열려있던 검색창 닫기
  });
  $("nav ul.gnb").mouseleave(function () {
    $(this).find(".sub_menu").stop().slideUp(600);
  });

  // slide
  setInterval(function () {
    $(".slide .slide-line").animate(
      {
        left: "-100%",
      },
      600,
      function () {
        $(".slide .slide-line").append($(".slide .slide-line>li").eq(0));
        $(".slide .slide-line").css("left", 0);
      }
    );
  }, 3000);

  //footer_menu
  // footer 메뉴 반응형일때 sub메뉴 열림
  $(".footer_menu_respon").click(function () {
    $("footer>.footer_menu1").slideToggle();
  });

  // footer_menu
  // 마우스 아웃시 사라지기
  $(".footer_menu1").mouseleave(function () {
    $(this).stop().slideUp(600);
  });

  //클릭시 스크롤 방지
  $("a").click(function (e) {
    e.preventDefault();
  });
});

//line-product
// swiper
const swiper = new Swiper('.line_product .swiper', {
  slidesPerView : 3,
  spaceBetween : 0,
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay : 5000
  },
  navigation : {
    prevEl : '.line_product .swiper-button-prev',
    nextEl : '.line_product .swiper-button-next'
  }
});
// console.log(Swiper);
