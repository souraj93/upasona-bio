"use strict";
jQuery(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/agrarium_video_button.default", widget_ready_callback);
});

function widget_ready_callback(e) {
    let i,
        o,
        r = e.find(".agrarium_video_trigger_button"),
        n = e.find(".agrarium_video_container"),
        copy = n.detach();
    jQuery('body').append(copy);                    
    let t = copy.find(".agrarium_video_wrapper"),  
        a = copy.find(".agrarium_close_popup_layer"),
        u = jQuery(t).attr("data-src");
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
jQuery(r).on("click", function () {            
    jQuery(copy).addClass("active"),    
        setTimeout(function () {
            (i = jQuery(t).height()),
                (o = i * (16 / 9)),
                jQuery(t).width(o),
                jQuery(t).append(
                    '<div class="agrarium_video_inner"><iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="' +
                        u +
                        '?enablejsapi=1&amp;disablekb=1&amp;autoplay=1&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;loop=0&amp;wmode=transparent"></iframe></div>'
                );
        }, 100),
        setTimeout(function () {
            jQuery(copy).addClass("visible");                    
            jQuery('body').css({
                overflowY: 'hidden',
                paddingRight: scrollbarWidth
            });                    
        }, 200);                
});
function closeModal() {
    jQuery(copy).removeClass("visible"),
    setTimeout(function () {
        jQuery(t).html(""), jQuery(copy).removeClass("active");
        jQuery('body').css({
            overflowY: '',
            paddingRight: ''
        });
    }, 500);
}
    jQuery(a).on("click", closeModal),
    jQuery(n).on("click", function(e) {
        if(!jQuery(".agrarium_video_inner").has(e.target).length) {
            closeModal();
        }
    }),
    jQuery(window).on("resize", function () {    
        (i = jQuery(t).height()), (o = i * (16 / 9)), jQuery(t).width(o);
    });
}