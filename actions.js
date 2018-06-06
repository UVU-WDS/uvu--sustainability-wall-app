$(function(){

$('.svg-border').each(function(){
    var length = this.getTotalLength();
    var dynamiclength = this.getTotalLength() - (Math.floor(Math.random() * Math.floor(this.getTotalLength())) / 2);
    $(this)
        .css('stroke-dasharray', length)
        .css('stroke-dashoffset', length);
});

var somethingOpen = false;

function cleanScreen(){
    if (somethingOpen) {
        $('section.open svg, section.open .summary, section.open .icon.open').addClass('hiding');
    } else {
        $('.hiding').removeClass('hiding');
    }
}

function closeAll(){
    $('section > div.opened').removeClass('opened');
    somethingOpen = false;
    cleanScreen();
}

$('nav li').on('click', function(){
    closeAll();
    $('nav .active').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    $('main section').removeClass('open');
    $('#section-'+id).addClass('open');
});

$('.icon.closed').on('click', function(e){
    var id = $(this).attr('data-opens');
    if ($('#'+id).hasClass('opened')) {
        $('#'+id).removeClass('opened');
        somethingOpen = false;
    } else {
        closeAll();
        $('#'+id).addClass('opened');
        somethingOpen = true;
    }
    cleanScreen();
});

$('.close-icon').on('click', closeAll);

});