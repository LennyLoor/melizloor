
var controller = new ScrollMagic.Controller();

/* ------------------------------------------ 
             [SECTION - ABOUT ME]
------------------------------------------- */

var img_box = document.getElementsByClassName("img_box");
for (var i = 0; i < img_box.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: img_box[i],
        offset: 90,
        triggerHook: 0.95,
    })
        .setClassToggle(img_box[i], "visible")
        .addTo(controller);
}

/* ------------------------------------------ 
             [SECTION - ACADEMIC]
------------------------------------------- */
var fa_item = document.getElementsByClassName("fa_item");

for (var i = 0; i < fa_item.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: fa_item[i],
        offset: 100,
        triggerHook: .9,
    })
        .setClassToggle(fa_item[i], "visible")
        .addTo(controller);
}

/* ------------------------------------------ 
      [SECTION - CONTACTO]
------------------------------------------- */
var tj_box = document.getElementById("tj_box");

new ScrollMagic.Scene({
    triggerElement: tj_box,
    offset: 100,
    triggerHook: .9,
})
    .setClassToggle(tj_box, "visible")
    .addTo(controller);

/* ------------------------------------------ 
      [SECTION - LINES]
------------------------------------------- */
new ScrollMagic.Scene({
    triggerElement: '#sm_line',
    offset: 50,
    triggerHook: .8,
})
    .setClassToggle('#sm_line', "visible")
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#fa_line',
    offset: 50,
    triggerHook: .8,
})
    .setClassToggle('#fa_line', "visible")
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#exp_line',
    offset: 50,
    triggerHook: .8,
})
    .setClassToggle('#exp_line', "visible")
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#tj_line',
    offset: 50,
    triggerHook: .5,
})
    .setClassToggle('#tj_line', "visible")
    .addTo(controller);