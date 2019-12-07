$(document).ready(function() {
    // Header - Home (submenu)
    let submenu = $('.home_submenu');
    $('.home').on('click', function() {
        submenu.toggleClass('show__submenu');
    });

    // Header links (icon)
    $('.header-icons__item').on('mouseenter mouseleave', function() {
        $(`.${this.id}`).toggleClass('svg_hover');
    })

    // Gallery icons
    $('.section-gallery__item').on('mouseenter mouseleave', function() {
        $(`.icon.${this.id}`).toggleClass('align__icon');
        $(`.gallery-icons.${this.id}`).toggleClass('show__icon');
    })

    // Journal icons
    $('.journal__item__under').on('mouseenter mouseleave', function() {
        $(`.${this.id}`).toggleClass('svg_hover');
    })

    // Follow us
    $('.follow__item').on('mouseenter mouseleave', function() {
        $(`.${this.id}`).toggleClass('follow__hover');
    })


    // Footer button
    $('.button').on('mouseenter mouseleave', function() {
        $(this).toggleClass('hover_bg');
        $(`.${this.id}`).toggleClass('hover_link');
    })

    // Footer social icon
    $('.social__icon').on('mouseenter mouseleave', function() {
        $(`.${this.id}`).toggleClass('social_hover');
    })

    // Burger menu
    $('#menu').on('click', function() {
        $('.header-ul').toggleClass('showMenu');
    })
});