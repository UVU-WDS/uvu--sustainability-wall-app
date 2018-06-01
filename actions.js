$(function(){

$('.svg-border').each(function(){
    var length = this.getTotalLength();
    var dynamiclength = this.getTotalLength() - (Math.floor(Math.random() * Math.floor(this.getTotalLength())) / 2);
    $(this)
        .css('stroke-dasharray', length)
        .css('stroke-dashoffset', length);
});

$('nav li').on('click', function(){
    $('nav .active').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    $('main section').removeClass('open');
    $('#section-'+id).addClass('open');
});

});