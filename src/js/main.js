$(document).ready(function(){
    $('.tabs__title').click(function() {
        $(this).next().slideToggle();
        $('.tabs__title').not(this).next().slideUp();
        $('.tabs__title').removeClass('tabs__title--active');
        $(this).addClass('tabs__title--active');
        });
});