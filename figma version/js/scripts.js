$(document).ready(function() {
    $(".dropdown").hide()
    $(".calc-btn").click(function() {
        $(this).next(".dropdown").toggle()
        if ($(this).next(".dropdown").is(":visible")) {
            $(this).find("i").css("transform", "rotate(180deg)")
            $(this).css("border-radius", "10px 10px 0 0")
        } else {
            $(this).find("i").css("transform", "rotate(0deg)")
            $(this).css("border-radius", "10px")
        }
    })
})
