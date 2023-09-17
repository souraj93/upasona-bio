'use strict';

jQuery(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/agrarium_blog_listing.default', function () {
        if ( jQuery('body').hasClass('elementor-editor-active') ) {
            setTimeout(gallery_post_carousel_init, 300);
            setTimeout(fix_responsive_iframe, 600);
            setTimeout(custom_video_play_button, 800);
        }
    });
    elementorFrontend.hooks.addAction('frontend/element_ready/agrarium_portfolio_listing.default', function () {
        if ( jQuery('body').hasClass('elementor-editor-active') ) {
            setTimeout(elements_slider_init, 500);
        }
    });
    elementorFrontend.hooks.addAction('frontend/element_ready/agrarium_production_listing.default', function () {
        if ( jQuery('body').hasClass('elementor-editor-active') ) {
            updateProductionListingOffset();
            setTimeout(elements_slider_init, 500);
        }
    });
    elementorFrontend.hooks.addAction('frontend/element_ready/agrarium_testimonial_carousel.default', function () {
        if ( jQuery('body').hasClass('elementor-editor-active') ) {
            setTimeout( elements_slider_init, 100 );
        }
    });
});