$(function () {

// =============================================================== 'apartment.pictures' slider
    $('#apartment-pictures').lightSlider({
        item: 3,
        loop: true,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left',
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#apartment-pictures .lslide'
            });
        }
    });


});