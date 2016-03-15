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

    onstart: function (event) {console.log("drag: 1");},// fade in?
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

    onstart: function (event) {console.log("drag: 2");},// fade in?
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

    onstart: function (event) {console.log("drag: 3");},// fade in?
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

    onstart: function (event) {console.log("drag: 4");},// fade in?
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

    onstart: function (event) {console.log("drag: 5");},// fade in?
    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {} // fade out?
  });

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
    console.log("checking face 1");

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
    console.log("checking face 2");

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
    console.log("checking face 3");

    var x_offset = event.pageX - $('#face3').offset().left;
    var y_offset = event.pageY - $('#face3').offset().top;

    // top: y = -12.0x/335.0 + 12.0
    // bottom: y = -6.0x/344.0 + 184.1
    // left: x = 6.0y/172.0 - 0.42
    // right: x = 15.0y/178.0 + 334.9

    if ((y_offset < (-12.0 * x_offset)/335.0 + 12.0) ||
      (y_offset > (-6.0 * x_offset)/344.0 + 184.1) ||
      (x_offset < (6.0 * y_offset)/172.0 - 0.42) ||
      (x_offset > (15.0 * y_offset)/178.0 + 334.9)) {
      face3_object.draggable(false);
    } else { 
      face3_object.draggable(true);
    };
  }

  face3_object.on("down", checkBoundsFace3);

  function checkBoundsFace4 (event){
    console.log("checking face 4");

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
      console.log("checking face 5");

    var x_offset = event.pageX - $('#face5').offset().left;
    var y_offset = event.pageY - $('#face5').offset().top;

    // left: y = -132.0x/29.0 + 132.0
    // right: y = 132.0x/31.0 - 1784.13

    console.log(x_offset);
    console.log(y_offset);

    if ((y_offset < (-132.0 * x_offset)/29.0 + 132.0) ||
      (y_offset < (132.0 * x_offset)/31.0 - 1784.13)) {
      console.log("stop.");
      // face5_object.draggable(false);
      demote($('#face5'), face5_object, event);
    } else { 
      face5_object.draggable(true);
    };

  }

  face5_object.on("down", checkBoundsFace5);

  function listAllZ(){
    console.log("face1 ", $('#face1').css("zIndex"));
    console.log("face2 ", $('#face2').css("zIndex"));
    console.log("face3 ", $('#face3').css("zIndex"));
    console.log("face4 ", $('#face4').css("zIndex"));
    console.log("face5 ", $('#face5').css("zIndex"));
  }
/*
  // code to re-assign"zIndex"s
  function demote(element, interactible, event){
    interactible.draggable(false);

    console.log("z: " , element.css("zIndex"));

    var z = element.css("zIndex");

     console.log("event:");
     console.log(event);
     console.log(event.pageX);
     console.log(event.pageY);

    var images = $("img");
    $(images).each( function () {
        var this_z = Number($(this).css("zIndex"));
        if(this_z < z){
          $(this).css("zIndex",this_z+1);

          // // re-fire event if element is below current target
          // var e = jQuery.Event( "mousedown", { pageX: event.pageX, pageY: event.pageY } );

          // console.log("new event:");
          // console.log(e);

          // $(this).simulate(e);

          // console.log("target:");
          // console.log(this);
          // console.log("new event:");
          // console.log(e);

          elem = document.getElementById($(this).attr('id'));

          elem.addEventListener("mousedown", listAllZ)

          console.log("elem: ", elem)
          // Create the event.
          e = new MouseEvent("mousedown", {clientX: event.pageX, clientY: event.pageY});
          var cancelled = !elem.dispatchEvent(e);
          console.log("cancelled: ", cancelled)
        };
    });

    element.css("zIndex",1);
    console.log("z: " , element.css("zIndex"));
    listAllZ();
  }
*/

// TODO -- make promote function (launched on click) so that you do not drag it behind other elements
// TODO -- change to making pointer-events none? (reset all on end drag, still need to re-fire event)

// code to re-assign "zIndex"s
function demote(element, interactible, event){
    
    // block dragging on element
    interactible.draggable(false);
    
    // get all images lower than the target 
    var z = element.css("zIndex");
    var images = $("img").filter(function() {
    return Number($(this).css("zIndex")) < z;
  });
    
    // push the target to the back
    element.css("zIndex",1);

    // re-process all lower events
    $(images).each( function () {
          // move element up
          $(this).css("zIndex",Number($(this).css("zIndex"))+1);

          // re-fire event if element began below current target
          elem = document.getElementById($(this).attr('id'));

          // Create the event.
          e = new MouseEvent("mousedown", {clientX: event.pageX, clientY: event.pageY});
          var cancelled = !elem.dispatchEvent(e);
    });

    listAllZ();
}

  // // code to handle misses entirely
  // // will the interactible object work as an element?
  // function missed(element, event){
  //   $('#face1').trigger(e);
  //   $('#face2').trigger(e);
  //   $('#face3').trigger(e);
  //   $('#face4').trigger(e);
  //   $('#face5').trigger(e);
  // }

  // code to re-fire the down event
//   var e = jQuery.Event( "mousedown", { pageX: x_coord, pageY: y_coord } );
// $('#canvas_element').trigger(e);

window.onload = function() {
  // code to handle page loading
  // TODO

  // assign"zIndex"s to faces
  $('#face1').css("zIndex",1);
  $('#face2').css("zIndex",5);
  $('#face3').css("zIndex",3);
  $('#face4').css("zIndex",4);
  $('#face5').css("zIndex",2);
  listAllZ();
};

$("#face1").on("mousedown", checkBoundsFace1);
$("#face2").on("mousedown", checkBoundsFace2);
$("#face3").on("mousedown", checkBoundsFace3);
$("#face4").on("mousedown", checkBoundsFace4);
$("#face5").on("mousedown", checkBoundsFace5);

