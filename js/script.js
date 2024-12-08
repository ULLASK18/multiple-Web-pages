$(document).ready(function() {
    $("nav a").on("click", function(event) {
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });
});
