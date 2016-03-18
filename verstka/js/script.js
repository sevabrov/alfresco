(function($) {
    $(window).load(function() {
        $(".page-scrolable-content").mCustomScrollbar();
        $('.lasbel-search').click(function() {
            $(this).parent().toggleClass('active');
        });

        //for new place test 
        $('.ap-step-itm').click(function(numb) {
            $(this).addClass('active').siblings().removeClass('active')
            $('.ap-step-itm-bl').eq($(this).index()).addClass('active').siblings().removeClass('active')

        })
    });

})(jQuery);