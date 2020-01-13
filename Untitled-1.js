function(){
    
    $('menu a').click(function(){
        var = id =$(this).attr('href');
        var = position =$(id).offset().top;
        $('html body').animate{
            'scrollTop':position
        },2000);
    });
}

$(function(){
    $('.top-wrapper').hide().fadeIn('slow');
});
