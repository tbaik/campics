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
        var topHeaderHeight = $('#navig').height();

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
                width: 10 * (KokkoSuite.utils.getWindowAxisLength('width')) + 'px'
            }),

            $('.section-container').css({
                height: (KokkoSuite.utils.getWindowAxisLength('height') - topHeaderHeight) + 'px',
                width: KokkoSuite.utils.getWindowAxisLength('width') + 'px',
                bottom: bottomBorderHeight + 'px'
            }),

            $('.panes').css({
                height: (KokkoSuite.utils.getWindowAxisLength('height') - topHeaderHeight) + 'px'
            }),

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

            $('.panes img').css({
                width: KokkoSuite.utils.getWindowAxisLength('width') + 'px'
            })

        }, 'resizeHomePage');

        KokkoSuite.appInit();
    }
};

$(document).ready(function () {
    viewportSizing.setHomePageWidth();
    viewportSizing.setWindowResize();
});
