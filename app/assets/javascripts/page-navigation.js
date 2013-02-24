$(document).ready(function () {
    var container =
        {
            opacity: 1,
            element: $('#container')
        };

    
        $('a')
        .mousedown(function() {
            $(window).mousemove(function() {
                isDragging = true;
                $(window).unbind("mousemove");
            });
        })
        .mouseup(function() {
            var wasDragging = isDragging;
            isDragging = false;
            $(window).unbind("mousemove");
            if (!wasDragging) { //was clicking
                transition();
            }
    });

    var transition = function() {
        // Set content pages as visible (display on)
        $('#site-container').css("visibility", "visible");

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
    }
});