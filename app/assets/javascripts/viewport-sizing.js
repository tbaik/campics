var viewportSizing =
{
    setHomePageWidth: function () {
        vwrapWidth = 10 * ($('.vwrapper').width() + parseInt($('.vwrapper').css('padding-left')) + parseInt($('.vwrapper').css('padding-right')));

        $('.hwrapper').css({
            width: vwrapWidth + 'px'
        });

        $('.college-text').css({
            width: vwrapWidth + 'px'
        })
    },

    setWindowResize: function () {

        var bottomBorderHeight = $('#bottom-border').height();
        var topHeaderHeight = 40;
        var scrollHeight = $('.user-container').scrollTop();

        KokkoSuite.utils.Sizing.addFunction(function () {
            $('.vwrapper').css({
                height: KokkoSuite.utils.getWindowAxisLength('height') + 'px'
            }),

            $('#hscroll').css({
                width: KokkoSuite.utils.getWindowAxisLength('width') + 'px'
            }),

            $('#hscroll-main').css({
                width: KokkoSuite.utils.getWindowAxisLength('width') + 'px',
                height: KokkoSuite.utils.getWindowAxisLength('height') + 'px'
            }),

            $('#hscroll-main-wrapper').css({
                width: 10 * (KokkoSuite.utils.getWindowAxisLength('width')) + 'px',
                height: KokkoSuite.utils.getWindowAxisLength('height') + 'px'
            }),

            $('.section-container').css({
                height: (KokkoSuite.utils.getWindowAxisLength('height') - bottomBorderHeight) + 'px',
                width: KokkoSuite.utils.getWindowAxisLength('width') + 'px'
            }),

            $('.panes').css({
                height: (KokkoSuite.utils.getWindowAxisLength('height') - bottomBorderHeight) + 'px'
            }),

            // $('.panes img').css({
            //     height: (KokkoSuite.utils.getWindowAxisLength('height') - bottomBorderHeight) + 'px'
            // }),

            $('#header-logo').css({
                width: KokkoSuite.utils.getWindowAxisLength('width') + 'px',
                height: 0.05 * KokkoSuite.utils.getWindowAxisLength('height') + 'px'
            }),

            $('.vwrapper-content').css({
                paddingTop: 0.20 * KokkoSuite.utils.getWindowAxisLength('height') + 'px'
            }),

            $('.navbar').css({
                width: KokkoSuite.utils.getWindowAxisLength('width') + 'px'
            }),

            $('.section img').css({
                maxWidth: 0.7*KokkoSuite.utils.getWindowAxisLength('width') + 'px',
                maxHeight: 0.4*KokkoSuite.utils.getWindowAxisLength('width') + 'px'
            }),

            $('.container').css({
                width: KokkoSuite.utils.getWindowAxisLength('width') + 'px'
            }),

            setTimeout(function() {$('.section img').each(function() {
                var h = $(this).height();
                var w = $(this).width();

                this.style.marginTop = -Math.round((h + bottomBorderHeight)/2) + 'px';
                this.style.marginLeft = -Math.round(w/2) + 'px';
            })}, 100)
        }, 'resizeHomePage');

        KokkoSuite.appInit();
    }
};

$(document).ready(function () {
    viewportSizing.setHomePageWidth();
    viewportSizing.setWindowResize();
});
