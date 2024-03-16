$(document).ready(function() {
    let total = 0;

    $(".flash-message").toggle();
    $(".dropdown").hide();

    $("#dismiss-flash-message").click(() => {
        $(".flash-message").toggle();
    });

    $(".calc-btn").click(function() {
        $(this).next(".dropdown").toggle();
        if ($(this).next(".dropdown").is(":visible")) {
            $(this).find("i").css("transform", "rotate(180deg)");
            $(this).css("border-radius", "10px 10px 0 0");
        } else {
            $(this).find("i").css("transform", "rotate(0deg)");
            $(this).css("border-radius", "10px");
        };
    });
    
    $(".dropdown-btn").click(function() {
        let parent = $(this).parent();
        let calc_btn = parent.prev(".calc-btn");
        let value = $(this).attr("data-value");
        
        if (calc_btn.find(".component-choice").text() === "Не выбрано") {
            calc_btn.find(".component-choice").text(`Выбрано: ${$(this).find(".name").text()}`);
            calc_btn.css("border-radius", "10px");
            calc_btn.find("i").css("transform", "rotate(0deg)");
            parent.toggle();
            total += +value;
            $("#total-number").text(`Итого: ${total}₽`);
        } else {
            $(".flash-message").toggle();
        };
    });
    
    $("#clear-total-btn").click(() => {
        total = 0;
        $(".component-choice").text("Не выбрано");
        $("#total-number").text(`Итого: ${total}₽`);
    });
});
