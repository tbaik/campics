var hScroll, hcScroll, vScroll1, vScroll2, vScroll3,
    vScroll4, vScroll5, vScroll6, vScroll7,
    vcScroll1, vcScroll2, vcScroll3, vcScroll4,
    vcScroll5, vcScroll6, vcScroll7, vScroll8, 
    vScroll9, vScroll10, vcScroll8, vcScroll9, 
    vcScroll10;

function loaded() {
    setTimeout(function () {
        hScroll = new iScroll('hscroll', { vScroll: false, hScrollbar: false, lockDirection: true });
        hcScroll = new iScroll('hscroll-main', { vScroll: false, hScrollbar: false, momentum: false, lockDirection: true, snap: true });

        vScroll1 = new iScroll('vscroll1', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll2 = new iScroll('vscroll2', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll3 = new iScroll('vscroll3', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll4 = new iScroll('vscroll4', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll5 = new iScroll('vscroll5', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll6 = new iScroll('vscroll6', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll7 = new iScroll('vscroll7', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll8 = new iScroll('vscroll8', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll9 = new iScroll('vscroll9', { hScroll: false, vScrollbar: false, lockDirection: true });
        vScroll10 = new iScroll('vscroll10', { hScroll: false, vScrollbar: false, lockDirection: true });

        vcScroll1 = new iScroll('vcscroll1', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll2 = new iScroll('vcscroll2', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll3 = new iScroll('vcscroll3', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll4 = new iScroll('vcscroll4', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll5 = new iScroll('vcscroll5', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll6 = new iScroll('vcscroll6', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll7 = new iScroll('vcscroll7', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll8 = new iScroll('vcscroll8', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll9 = new iScroll('vcscroll9', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });
        vcScroll10 = new iScroll('vcscroll10', { hScroll: false, vScrollbar: false, momentum: false, lockDirection: true, snap: true });

    }, 100);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
