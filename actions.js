$(function(){

$('.svg-border').each(function(){
    var length = this.getTotalLength();
    var dynamiclength = this.getTotalLength() - (Math.floor(Math.random() * Math.floor(this.getTotalLength())) / 2);
    $(this)
        .css('stroke-dasharray', length)
        .css('stroke-dashoffset', length);
});

var somethingOpen = false;

function closeAll(){
    $('section > div.opened').removeClass('opened');
    $('.backdrop').removeClass('active');
    somethingOpen = false;
}

// Main navigation
$('nav li').on('click', function(){
    closeAll();
    $('nav .active').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    $('main section').removeClass('open');
    $('#section-'+id).addClass('open');
});

// Details modals
$('.icon.closed').on('click', function(){
    var id = $(this).attr('data-opens');
    if ($('#'+id+'-modal').hasClass('opened')) {
        $('#'+id+'-modal').removeClass('opened');
        $('.backdrop').removeClass('active');
        somethingOpen = false;
    } else {
        closeAll();
        $('#'+id+'-modal').addClass('opened');
        $('.backdrop').addClass('active');
        somethingOpen = true;
    }
});

$('.close-icon').on('click', closeAll);

});