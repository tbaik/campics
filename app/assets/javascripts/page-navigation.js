$(document).ready(function () {
    var container =
        {
            opacity: 1,
            element: $('#container')
        };
    
    var xcoord, ycoord;
    $('.image-links').mousedown(function(e) {
        xcoord = e.pageX;
        ycoord = e.pageY;
    }).mouseup(function(e) {
        xcoord = xcoord - e.pageX;
        ycoord = ycoord - e.pageY;

        if(!(xcoord) && !(ycoord))
        {
            transition();
        }
    });

    $('.dropdown-menu a').click(function(){
        setTimeout(function () { 
            var x = window.location.hash
            var w = -340;
            var pageX;

            if(x == '#uci')
                {
                    pageX = 0;
                    $('#dropdown-list span:first').text('UCI');
                    hScroll.scrollTo(0, 0);
                }
                else if(x == '#stanford')
                {
                    pageX = 1;
                    $('#dropdown-list span:first').text('Stanford');
                    hScroll.scrollTo(w, 0);
                }
                else if(x == '#mit')
                {
                    pageX = 2;
                    $('#dropdown-list span:first').text('MIT');
                    hScroll.scrollTo(w*2, 0);
                }
                else if(x == '#cit')
                {
                    pageX = 3;
                    $('#dropdown-list span:first').text('CIT');
                    hScroll.scrollTo(w*3, 0);
                }
                else if(x == '#yale')
                {
                    pageX = 4;
                    $('#dropdown-list span:first').text('Yale');
                    hScroll.scrollTo(w*4, 0);
                }
                else if(x == '#usc')
                {
                    pageX = 5;
                    $('#dropdown-list span:first').text('USC');
                    hScroll.scrollTo(w*5, 0);
                }
                else if(x == '#dartmouth')
                {
                    pageX = 6;
                    $('#dropdown-list span:first').text('Dartmouth');
                    hScroll.scrollTo(w*6, 0);
                }
                else if(x == '#ucla')
                {
                    pageX = 7;
                    $('#dropdown-list span:first').text('UCLA');
                    hScroll.scrollTo(w*7, 0);
                }
                else if(x == '#princeton')
                {
                    pageX = 8;
                    $('#dropdown-list span:first').text('Princeton');
                    hScroll.scrollTo(w*8, 0);
                }
                else if(x == '#harvard')
                {
                    pageX = 9;
                    $('#dropdown-list span:first').text('Harvard');
                    hScroll.scrollTo(w*9, 0);
                }

                hcScroll.scrollToPage(pageX,0);
            }, 100);
    });

    var scrollPage = function() {
         // Transition to the right screen
            setTimeout(function () { 
            var hash = window.location.hash
            var pageXY = [];

            var y = hash.slice(hash.length-1, hash.length);
            if(y == '0')
            {
                y = hash.slice(hash.length-2, hash.length);
                var x = hash.slice(0, hash.length-2);
            }
            else var x = hash.slice(0, hash.length-1);
            

            pageXY[1] = parseInt(y) - 1;

            if(x == '#uci')
            {
                pageXY[0] = 0;
                $('#dropdown-list span:first').text('UCI');
            }
            else if(x == '#stanford')
            {
                pageXY[0] = 1;
                $('#dropdown-list span:first').text('Stanford');
            }
            else if(x == '#mit')
            {
                pageXY[0] = 2;
                $('#dropdown-list span:first').text('MIT');
            }
            else if(x == '#cit')
            {
                pageXY[0] = 3;
                $('#dropdown-list span:first').text('Cal Tech');
            }
            else if(x == '#yale')
            {
                pageXY[0] = 4;
                $('#dropdown-list span:first').text('Yale');
            }
            else if(x == '#usc')
            {
                pageXY[0] = 5;
                $('#dropdown-list span:first').text('USC');
            }
            else if(x == '#dartmouth')
            {
                pageXY[0] = 6;
                $('#dropdown-list span:first').text('Dartmouth');
            }
            else if(x == '#ucla')
            {
                pageXY[0] = 7;
                $('#dropdown-list span:first').text('UCLA');
            }
            else if(x == '#princeton')
            {
                pageXY[0] = 8;
                $('#dropdown-list span:first').text('Princeton');
            }
            else if(x == '#harvard')
            {
                pageXY[0] = 9;
                $('#dropdown-list span:first').text('Harvard');
            }

            if(pageXY[0] == 0)
            {
                vcScroll1.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 1)
            {
                vcScroll2.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 2)
            {
                vcScroll3.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 3)
            {
                vcScroll4.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 4)
            {
                vcScroll5.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 5)
            {
                vcScroll6.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 6)
            {
                vcScroll7.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 7)
            {
                vcScroll8.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 8)
            {
                vcScroll8.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 9)
            {
                vcScroll9.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }
            else if(pageXY[0] == 0)
            {
                vcScroll10.scrollToPage(0,pageXY[1]);
                hcScroll.scrollToPage(pageXY[0], 0);
            }

        }, 100);
    }

    var transition = function() {
        
        // Set content pages as visible (display on)
        $('#site-container').css("visibility", "visible");

        scrollPage();
    
        // Fade the main page out and then turning the main page display off
        var containerTween = createjs.Tween.get(container);

        containerTween.onChange = function () {
            container.element.css('opacity', container.opacity);
        };

        containerTween.to({
            opacity: 0
        }, 1500, createjs.Ease.sineOut).call(function () {
            container.element.css('visibility', 'hidden');
        });  

        centerImages();
    };

    var centerImages = function(){
        setTimeout(function() {$('.section img').each(function() {
                var h = $(this).height();
                var w = $(this).width();

                this.style.marginTop = -Math.round((h + 25)/2) + 'px';
                this.style.marginLeft = -Math.round(w/2) + 'px';
            })}, 100)
    };

    // Twitter Feed
        $("#ticker").tweet({
                username: "UCIrvine", // define your twitter username
                page: 1,
                avatar_size: 32, // avatar size in px
                count: 20, // how many tweets to show
                loading_text: "loading ..."
            }).bind("loaded", function () {
                var ul = $(this).find(".tweet_list");
                var ticker = function () {
                setTimeout(function () {
                ul.find('li:first').animate({
                marginTop: '-4em'
            }, 500, function () {
                $(this).detach().appendTo(ul).removeAttr('style');
                });
                ticker();
                }, 4000); // duration before next tick (4000 = 4 secs)
            };
                ticker();
        });

});