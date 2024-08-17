

let { top: aboutSection } = $("#about").offset();

$(window).scroll(function () {
    let windowOffset = $(window).scrollTop();

    if (windowOffset > aboutSection - 100) {
        $("#navbar").css("background-color", "black");
    } else {
        $("#navbar").css("background-color", "transparent")
        $("#backToTop").fadeOut(1000);
    }

})
