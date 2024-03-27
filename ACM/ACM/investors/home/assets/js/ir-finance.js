$(function () {
    // #finance1 하위 table tr 4번째 요소에 class="bg" 추가
    $("#finance1 .table.pc table tbody tr:nth-child(3)").addClass("bg");
    $("#finance1 .table.pc table tbody tr:nth-child(6)").addClass("bg");
    $("#finance1 .table.pc table tbody tr:nth-child(13)").addClass("bg");

    // graph1
    $("#graph1 div:nth-child(1) span").text($("#financial-body tr:nth-child(3) td:nth-child(2)").text());
    $("#graph1 div:nth-child(1) p").css("height", ($("#financial-body tr:nth-child(3) td:nth-child(2)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph1 div:nth-child(1) h2").text($("#financial-head tr:nth-child(1) th:nth-child(2)").text());

    $("#graph1 div:nth-child(2) span").text($("#financial-body tr:nth-child(3) td:nth-child(3)").text());
    $("#graph1 div:nth-child(2) p").css("height", ($("#financial-body tr:nth-child(3) td:nth-child(3)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph1 div:nth-child(2) h2").text($("#financial-head tr:nth-child(1) th:nth-child(3)").text());

    $("#graph1 div:nth-child(3) span").text($("#financial-body tr:nth-child(3) td:nth-child(4)").text());
    $("#graph1 div:nth-child(3) p").css("height", ($("#financial-body tr:nth-child(3) td:nth-child(4)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph1 div:nth-child(3) h2").text($("#financial-head tr:nth-child(1) th:nth-child(4)").text());

    // graph2
    $("#graph2 div:nth-child(1) span").text($("#financial-body tr:nth-child(6) td:nth-child(2)").text());
    $("#graph2 div:nth-child(1) p").css("height", ($("#financial-body tr:nth-child(6) td:nth-child(2)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph2 div:nth-child(1) h2").text($("#financial-head tr:nth-child(1) th:nth-child(2)").text());

    $("#graph2 div:nth-child(2) span").text($("#financial-body tr:nth-child(6) td:nth-child(3)").text());
    $("#graph2 div:nth-child(2) p").css("height", ($("#financial-body tr:nth-child(6) td:nth-child(3)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph2 div:nth-child(2) h2").text($("#financial-head tr:nth-child(1) th:nth-child(3)").text());

    $("#graph2 div:nth-child(3) span").text($("#financial-body tr:nth-child(6) td:nth-child(4)").text());
    $("#graph2 div:nth-child(3) p").css("height", ($("#financial-body tr:nth-child(6) td:nth-child(4)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph2 div:nth-child(3) h2").text($("#financial-head tr:nth-child(1) th:nth-child(4)").text());

    // graph3
    $("#graph3 div:nth-child(1) span").text($("#financial-body tr:nth-child(13) td:nth-child(2)").text());
    $("#graph3 div:nth-child(1) p").css("height", ($("#financial-body tr:nth-child(13) td:nth-child(2)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph3 div:nth-child(1) h2").text($("#financial-head tr:nth-child(1) th:nth-child(2)").text());

    $("#graph3 div:nth-child(2) span").text($("#financial-body tr:nth-child(13) td:nth-child(3)").text());
    $("#graph3 div:nth-child(2) p").css("height", ($("#financial-body tr:nth-child(13) td:nth-child(3)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph3 div:nth-child(2) h2").text($("#financial-head tr:nth-child(1) th:nth-child(3)").text());

    $("#graph3 div:nth-child(3) span").text($("#financial-body tr:nth-child(13) td:nth-child(4)").text());
    $("#graph3 div:nth-child(3) p").css("height", ($("#financial-body tr:nth-child(13) td:nth-child(4)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph3 div:nth-child(3) h2").text($("#financial-head tr:nth-child(1) th:nth-child(4)").text());

    // graph4
    $("#graph4 div:nth-child(1) span").text($("#income-body tr:nth-child(1) td:nth-child(2)").text());
    $("#graph4 div:nth-child(1) p").css("height", ($("#income-body tr:nth-child(1) td:nth-child(2)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph4 div:nth-child(1) h2").text($("#income-head tr:nth-child(1) th:nth-child(2)").text());

    $("#graph4 div:nth-child(2) span").text($("#income-body tr:nth-child(1) td:nth-child(3)").text());
    $("#graph4 div:nth-child(2) p").css("height", ($("#income-body tr:nth-child(1) td:nth-child(3)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph4 div:nth-child(2) h2").text($("#income-head tr:nth-child(1) th:nth-child(3)").text());

    $("#graph4 div:nth-child(3) span").text($("#income-body tr:nth-child(1) td:nth-child(4)").text());
    $("#graph4 div:nth-child(3) p").css("height", ($("#income-body tr:nth-child(1) td:nth-child(4)").text().replace(/,/g, "") / 1000000) * 100 + "%");
    $("#graph4 div:nth-child(3) h2").text($("#income-head tr:nth-child(1) th:nth-child(4)").text());

    // graph5
    $("#graph5 div:nth-child(1) span").text($("#income-body tr:nth-child(7) td:nth-child(2)").text());
    $("#graph5 div:nth-child(1) p").css("height", ($("#income-body tr:nth-child(7) td:nth-child(2)").text().replace(/,/g, "") / 100000) * 100 + "%");
    $("#graph5 div:nth-child(1) h2").text($("#income-head tr:nth-child(1) th:nth-child(2)").text());

    $("#graph5 div:nth-child(2) span").text($("#income-body tr:nth-child(7) td:nth-child(3)").text());
    $("#graph5 div:nth-child(2) p").css("height", ($("#income-body tr:nth-child(7) td:nth-child(3)").text().replace(/,/g, "") / 100000) * 100 + "%");
    $("#graph5 div:nth-child(2) h2").text($("#income-head tr:nth-child(1) th:nth-child(3)").text());

    $("#graph5 div:nth-child(3) span").text($("#income-body tr:nth-child(7) td:nth-child(4)").text());
    $("#graph5 div:nth-child(3) p").css("height", ($("#income-body tr:nth-child(7) td:nth-child(4)").text().replace(/,/g, "") / 100000) * 100 + "%");
    $("#graph5 div:nth-child(3) h2").text($("#income-head tr:nth-child(1) th:nth-child(4)").text());

    // graph6
    $("#graph6 div:nth-child(1) span").text($("#income-body tr:nth-child(10) td:nth-child(2)").text());
    $("#graph6 div:nth-child(1) p").css("height", ($("#income-body tr:nth-child(10) td:nth-child(2)").text().replace(/,/g, "") / 100000) * 100 + "%");
    $("#graph6 div:nth-child(1) h2").text($("#income-head tr:nth-child(1) th:nth-child(2)").text());

    $("#graph6 div:nth-child(2) span").text($("#income-body tr:nth-child(10) td:nth-child(3)").text());
    $("#graph6 div:nth-child(2) p").css("height", ($("#income-body tr:nth-child(10) td:nth-child(3)").text().replace(/,/g, "") / 100000) * 100 + "%");
    $("#graph6 div:nth-child(2) h2").text($("#income-head tr:nth-child(1) th:nth-child(3)").text());

    $("#graph6 div:nth-child(3) span").text($("#income-body tr:nth-child(10) td:nth-child(4)").text());
    $("#graph6 div:nth-child(3) p").css("height", ($("#income-body tr:nth-child(10) td:nth-child(4)").text().replace(/,/g, "") / 100000) * 100 + "%");
    $("#graph6 div:nth-child(3) h2").text($("#income-head tr:nth-child(1) th:nth-child(4)").text());

    $(".sub_header ul a").on("click", function (event) {
        event.preventDefault();
        $(".sub_header ul li").removeClass("on");
        $(this).parent().addClass("on");
        $(".tab").hide();
        $($(this).attr("href")).show();
    });
});
