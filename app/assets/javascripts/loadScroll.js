var hScroll, vScroll1, vScroll2, vScroll3,
    vScroll4, vScroll5, vScroll6, vScroll7,
    vcScroll1, vcScroll2, vcScroll3, vcScroll4,
    vcScroll5, vcScroll6, vcScroll7, hcScroll;

function loaded() {
    setTimeout(function () {
        hScroll = new iScroll('hscroll', { vScroll: false, hScrollbar: false, lockDirection: true });

        vScroll1 = new iScroll('vscroll1', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll2 = new iScroll('vscroll2', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll3 = new iScroll('vscroll3', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll4 = new iScroll('vscroll4', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll5 = new iScroll('vscroll5', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll6 = new iScroll('vscroll6', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll7 = new iScroll('vscroll7', { hScroll: false, vScrollbar: false, lockDirection: true });

        vcScroll1 = new iScroll('vcscroll1', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll2 = new iScroll('vcscroll2', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll3 = new iScroll('vcscroll3', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll4 = new iScroll('vcscroll4', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll5 = new iScroll('vcscroll5', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll6 = new iScroll('vcscroll6', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll7 = new iScroll('vcscroll7', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });

        hcScroll = new iScroll('hscroll-main', { vScroll: false, hScrollbar: false, momentum: false, lockDirection: true, snap: true });
    }, 100);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
