// Commom JS

// getParameterByName 함수
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(function () {
    // GNB on off 처리 /ko/about/brand 첫번째 ko는 언어코드, 두번째는 1차메뉴, 세번째는 2차메뉴

    let uri = window.location.href;
    let lang = uri.match(/\/([a-z]{2})\//)[1];
    let depth1Match = uri.match(/\/[a-z]{2}\/([a-z]+)/);
    let depth2Match = uri.match(/\/[a-z]{2}\/[a-z]+\/([a-z]+)/);

    let depth1 = depth1Match ? depth1Match[1] : null;
    let depth2 = depth2Match ? depth2Match[1] : null;

    $(".header1 .gnb>li").removeClass("on").addClass("off");

    // depth1과 depth2가 유효한 값을 가지고 있는 경우에만 클래스를 추가/제거합니다.
    if (depth1) {
        $("#" + depth1)
            .removeClass("off")
            .addClass("on");
    }

    if (depth2) {
        $("#" + depth2)
            .removeClass("off")
            .addClass("on");
    }

    console.log(lang, depth1, depth2);

    $("header").on("click", "#nav-icon", function () {
        $(this).toggleClass("active");
        $("html,body").toggleClass("fix");
        $("header .navbar").toggleClass("active");
        $(".header2").toggleClass("fix");
        $(".header2 .navbar .gnb li").find(".sub_menu").stop().slideUp(500);
    });

    // .navbar>li:not(:first-child)에 마우스 오버 이벤트를 등록
    $(".navbar>li:not(:first-child) a").on("mouseover", function () {
        jQuery(this).parent().parent().parent().addClass("on");
        jQuery(this).parent().addClass("on");
    });
    // .navbar>li:not(:first-child)에 마우스 아웃 이벤트를 등록
    $(".navbar>li:not(:first-child) a").on("mouseout", function () {
        $(".navbar>li:not(:first-child)").not(this).removeClass("on");
    });

    //메뉴 GNB
    $(".header2 .navbar .gnb li").removeClass("on");
    $(".header2 .navbar .gnb li").click(function () {
        $(".header2 .navbar .gnb li").removeClass("on").addClass("color");
        $(this).addClass("on").removeClass("color");

        if ($(this).find(".sub_menu").css("display") != "none") {
            $(".header2 .navbar .gnb li").removeClass("on").find(".sub_menu"); //삭제예정.stop().slideUp(500);
            $(this).removeClass("on").addClass("color");
        } else {
            $(".header2 .navbar .gnb li").find(".sub_menu").stop().slideUp(500);
            $(this).addClass("on").find(".sub_menu").stop().slideDown(500);
        }
    });

    //1차메뉴 링크 연결x(2,3번째 li만 링크연결)
    $(".header2 .navbar .gnb>ul>li>a").click(function (event) {
        if ($(this).parent().index() === 1 || $(this).parent().index() === 2) {
            // 2번째와 3번째 li 클릭시에는 이벤트를 중지하지 않습니다.
            return;
        }
        event.preventDefault();
    });

    // pc 메뉴 추가
    jQuery(".header1 .gnb>li").hover(function () {
        jQuery("header").addClass("over");
    });
    jQuery(".header1 .gnb>li").mouseleave(function () {
        jQuery("header").removeClass("over");
    });
    jQuery(".header1 .gnb>li").mouseenter(function () {
        jQuery(".header").removeClass("over");
    });

    //다국어 메뉴중 노출되는 첫 a는 링크연결x
    $(".language>li>a").click(function (e) {
        e.preventDefault();
    });

    // 다국어 uri 변경 처리
    $(".language_sub_menu>li>a").click(function (e) {
        e.preventDefault();
        // 현재 uri 를 가져와서 언어코드 부분만 변경하여 새로운 uri로 리다이렉션 처리
        var uri = window.location.href;
        var lang = $(this).data("lang");
        var newUri = uri.replace(/\/[a-z]{2}\//, "/" + lang + "/");
        // console.log(newUri);
        // newUri에 /news/notice/5499, /news/report/5658, /ir/announcement/5667, /artists/blackpink/discography/81, /actors/cha-seoungwon/notice/76 이와 같은 패턴이 있다면 해당 uri로 이동
        var pattern = /\/news\/notice\/\d+|\/news\/report\/\d+|\/ir\/announcement\/\d+|\/artists\/[^/]+\/discography\/\d+|\/actors\/[^/]+\/notice\/\d+/;

        if (pattern.test(newUri)) {
            var lastIndex = newUri.lastIndexOf("/");
            newUri = newUri.substring(0, lastIndex);
            window.location.href = newUri;
        } else {
            window.location.href = newUri;
        }
    });

    // HEADER STICKY
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $("header").removeClass("down").addClass("up");
            $("header").parent().removeClass("on");
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $("header").removeClass("up").addClass("down");
                $("header").parent().addClass("on");
            }
            if (st <= 5) {
                $("header").removeClass("down");
                $("header").parent().removeClass("on");
            }
        }

        lastScrollTop = st;
    }

    //상단으로 올라가는 버튼
    $(".to_top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            400
        );
        return false;
    });

    //Top 버튼 스크롤시 노출
    $(window).scroll(function () {
        var wTop = $(window).scrollTop();
        var sec1_scrollTop = 500;
        if (wTop > sec1_scrollTop) {
            $(".fix_btn").addClass("on");
        } else {
            $(".fix_btn").removeClass("on");
        }

        //Top 버튼 footer에 닿을때 lock
        const width = window.innerWidth;
        if (width > 2000) {
            var footerTop = $(".footer .lock_point").offset().top - 1200;
            if (wTop >= footerTop) {
                $(".fix_btn").addClass("lock");
            } else {
                $(".fix_btn").removeClass("lock");
            }
        } else if (width <= 2000 && width > 1280) {
            var footerTop = $(".footer .lock_point").offset().top - 800;
            if (wTop >= footerTop) {
                $(".fix_btn").addClass("lock");
            } else {
                $(".fix_btn").removeClass("lock");
            }
        } else if (width <= 1280 && width >= 768) {
            var footerTop = $(".footer .lock_point").offset().top - 800;
            if (wTop >= footerTop) {
                $(".fix_btn").addClass("lock");
                $(".sns_fix").addClass("lock");
            } else {
                $(".fix_btn").removeClass("lock");
                $(".sns_fix").removeClass("lock");
            }
        } else if (width < 378) {
            var footerTop = $(".footer").offset().top - 380;
            if (wTop >= footerTop) {
                $(".fix_btn").addClass("lock");
                $(".sns_fix").addClass("lock");
            } else {
                $(".fix_btn").removeClass("lock");
                $(".sns_fix").removeClass("lock");
            }
        } else {
            var footerTop = $(".footer .lock_point").offset().top - 800;
            if (wTop >= footerTop) {
                $(".fix_btn").addClass("lock");
                $(".sns_fix").addClass("lock");
            } else {
                $(".fix_btn").removeClass("lock");
                $(".sns_fix").removeClass("lock");
            }
        }
    });

    //모바일에서 sns moer버튼
    $(".sns_more").on("click", function (event) {
        $(this).toggleClass("on");
        $(".sns_fix ul").toggleClass("on");
    });

    AOS.init({
        disable: false,
        offset: 300,
        duration: 1300,
        easing: "ease",
        once: true,
    });
});
