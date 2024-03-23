$(document).ready(function() {
    let total = 0;
    let components = [];
    let dropdown_btns = $(".dropdown-btn");
    let processor = false
    let motherboard = false
    let computer_case = false
    let GPU = false
    let cooler = false
    let RAM = false
    let memory_storage = false
    let power_unit = false
    let monitor = false
    let keyboard = false
    let mouse = false
    let speakers = false
    let OS = false

    class Component {
        constructor(index, type, image, name, price) {
            this.index = index
            this.type = type
            this.image = image;
            this.name = name;
            this.price = price;
        };
    };

    function AddToCart(item) {
        let cart_item_text_html = `
        <div class="cart-item" data-type=${item.type} data-index=${item.index} data-value=${item.price}>
            <img src=${item.image}>
            <p class="cart-item-name">${item.name}</p>
            <p>${item.price}₽</p>
            <button class="remove-cart-item">Убрать из корзины</button>      
        </div>
        `
        return cart_item_text_html
    }  

    $(".cart").on("click", ".remove-cart-item", function() {
        $(this).parent().hide()
        let price = 0
        total = 0
        price = +$(this).parent().attr("data-value")
        total = +$("#total-number").text().replace("Итого: ", "").replace("₽", "")
        let new_total = total - price
        $("#total-number").text(`Итого: ${new_total}₽`)
        price = 0
        total = 0
        new_total = 0
        switch ($(this).parent().attr("data-type")) {
            case "processor":
                $('.calc-btn[data-type="processor"]').find(".component-choice").text("Не выбрано")
                processor = false
                break
            case "motherboard":
                $('.calc-btn[data-type="motherboard"]').find(".component-choice").text("Не выбрано")
                motherboard = false
                break
            case "computer_case":
                $('.calc-btn[data-type="computer_case"]').find(".component-choice").text("Не выбрано")
                computer_case = false
                break
            case "GPU":
                $('.calc-btn[data-type="GPU"]').find(".component-choice").text("Не выбрано")
                GPU = false
                break
            case "cooler":
                $('.calc-btn[data-type="cooler"]').find(".component-choice").text("Не выбрано")
                cooler = false
                break
            case "RAM":
                $('.calc-btn[data-type="RAM"]').find(".component-choice").text("Не выбрано")
                RAM = false
                break
            case "memory_storage":
                $('.calc-btn[data-type="memory_storage"]').find(".component-choice").text("Не выбрано")
                memory_storage = false
                break
            case "power_unit":
                $('.calc-btn[data-type="power_unit"]').find(".component-choice").text("Не выбрано")
                power_unit = false
                break
            case "monitor":
                $('.calc-btn[data-type="monitor"]').find(".component-choice").text("Не выбрано")
                monitor = false
                break
            case "keyboard":
                $('.calc-btn[data-type="keyboard"]').find(".component-choice").text("Не выбрано")
                keyboard = false
                break
            case "mouse":
                $('.calc-btn[data-type="mouse"]').find(".component-choice").text("Не выбрано")
                mouse = false
                break
            case "speakers":
                $('.calc-btn[data-type="speakers"]').find(".component-choice").text("Не выбрано")
                speakers = false
                break
            case "OS":
                $('.calc-btn[data-type="OS"]').find(".component-choice").text("Не выбрано")
                OS = false
                break
            }
    })

    for (let i = 0; i < dropdown_btns.length; i++) {
        $(dropdown_btns[i]).attr("data-index", i);
        let type = $(dropdown_btns[i]).parent().prev().attr("data-type")
        let image = $(dropdown_btns[i]).find("img").attr("src")
        let name = $(dropdown_btns[i]).find(".name").text();
        let price = $(dropdown_btns[i]).attr("data-value");
        components[i] = new Component(i, type, image, name, +price);
    };

    $(".flash-message").hide();
    $(".dropdown").hide();
    $(".desc").toggle()

    $("#dismiss-flash-message").click(() => {
        $(".flash-message").fadeOut(400);
    });

    $(".component-desc-btn").click(function() {
        if ($(this).parent().next(".desc").is(":visible")) {
            $(this).text("Подробнее")
            $(this).parent().next(".desc").slideUp(300)
        } else {
            $(this).text("Свернуть")
            $(this).parent().next(".desc").slideDown(300)
        }
    })

    $(".calc-btn").click(function() {
        if ($(this).next(".dropdown").is(":visible")) {
            $(this).find("i").css("transform", "rotate(0deg)");
            $(this).css("border-radius", "10px");
            $(this).next(".dropdown").find(".component-desc-btn").text("Подробнее")
            $(this).next(".dropdown").find(".desc").hide()
            $(this).next(".dropdown").slideUp(300);
        } else {      
            $(this).find("i").css("transform", "rotate(180deg)");
            $(this).css("border-radius", "10px 10px 0 0");
            $(this).next(".dropdown").slideDown(300);            
        };
    });
    
    $(".name").click(function() {       
        let dropdown_btn = $(this).parent();
        let parent = dropdown_btn.parent();
        let calc_btn = parent.prev(".calc-btn");       
        let value = dropdown_btn.attr("data-value");
        let item_index = dropdown_btn.attr("data-index")

        switch(calc_btn.attr("data-type")) {
            case "processor":
                if (processor) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    processor = true
                    break
                }
            
            case "motherboard":
                if (motherboard) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])          
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    motherboard = true
                    break
                }
            
            case "computer_case":
                if (computer_case) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])                  
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    computer_case = true
                    break
                }
            
            case "GPU":
                if (GPU) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])        
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    GPU = true
                    break
                }
            
            case "cooler":
                if (cooler) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])                 
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    cooler = true
                    break
                }
            
            case "RAM":
                if (RAM) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])               
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    RAM = true
                    break
                }
            
            case "memory_storage":
                if (memory_storage) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])                  
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    memory_storage = true
                    break
                }
            
            case "power_unit":
                if (power_unit) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])                 
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    power_unit = true
                    break
                }

            case "monitor":
                if (monitor) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])                  
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    monitor = true
                    break
                }

            case "keyboard":
                if (keyboard) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])               
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    keyboard = true
                    break
                }

            case "mouse":
                if (mouse) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])                   
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    mouse = true
                    break
                }

            case "speakers":
                if (speakers) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])                   
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    speakers = true
                    break
                }

            case "OS":
                if (OS) {
                    $(".flash-message").fadeIn(400);
                    break
                } else {
                    calc_btn.find(".component-choice").text(`Выбрано: ${$(this).text()}`);
                    calc_btn.css("border-radius", "10px");
                    calc_btn.find("i").css("transform", "rotate(0deg)");
                    parent.toggle();
                    total += +value;
                    let cart_object_text = AddToCart(components[+item_index])              
                    $(".cart").append(cart_object_text)
                    $("#total-number").text(`Итого: ${total}₽`);
                    OS = true
                    break
                }
            }
    });

    $("#clear-total-btn").click(() => {
        total = 0;
        chosen_components = []
        processor = false
        motherboard = false
        computer_case = false
        GPU = false
        cooler = false
        RAM = false
        memory_storage = false
        power_unit = false
        monitor = false
        keyboard = false
        mouse = false
        speakers = false
        OS = false
        $(".cart").html("")
        $(".component-choice").text("Не выбрано");
        $("#total-number").text(`Итого: ${total}₽`);
    });
    
});