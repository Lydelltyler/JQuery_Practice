$('.click').click(function () {
    alert('I like Bacon')
});


$('h3.hide').click(function () {
    $('.sub-2').hide()
});

$('h3.show-me').click(function () {
    $('.sub-2').show()
});

$('h3.toggle').click(function () {
    $('.sub-3').toggle()
});

$('h3.slideDown').click(function () {
    $('.sub-4').slideDown('slow')
});

$('h3.slideUp').click(function () {
    $('.sub-4').slideUp('slow')
});

$('h3.slideToggle').click(function () {
    $('.sub-4').slideToggle(100)
})

$('h3.fadeIn').click(function () {
    $('.sub-5').fadeIn('slow')
})

$('h3.fadeOut').click(function () {
    $('.sub-5').fadeOut('slow')
})

$('h3.fadeToggle').click(function () {
    $('.sub-5').fadeToggle(1000)
})

$('h3.addClass').click(function () {
    $('.sub-6').addClass('myButton')
    $('.sub-6').text('Now im sexy')
})

$('h3.removeClass').click(function () {
    $('.sub-6').removeClass('myButton')
    $('.sub-6').html('<b>Now im ugly again<b>')
})

$('h3.before').click(function () {
    $('.sub-7').before('<b>I will</b>')
})

$('h3.after').click(function () {
    $('.sub-7').after('<h6>Then eat some more</h6>')
})

$('h3.append').click(function () {
    $('.sub-7').append('<b> then go eat</b>')
})

$("h3.attr").click(function () {
    $("img").attr("width", "50%");
})

$("h3.val").click(function () {
    $("input:text").val("Coding DOJO 2020");
});

