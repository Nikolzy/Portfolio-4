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
        let get_id = this.id;
        let new_icon = $(`.icon.${get_id}`);
        let new_block_icons = $(`.gallery-icons.${get_id}`);

        new_icon.toggleClass('align__icon');
        new_block_icons.toggleClass('show__icon');
    })

    // Journal icons
    $('.journal__item__under').on('mouseenter mouseleave', function() {
        $(`.${this.id}`).toggleClass('svg_hover');
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
});