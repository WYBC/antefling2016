/*    PART 1: FUNCTIONAL    */
/*    DEFINE BASIC DRAG CHARACTERISTICS    */

// make face1 draggable
var face1_object = interact('#face1').draggable({
    max: 5,
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    },

    onstart: function (event) {},
    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {}
  });
  
// make face5 draggable
var face5_object = interact('#face5').draggable({
    max: 5,
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    },

    onstart: function (event) {},
    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {}
  });

// keep track of drag
function dragMoveListener (event) {

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

// see if user has clicked the actual image area
function checkBoundsFace1 (event){

    var x_offset = event.pageX - $('#face1').offset().left;
    var y_offset = event.pageY - $('#face1').offset().top;

    if (x_offset < 7) { // isolate left edge
      if (y_offset > x_offset) { // differentiate top edge of corner
        // left edge
        if (y_offset > (140.0 * x_offset)/7.0) {
        face1_object.draggable(false);
        demote($('#face1'), face1_object, event);
        } else {face1_object.draggable(true);};
      } else {
        // top edge
        if (y_offset < (6.0 * x_offset)/387.0) {
        face1_object.draggable(false);
        demote($('#face1'), face1_object, event);
        } else {face1_object.draggable(true);};
      };
    } else if (x_offset < 387) { // middle section
      // top edge
      if (y_offset < (6.0 * x_offset)/387.0) {face1_object.draggable(false);} else {face1_object.draggable(true);};
    } else if (x_offset < 440) { // right section
        // right edge
        if (y_offset < ((134.0 * x_offset)/53.0 - 972.45)) {
        face1_object.draggable(false);
        demote($('#face1'), face1_object, event);
        } else {face1_object.draggable(true);};
    } else {face1_object.draggable(true);};
}

face1_object.on("down", checkBoundsFace1);

// see if user has clicked the actual image area
function checkBoundsFace5 (event){

    var x_offset = event.pageX - $('#face5').offset().left;
    var y_offset = event.pageY - $('#face5').offset().top;

    // left: y = -132.0x/29.0 + 132.0
    // right: y = 132.0x/31.0 - 1784.13

    if ((y_offset < (-132.0 * x_offset)/29.0 + 132.0) ||
      (y_offset < (132.0 * x_offset)/31.0 - 1784.13)) {
      face5_object.draggable(false);
      demote($('#face5'), face5_object, event);
    } else { 
      face5_object.draggable(true);
    };

}

face5_object.on("down", checkBoundsFace5);

// set handlers to test re-fire
$("#face1").on("mousedown", console.log("face1 down"));
$("#face5").on("mousedown", console.log("face5 down"));

/*    PART 2: NON-FUNCTIONAL    */
/*    REORDER LAYERS and RE-FIRE 'down' event    */

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

  function listAllZ(){
    console.log("face1 ", $('#face1').css("zIndex"));
    console.log("face5 ", $('#face5').css("zIndex"));
  }

// set initial z-indexes (using window.onload in live version)
$('#face1').css("zIndex",1);
$('#face5').css("zIndex",2);