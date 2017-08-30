/*!

 =========================================================
 * Now-ui-kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
    backgroundOrange = false,
    toggle_initialized = false;

$(document).ready(function() {
    //  Activate the Tooltips
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

    // Activate Popovers and set color for popovers
    $('[data-toggle="popover"]').each(function() {
        color_class = $(this).data('color');
        $(this).popover({
            template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    });

    // Activate the image for the navbar-collapse
    nowuiKit.initNavbarImage();

    $navbar = $('.navbar[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;

    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

    if ($('.navbar[color-on-scroll]').length != 0) {
        nowuiKit.checkScrollForTransparentNavbar();
        $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)
    }

    $('.form-control').on("focus", function() {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function() {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    // Activate bootstrapSwitch
    $('.bootstrap-switch').each(function() {
        $this = $(this);
        data_on_label = $this.data('on-label') || '';
        data_off_label = $this.data('off-label') || '';

        $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label
        });
    });

    if ($(window).width() >= 992) {
        big_image = $('.page-header-image[data-parallax="true"]');

        $(window).on('scroll', nowuiKitDemo.checkScrollForParallax);
    }

    // Activate Carousel
    $('.carousel').carousel({
        interval: 4000
    });

    $('.date-picker').each(function() {
        $(this).datepicker({
            templates: {
                leftArrow: '<i class="now-ui-icons arrows-1_minimal-left"></i>',
                rightArrow: '<i class="now-ui-icons arrows-1_minimal-right"></i>'
            }
        }).on('show', function() {
            $('.datepicker').addClass('open');

            datepicker_color = $(this).data('datepicker-color');
            if (datepicker_color.length != 0) {
                $('.datepicker').addClass('datepicker-' + datepicker_color + '');
            }
        }).on('hide', function() {
            $('.datepicker').removeClass('open');
        });
    });

    $('.switch.switch-background input').on("switchChange.bootstrapSwitch", function() {
        $input = $(this);

        if (!$input.is(':checked')) {
            $('.section:not(.section-notifications):not(.section-tabs):not(.section-download):not(.section-examples)').each(function() {
                $(this).fadeOut('fast', function() {
                    $(this).attr('data-background-color', 'orange');
                    $(this).fadeIn('fast');
                });

            });

            switch_orange = $('.navbar .collapse .navbar-nav.navbar-switch .nav-item .nav-link p.hidden');
            switch_white = $('.navbar .collapse .navbar-nav.navbar-switch .nav-item .nav-link p.visible');
            switch_white.removeClass('visible').addClass('hidden');
            switch_orange.removeClass('hidden').addClass('visible');

            $('.section.section-navbars > .container .navbar.bg-primary, .section.section-navbars > .container .navbar.bg-info').each(function() {
                $(this).addClass('bg-white');
            });

            $('.btn-primary,.btn-default,.btn-link').each(function() {
                $(this).addClass('btn-neutral');
            });

            $('button[data-toggle="popover"], button[data-toggle="tooltip"]').each(function() {
                $(this).removeClass('btn-default');
                $(this).addClass('btn-neutral');
            });

            $('.nav.nav-pills').each(function() {
                $(this).addClass('nav-pills-neutral');

                if ($('.nav.nav-pills.nav-pills-primary').length != 0) {
                    $(this).removeClass('nav-pills-primary');
                }
            });

            $('.pagination').each(function() {
                $(this).addClass('pagination-neutral');
            });

            $('.progress-container').each(function() {
                $(this).addClass('progress-neutral');

                if ($('.progress-container.progress-neutral').length != 0) {
                    $(this).removeClass('progress-primary');
                }
            });

            $('.badge').each(function() {
                $(this).addClass('badge-neutral');
            });

            $('.slider').each(function() {
                $(this).addClass('slider-neutral');

                if ($('.slider.slider-neutral').length != 0) {
                    $(this).removeClass('slider-primary')
                        .removeClass('slider-default');
                }
            });

            $('.blockquote').each(function() {
                $(this).addClass('blockquote-white');

                if ($('.blockuote.blockquote-white').length != 0) {
                    $(this).removeClass('blockquote-primary');
                }
            });

            backgroundOrange = true;
        } else {
            $('.section:not(.section-notifications):not(.section-tabs):not(.section-download):not(.section-examples)').each(function() {
                $(this).fadeOut('fast', function() {
                    $(this).removeAttr('data-background-color', 'orange');
                    $(this).fadeIn('fast');
                });
            });

            switch_white.removeClass('hidden').addClass('visible');
            switch_orange.removeClass('visible').addClass('hidden');

            $('.btn-primary,.btn-default,.btn-link').each(function() {
                $(this).removeClass('btn-neutral');
            });

            $('.section.section-navbars > .container .navbar.bg-primary, .section.section-navbars > .container .navbar.bg-info').each(function() {
                $(this).removeClass('bg-white');
            });

            $('button[data-toggle="popover"], button[data-toggle="tooltip"]').each(function() {
                $(this).removeClass('btn-neutral');
                $(this).addClass('btn-default');
            });

            $('.nav.nav-pills').each(function() {
                $(this).removeClass('nav-pills-neutral');

                if ($('.nav.nav-pills.nav-pills-neutral').length == 0) {
                    $(this).addClass('nav-pills-primary');
                }
            });

            $('.pagination').each(function() {
                $(this).removeClass('pagination-neutral');
            });

            $('.progress-container').each(function() {
                $(this).removeClass('progress-neutral');

                if ($('.progress-container.progress-neutral').length == 0) {
                    $(this).addClass('progress-primary');
                }
            });

            $('.badge').each(function() {
                $(this).removeClass('badge-neutral');
            });

            $('.slider').each(function() {
                $(this).removeClass('slider-neutral');

                if ($('.slider.slider-neutral').length == 0) {
                    $(this).addClass('slider-primary');
                }
            });

            $('.blockquote').each(function() {
                $(this).removeClass('blockquote-white');

                if ($('.blockuote.blockquote-white').length == 0) {
                    $(this).addClass('blockquote-primary');
                }
            });

            backgroundOrange = false;
        }
    });


    if ($('.twitter-sharrre').length != 0) {
        $('.twitter-sharrre').sharrre({
            share: {
                twitter: true
            },
            enableHover: false,
            enableTracking: true,
            enableCounter: false,
            buttons: {
                twitter: {
                    via: 'CreativeTim'
                }
            },
            click: function(api, options) {
                api.simulateClick();
                api.openPopup('twitter');
            },
            template: '<i class="fa fa-twitter"></i>',
            url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
        });
    }

    if ($('.twitter-sharrre-nav').length != 0) {
        $('.twitter-sharrre-nav').sharrre({
            share: {
                twitter: true
            },
            enableHover: false,
            enableTracking: true,
            enableCounter: false,
            buttons: {
                twitter: {
                    via: 'CreativeTim'
                }
            },
            click: function(api, options) {
                api.simulateClick();
                api.openPopup('twitter');
            },
            template: '<i class="fa fa-twitter"></i><p class="hidden-lg-up">Twitter</p>',
            url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
        });
    }

    if ($('.facebook-sharrre').length != 0) {
        $('.facebook-sharrre').sharrre({
            share: {
                facebook: true
            },
            enableHover: false,
            enableTracking: true,
            enableCounter: false,
            click: function(api, options) {
                api.simulateClick();
                api.openPopup('facebook');
            },
            template: '<i class="fa fa-facebook-square"></i>',
            url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
        });
    }

    if ($('.facebook-sharrre-nav').length != 0) {
        $('.facebook-sharrre-nav').sharrre({
            share: {
                facebook: true
            },
            enableHover: false,
            enableTracking: true,
            enableCounter: false,
            click: function(api, options) {
                api.simulateClick();
                api.openPopup('facebook');
            },
            template: '<i class="fa fa-facebook-square"></i><p class="hidden-lg-up">Facebook</p>',
            url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
        });
    }

    if ($('.linkedin-sharrre').length != 0) {
        $('.linkedin-sharrre').sharrre({
            share: {
                linkedin: true
            },
            enableCounter: false,
            enableHover: false,
            enableTracking: true,
            click: function(api, options) {
                api.simulateClick();
                api.openPopup('linkedin');
            },
            template: '<i class="fa fa-linkedin"></i>',
            url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
        });
    }

    if ($('.linkedin-sharrre-nav').length != 0) {
        $('.linkedin-sharrre-nav').sharrre({
            share: {
                linkedin: true
            },
            enableCounter: false,
            enableHover: false,
            enableTracking: true,
            click: function(api, options) {
                api.simulateClick();
                api.openPopup('linkedin');
            },
            template: '<i class="fa fa-linkedin"></i><p class="hidden-lg-up">LinkedIn</p>',
            url: 'http://demos.creative-tim.com/now-ui-kit/index.html'
        });
    }


});

$(window).on('resize', function() {
    nowuiKit.initNavbarImage();
});

$(document).on('click', '.navbar-toggler', function() {
    $toggle = $(this);

    if (nowuiKit.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
        nowuiKit.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function() {
            $toggle.removeClass('toggled');
        }, 550);
    } else {
        setTimeout(function() {
            $toggle.addClass('toggled');
        }, 580);
        div = '<div id="bodyClick"></div>';
        $(div).appendTo('body').click(function() {
            $('html').removeClass('nav-open');
            nowuiKit.misc.navbar_menu_visible = 0;
            setTimeout(function() {
                $toggle.removeClass('toggled');
                $('#bodyClick').remove();
            }, 550);
        });

        $('html').addClass('nav-open');
        nowuiKit.misc.navbar_menu_visible = 1;
    }
});

nowuiKit = {
    misc: {
        navbar_menu_visible: 0
    },

    checkScrollForTransparentNavbar: debounce(function() {
        if ($(document).scrollTop() > scroll_distance) {
            if (transparent) {
                transparent = false;
                $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
            }
        } else {
            if (!transparent) {
                transparent = true;
                $('.navbar[color-on-scroll]').addClass('navbar-transparent');
            }
        }
    }, 17),

    initNavbarImage: function() {
        var $navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
        var background_image = $navbar.data('nav-image');

        if ($(window).width() < 991 || $('body').hasClass('burger-menu')) {
            if (background_image != undefined) {
                $navbar.css('background', "url('" + background_image + "')")
                    .removeAttr('data-nav-image')
                    .css('background-size', "cover")
                    .addClass('has-image');
            }
        } else if (background_image != undefined) {
            $navbar.css('background', "")
                .attr('data-nav-image', '' + background_image + '')
                .css('background-size', "")
                .removeClass('has-image');
        }
    },

    initSliders: function() {
        // Sliders for demo purpose in refine cards section
        var slider = document.getElementById('sliderRegular');

        noUiSlider.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });

        var slider2 = document.getElementById('sliderDouble');

        noUiSlider.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    }
}


var big_image;

// Javascript just for Demo purpose, remove it from your project
nowuiKitDemo = {
    checkScrollForParallax: debounce(function() {
        var current_scroll = $(this).scrollTop();

        oVal = ($(window).scrollTop() / 3);
        big_image.css({
            'transform': 'translate3d(0,' + oVal + 'px,0)',
            '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
            '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
            '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
        });

    }, 6)

}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-46172202-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();