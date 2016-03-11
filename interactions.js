var no_handle = true;

// target elements with the "draggable" class
var pic = interact('.draggable');

pic.draggable({
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

    // console.log(x_offset);
    // console.log(y_offset);

    if (x_offset > 500) {
      console.log(x_offset);
      pic.draggable(false);   
    } else {
      pic.draggable(true);
    };
  }

  pic.on("down", checkBoundsFace4);

// interact(".drag-trigger").on("down", function (event) {
//     console.log("triggered");
//     var interaction = event.interaction;

//     // interact('.draggable').fire("down");
//     // interaction.fire();
//     interaction.start({ name: 'drag' },
//                         event.interactible,
//                         $('.draggable'))
// });



function myHover(){
  console.log("trigger");
  no_handle = false;
}

function myLeave(){
  console.log("leave");
  no_handle = true;
}

function mmd(){
console.log("down");

// $('.draggable').trigger("drag");
}

// function mmv(event){
//   console.log("move");

//   var interaction = event.interaction;

//   if (interaction.pointerIsDown) {
//     dragMoveListener(event);
//   };
// }

function mmu(){
  console.log("up");
}

$('map').imageMapResize();

// interact('body').preventDefault("always");

$('map').css("pointer-events","none");
$('area').css("pointer-events","none");