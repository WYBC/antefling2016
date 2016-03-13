// target elements with the "draggable" class
// var pic = interact('.draggable');

// pic.draggable({
//     max: 5,
//     manualStart: false,                      // will not work b/c you need to make a new listener [use no_handle]
//     // enable inertial throwing
//     inertia: false,
//     // keep the element within the area of it's parent
//     restrict: {
//       restriction: "parent",
//       endOnly: true,
//       elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
//     },

//     onstart: function (event) {},// fade in?
//     // call this function on every dragmove event
//     onmove: dragMoveListener,
//     // call this function on every dragend event
//     onend: function (event) {} // fade out?
//   });

var face1_object = interact('#face1').draggable({
    max: 5,
    manualStart: false,                      // will not work b/c you need to make a new listener [use no_handle]
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    },

    onstart: function (event) {},// fade in?
    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {} // fade out?
  });
var face2_object = interact('#face2').draggable({
    max: 5,
    manualStart: false,                      // will not work b/c you need to make a new listener [use no_handle]
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    },

    onstart: function (event) {},// fade in?
    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {} // fade out?
  });
var face3_object = interact('#face3').draggable({
    max: 5,
    manualStart: false,                      // will not work b/c you need to make a new listener [use no_handle]
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    },

    onstart: function (event) {},// fade in?
    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {} // fade out?
  });
var face4_object = interact('#face4').draggable({
    max: 5,
    manualStart: false,                      // will not work b/c you need to make a new listener [use no_handle]
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    },

    onstart: function (event) {},// fade in?
    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {} // fade out?
  });
var face5_object = interact('#face5').draggable({
    max: 5,
    manualStart: false,                      // will not work b/c you need to make a new listener [use no_handle]
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    },

    onstart: function (event) {},// fade in?
    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {} // fade out?
  });


// interact('.draggable').on("down", function (event) {
//   console.log("triggerred");
// });

  function dragMoveListener (event) {
    console.log("drag");

    // var x = event.pageX - $('#element').offset().left;
    // var y = event.pageY - $('#element').offset().top;

    // var x_offset = event.pageX - $('#face4').offset().left;
    // var y_offset = event.pageY - $('#face4').offset().top;

    // console.log(x_offset);
    // console.log(y_offset);

    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  function checkBoundsFace1 (event){
    var x_offset = event.pageX - $('#face1').offset().left;
    var y_offset = event.pageY - $('#face1').offset().top;

    if (x_offset < 7) { // isolate left edge
      if (y_offset > x_offset) { // differentiate top edge of corner
        // left edge
        if (y_offset > (140.0 * x_offset)/7.0) {face1_object.draggable(false);} else {face1_object.draggable(true);};
      } else {
        // top edge
        if (y_offset < (6.0 * x_offset)/387.0) {face1_object.draggable(false);} else {face1_object.draggable(true);};
      };
    } else if (x_offset < 387) { // middle section
      // top edge
      if (y_offset < (6.0 * x_offset)/387.0) {face1_object.draggable(false);} else {face1_object.draggable(true);};
    } else if (x_offset < 440) { // right section
        // right edge
        if (y_offset < ((134.0 * x_offset)/53.0 - 972.45)) {face1_object.draggable(false);} else {face1_object.draggable(true);};
    } else {face1_object.draggable(true);};
  }

  face1_object.on("down", checkBoundsFace1);

  function checkBoundsFace2 (event){
    var x_offset = event.pageX - $('#face2').offset().left;
    var y_offset = event.pageY - $('#face2').offset().top;

    if (x_offset < 12) { // isolate overhanging (left) edge

      // test for left edge vs. lower left corner
      if (y_offset < (-x_offset + 207)) {
        // left edge
        if (y_offset < (-207.0 * x_offset)/12.0 + 207.0) {face2_object.draggable(false);} else {face2_object.draggable(true);};
      } else{
        // bottom edge
        if (y_offset > (-81.0 * x_offset)/290.0 + 207.0) {face2_object.draggable(false);} else {face2_object.draggable(true);};
      };
    } else if (x_offset < 290) {
      if ((y_offset > (-81.0 * x_offset)/290.0 + 207.0) ||  // bottom edge
        (y_offset < (18.0 * x_offset)/254.0 - 1.0) ||       // top edge
        (y_offset < (108.0 * x_offset)/22.0 - 1297.64))     // right edge
          {face2_object.draggable(false);} else {face2_object.draggable(true);};
    } else {face2_object.draggable(true);};
  }

  face2_object.on("down", checkBoundsFace2);

  function checkBoundsFace3 (event){
    var x_offset = event.pageX - $('#face3').offset().left;
    var y_offset = event.pageY - $('#face3').offset().top;

    if (x_offset < 23) {
      if (y_offset > (166.0 * x_offset)/23.0) {face3_object.draggable(false);} else {face3_object.draggable(true);};
    } else if (x_offset < 518) {
      if (y_offset > ((-112.0 * x_offset)/506.0 + 171.3)) {face3_object.draggable(false);} else {face3_object.draggable(true);};
    } else if (x_offset < 530) {
      if (y_offset < 53) {
        if (y_offset < ((53.0 * x_offset)/12.0 - 2331)) {face3_object.draggable(false);} else {face3_object.draggable(true);};
      } else {
        if (y_offset > ((112.0 * x_offset)/506.0 + 171.3)) {face3_object.draggable(false);} else {face3_object.draggable(true);};
      };
    } else {face3_object.draggable(true);};
  }

  face3_object.on("down", checkBoundsFace3);

  function checkBoundsFace4 (event){
    var x_offset = event.pageX - $('#face4').offset().left;
    var y_offset = event.pageY - $('#face4').offset().top;

    if (x_offset < 24) { // left bit
      // left edge
      if (y_offset > (166.0 * x_offset)/24.0) {face4_object.draggable(false);} else {face4_object.draggable(true);};
    } else if (x_offset < 518) { // middle section
      // bottom edge
      if (y_offset > ((-112.0 * x_offset)/506.0 + 171.3)) {face4_object.draggable(false);} else {face4_object.draggable(true);};
    } else if (x_offset < 530) { // right section
      if (y_offset < 54) { // above or below corner
        // right edge
        if (y_offset < ((54.0 * x_offset)/12.0 - 2331)) {face4_object.draggable(false);} else {face4_object.draggable(true);};
      } else {
        // bottom edge
        if (y_offset > ((-112.0 * x_offset)/506.0 + 171.3)) {face4_object.draggable(false);} else {face4_object.draggable(true);};
      };
    } else {face4_object.draggable(true);};
  }

  face4_object.on("down", checkBoundsFace4);

    function checkBoundsFace5 (event){
    var x_offset = event.pageX - $('#face5').offset().left;
    var y_offset = event.pageY - $('#face5').offset().top;

    if (x_offset < 25) {
      if (y_offset > (166.0 * x_offset)/25.0) {face5_object.draggable(false);} else {face5_object.draggable(true);};
    } else if (x_offset < 518) {
      if (y_offset > ((-112.0 * x_offset)/506.0 + 171.3)) {face5_object.draggable(false);} else {face5_object.draggable(true);};
    } else if (x_offset < 530) {
      if (y_offset < 55) {
        if (y_offset < ((55.0 * x_offset)/12.0 - 2331)) {face5_object.draggable(false);} else {face5_object.draggable(true);};
      } else {
        if (y_offset > ((112.0 * x_offset)/506.0 + 171.3)) {face5_object.draggable(false);} else {face5_object.draggable(true);};
      };
    } else {face5_object.draggable(true);};
  }

  face5_object.on("down", checkBoundsFace5);
