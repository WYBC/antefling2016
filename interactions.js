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

  function checkBoundsFace4 (event){
    var x_offset = event.pageX - $('#face4').offset().left;
    var y_offset = event.pageY - $('#face4').offset().top;

    if (x_offset < 24) {
      if (y_offset > (166.0 * x_offset)/24.0) {face4_object.draggable(false);} else {face4_object.draggable(true);};
    } else if (x_offset < 518) {
      if (y_offset > ((-112.0 * x_offset)/506.0 + 171.3)) {face4_object.draggable(false);} else {face4_object.draggable(true);};
    } else if (x_offset < 530) {
      if (y_offset < 54) {
        if (y_offset < ((54.0 * x_offset)/12.0 - 2331)) {face4_object.draggable(false);} else {face4_object.draggable(true);};
      } else {
        if (y_offset > ((112.0 * x_offset)/506.0 + 171.3)) {face4_object.draggable(false);} else {face4_object.draggable(true);};
      };
    } else {face4_object.draggable(true);};
  }

  face4_object.on("down", checkBoundsFace4);
