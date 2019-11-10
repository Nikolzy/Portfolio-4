$(document).ready(function() {
    let submenu = $('.home_submenu');
    $('.home').on('click', function() {
        submenu.toggleClass('show__submenu');
    });

    $('.section-gallery__item').on('mouseenter mouseleave', function() {
        let get_id = this.id;
        let new_icon = $(`.icon.${get_id}`);
        let new_block_icons = $(`.gallery-icons.${get_id}`);

        new_icon.toggleClass('align__icon');
        new_block_icons.toggleClass('show__icon');
    })

    // $('.journal__item__under').on('mouseenter mouseleave', function() {
    //     let get_id = this.id;
    //     console.log(get_id);
    //     let svg_fill = $(`.icon_svg_sprite.${get_id}`);
    //     console.log(svg_fill);
    //     let_new_id = $(`${get_id}1`);
    //     console.log(let_new_id);
    //     let get_element = getELementById(`${svg_fill}`);
    //     console.log(svg_fill);

    // $(svg_fill).toggleClass('svg_fill');
    // })
});