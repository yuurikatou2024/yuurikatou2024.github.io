(() => {
    document.addEventListener('DOMContentLoaded', () => {

        
        //ページ上部へ、のボタン
        $(function () {
            $("#js-button-top").click(function () {
                $('html,body').animate({
                    scrollTop: 0
                }, 300);
            });
            $(window).scroll(function () {
                if ($(window).scrollTop() > 1) {
                    $("#js-button-top").fadeIn(300).css('display', 'flex')
                } else {
                    $("#js-button-top").fadeOut(300)
                }
            });
        });

        //「ご予約」「お問い合わせ」ボタンがフッター手前で止まる
        $(document).ready(function(){
            $(".fixed__button").hide();
            $(window).on("scroll", function() {
                
                
                if ($(this).scrollTop() >= 0) {
                    $(".fixed__button").fadeIn("fast");
                } else {
                    $(".fixed__button").fadeOut("fast");
                }
                
                scrollHeight = $(document).height();
                scrollPosition = $(window).height() + $(window).scrollTop();
                footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
                if ( scrollHeight - scrollPosition  <= footHeight ) {
                    $(".fixed__button").css({
                        "position":"absolute", 
                        "bottom": footHeight
                    });
                } else { 
                    $(".fixed__button").css({
                        "position":"fixed",
                        "bottom": "0" 
                    });
                }
            });
            $('.fixed__button').click(function () {
                $('body,html').animate({
                scrollTop: 0
                }, 400);
                return false;
            });
        });
    });
})();


