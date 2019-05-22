$(document).on('DOMContentLoaded', function (e){
    $('#head').hide();
    $('nav').hide();
    $('main').hide();
    $('footer').hide();
    e.preventDefault();
});

$(document).on('DOMContentLoaded', function (e){
    $('#head').show('slow');
    setTimeout(function() { $('nav').slideDown('slow') }, 550);
    setTimeout(function() { $('main').slideDown('slow') }, 1100);
    setTimeout(function() { $('footer').slideDown() }, 1200);
    e.preventDefault();
});