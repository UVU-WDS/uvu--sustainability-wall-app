$(function(){

// Set properties on SVG paths so they can be animated with CSS
$('.svg-border').each(function(){
    var length = this.getTotalLength();
    $(this)
        .css('stroke-dasharray', length)
        .css('stroke-dashoffset', length);
});

// Clean-up after modals
function closeAll(){
    $('section > div.opened').removeClass('opened');
    $('.backdrop').removeClass('active');
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
    } else {
        closeAll();
        $('#'+id+'-modal').addClass('opened');
        $('.backdrop').addClass('active');
    }
});

// When closing a modal
$('.close-icon').on('click', closeAll);

});