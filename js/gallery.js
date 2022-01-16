$(function () {
    //zoom img onclick
    $(".zoom").click(function () {
        $(".hover-buttons").css("visibility", "hidden");
        $(".overlayx").addClass("active");
        $(".popup").addClass("active");

        var activeImg = $(this).attr("href");
        $(activeImg).fadeIn();
    });
    //close img onclick
    $(".close").click(function () {
        $(".overlayx").removeClass("active");
        $(".popup").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });

    $(document).on("click", ".overlayx", function() {
        $(".overlayx").removeClass("active");
        $(".popup").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });

    $(".overlayx").click(function () {
        $(".overlayx").removeClass("active");
        $(".popup").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });
});