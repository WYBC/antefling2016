var face1_object = interact('#face1').draggable({
    max: 5,
    manualStart: false,                      // will not work b/c you need to make a new listener [use no_handle]
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    // restrict: {
    //   restriction: "parent",
    //   endOnly: true,
    //   elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    // },

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
    // restrict: {
    //   restriction: "parent",
    //   endOnly: true,
    //   elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    // },

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
    // restrict: {
    //   restriction: "parent",
    //   endOnly: true,
    //   elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    // },

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
    // restrict: {
    //   restriction: "parent",
    //   endOnly: true,
    //   elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    // },

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
    // restrict: {
    //   restriction: "parent",
    //   endOnly: true,
    //   elementRect: { top: 0.75, left: 0.75, bottom: -2, right: 0.25 }
    // },

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

    // console.log(event.target.getAttribute('data-x'));
    // console.log(event.target.getAttribute('data-y'));

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
        if (y_offset > (140.0 * x_offset)/7.0) {
          face1_object.draggable(false);
          demote($('#face1'), face1_object, event);        
        } else {
          promote($('#face1'), face1_object, event);
          face1_object.draggable(true);};
      } else {
        // top edge
        if (y_offset < (6.0 * x_offset)/387.0) {
          face1_object.draggable(false);
          demote($('#face1'), face1_object, event);        
        } else {
          promote($('#face1'), face1_object, event);
          face1_object.draggable(true);};
      };
    } else if (x_offset < 387) { // middle section
      // top edge
      if (y_offset < (6.0 * x_offset)/387.0) {
        face1_object.draggable(false);
        demote($('#face1'), face1_object, event);        
      } else {
        promote($('#face1'), face1_object, event);
        face1_object.draggable(true);};
    } else if (x_offset < 440) { // right section
        // right edge
        if (y_offset < ((134.0 * x_offset)/53.0 - 972.45)) {
          face1_object.draggable(false);
          demote($('#face1'), face1_object, event);        
        } else {
          promote($('#face1'), face1_object, event);
          face1_object.draggable(true);};
    } else {
      promote($('#face1'), face1_object, event);
      face1_object.draggable(true);};
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
        if (y_offset < (-207.0 * x_offset)/12.0 + 207.0) {
          face2_object.draggable(false);
          demote($('#face2'), face2_object, event);
        } else {
          promote($('#face2'), face2_object, event);
          face2_object.draggable(true);};
      } else{
        // bottom edge
        if (y_offset > (-81.0 * x_offset)/290.0 + 207.0) {
          face2_object.draggable(false);
          demote($('#face2'), face2_object, event);
        } else {
          promote($('#face2'), face2_object, event);
          face2_object.draggable(true);};
      };
    } else if (x_offset < 290) {
      if ((y_offset > (-81.0 * x_offset)/290.0 + 207.0) ||  // bottom edge
        (y_offset < (18.0 * x_offset)/254.0 - 1.0) ||       // top edge
        (y_offset < (108.0 * x_offset)/22.0 - 1297.64))     // right edge
          {
            face2_object.draggable(false);
          demote($('#face2'), face2_object, event);
          } else {
            promote($('#face2'), face2_object, event);
            face2_object.draggable(true);};
    } else {
      promote($('#face2'), face2_object, event);
      face2_object.draggable(true);};
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
      demote($('#face3'), face3_object, event);
    } else { 
      promote($('#face3'), face3_object, event);
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
      if (y_offset > (166.0 * x_offset)/24.0) {
        face4_object.draggable(false);
        demote($('#face4'), face4_object, event);
      } else {
        promote($('#face4'), face4_object, event);
        face4_object.draggable(true);};
    } else if (x_offset < 518) { // middle section
      // bottom edge
      if (y_offset > ((-112.0 * x_offset)/506.0 + 171.3)) {
        face4_object.draggable(false);
        demote($('#face4'), face4_object, event);
      } else {
        promote($('#face4'), face4_object, event);
        face4_object.draggable(true);};
    } else if (x_offset < 530) { // right section
      if (y_offset < 54) { // above or below corner
        // right edge
        if (y_offset < ((54.0 * x_offset)/12.0 - 2331)) {
          face4_object.draggable(false);
          demote($('#face4'), face4_object, event);
        } else {
        promote($('#face4'), face4_object, event);
          face4_object.draggable(true);};
      } else {
        // bottom edge
        if (y_offset > ((-112.0 * x_offset)/506.0 + 171.3)) {
          face4_object.draggable(false);
          demote($('#face4'), face4_object, event);
        } else {
        promote($('#face4'), face4_object, event);
          face4_object.draggable(true);};
      };
    } else {
        promote($('#face4'), face4_object, event);
      face4_object.draggable(true);};
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
      face5_object.draggable(false);
      demote($('#face5'), face5_object, event);
    } else { 
      promote($('#face5'), face5_object, event);
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
    element.css("zIndex",2);

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

// code to re-assign "zIndex"s
function promote(element, interactible, event){
    
    // block dragging on element
    interactible.draggable(false);
    
    // get all images higher than the target 
    var z = element.css("zIndex");
    var images = $("img").filter(function() {
    return Number($(this).css("zIndex")) > z;
  });
    
    // push the target to the front
    element.css("zIndex",6);

    // re-process all lower events
    $(images).each( function () {
          // move element down
          $(this).css("zIndex",Number($(this).css("zIndex"))-1);
    });

    listAllZ();
}

function updatePlayTime() {
      SO_time = SO_player.getCurrentTime();
      JP_time = JP_player.getCurrentTime();
      nay_time = nay_player.getCurrentTime();
      sub_time = sub_player.getCurrentTime();
      // riz_time = riz_player.getCurrentTime();

      console.log("times")
      console.log(SO_time);
      console.log(JP_time);
      console.log(nay_time);
      console.log(sub_time);
}

function pauseAll() {
    // youtube
    SO_player.pauseVideo();
    JP_player.pauseVideo();
    nay_player.pauseVideo();
    sub_player.pauseVideo();

    // soundcloud
    riz_player.pause();
}

interact('.overlay').on('tap', function (event) {
    $('.overlay').fadeOut();
    $(".shadow").fadeOut();
    $("#back-shadow").fadeOut();

    // $(".overlay").css("zIndex",-10).css("visibility","hidden");
    // $(".shadow").css("zIndex",-10).css("visibility","hidden");
  })

face1_object.on('tap', function (event) {
    interact.stop();

    $("#nay-overlay").css("zIndex",10).css("visibility","visible");
    $("#nay-shadow").css("zIndex",9).css("visibility","visible");
    $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#nay-overlay").fadeTo(200, 1);
    $("#nay-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    nay_player.seekTo(nay_time_start);
    nay_player.playVideo();
  })

face2_object.on('tap', function (event) {
    interact.stop();

    $("#SO-overlay").css("zIndex",10).css("visibility","visible");
    $("#SO-shadow").css("zIndex",9).css("visibility","visible");
    $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#SO-overlay").fadeTo(200, 1);
    $("#SO-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    SO_player.seekTo(SO_time);
    SO_player.playVideo();
  })

face3_object.on('tap', function (event) {
    interact.stop();

    $("#JP-overlay").css("zIndex",10).css("visibility","visible");
    $("#JP-shadow").css("zIndex",9).css("visibility","visible");
    $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#JP-overlay").fadeTo(200, 1);
    $("#JP-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    JP_player.seekTo(JP_time);
    JP_player.playVideo();
  })

face4_object.on('tap', function (event) {
    interact.stop();

    $("#99-overlay").css("zIndex",10).css("visibility","visible");
    $("#99-shadow").css("zIndex",9).css("visibility","visible");
    $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#99-overlay").fadeTo(200, 1);
    $("#99-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    sub_player.seekTo(sub_time);
    sub_player.playVideo();
  })

face5_object.on('tap', function (event) {
    interact.stop();

    $("#riz-overlay").css("zIndex",10).css("visibility","visible");
    $("#riz-shadow").css("zIndex",9).css("visibility","visible");
    $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#riz-overlay").fadeTo(200, 1);
    $("#riz-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    // riz_player.seekTo(riz_time_start);
    riz_player.play();
  })

///////////// youtube
  var votes = 0;
  var fullyready = false;

  function voteReady(){
    votes++;
    if (votes >= 4) {
      // fullyready = true;
      // $( ".enter" ).css("display","inline-block");
      // $( "#dot1" ).css("display","none");
      // $( "#dot2" ).css("display","none");
      // $( "#dot3" ).css("display","none");
    };
    console.log(votes);
  }

      console.log("here");
        // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var SO_player;
      var JP_player;
      var nay_player;
      var sub_player;
      // var riz_player;

      // set start times
      var SO_time_start = 270;
      var JP_time_start = 54;
      var nay_time_start = 0;
      var sub_time_start = 21;
      // var riz_time_start = 3590;

      var SO_time = SO_time_start;
      var JP_time = JP_time_start;
      var nay_time = nay_time_start;
      var sub_time = sub_time_start;
      // var riz_time = riz_time_start;

      function onYouTubeIframeAPIReady() {
        SO_player = new YT.Player('SO-player', {
          videoId: 'YMxKdyjpRq4',
          playerVars: { 'autoplay': 1, 'controls': 0, 'endSeconds': 514 },
          events: {
            'onReady': SO_onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
          }
        });

        nay_player = new YT.Player('nay-player', {
          videoId: '_z216oK-sb4',
          playerVars: { 'autoplay': 1, 'controls': 0 },
          events: {
            'onReady': nay_onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
          }
        });

        JP_player = new YT.Player('JP-player', {
          videoId: 'AtwVdabW0GE',
          playerVars: { 'autoplay': 1, 'controls': 0 },
          events: {
            'onReady': JP_onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
          }
        });

        // riz_player = new YT.Player('riz-player', {
        //   videoId: 'n9Tc-bflp00',
        //   playerVars: { 'controls': 0 },
        //   events: {
        //     'onReady': riz_onPlayerReady,
        //     'onStateChange': onPlayerStateChange,
    //    'onError': onPlayerError  //   
     //
     // }
        // });

        sub_player = new YT.Player('sub-player', {
          videoId: 'kIPQpWVZXNU',
          playerVars: { 'autoplay': 1, 'controls': 0 },
          events: {
            'onReady': sub_onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
          }
        });
      }
      // 4.a. handle individual specialties
      function SO_onPlayerReady(event) {
        onPlayerReady(event);
        event.target.seekTo(SO_time_start);
        event.target.pauseVideo();
      }
      function JP_onPlayerReady(event) {
        onPlayerReady(event);
        event.target.seekTo(JP_time_start);
        event.target.pauseVideo();
      }
      function nay_onPlayerReady(event) {
        onPlayerReady(event);
        event.target.seekTo(nay_time_start);
        event.target.pauseVideo();
      }
      // function riz_onPlayerReady(event) {
      //   onPlayerReady(event);
      //   event.target.seekTo(riz_time_start);
      //   event.target.pauseVideo();
      // }
      function sub_onPlayerReady(event) {
        onPlayerReady(event);
        event.target.seekTo(sub_time_start);
        event.target.pauseVideo();
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.setVolume(100);
        voteReady();
      }

      // Reload video
      function onPlayerError(event){
        console.log("playback error");
        event.target.setPlaybackQuality("default");
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED && event.target === sub_player) {
          event.target.seekTo(sub_time_start);
          sub_time = sub_time_start;
          event.target.pauseVideo();
          console.log("replay");
        }
        // if (event.data == YT.PlayerState.ENDED && event.target === riz_player) {
        //   event.target.seekTo(riz_time_start);
        //   riz_time = riz_time_start;
        //   event.target.pauseVideo();
        //   console.log("replay");
        // }
        if (event.data == YT.PlayerState.ENDED && event.target === SO_player) {
          event.target.seekTo(SO_time_start);
          SO_time = SO_time_start;
          event.target.pauseVideo();
          console.log("replay");
        }
        if (event.data == YT.PlayerState.ENDED && event.target === JP_player) {
          event.target.seekTo(JP_time_start);
          JP_time = JP_time_start;
          event.target.pauseVideo();
          console.log("replay");
        }
        if (event.data == YT.PlayerState.ENDED && event.target === nay_player) {
          event.target.seekTo(nay_time_start);
          nay_time = nay_time_start;
          event.target.pauseVideo();
          console.log("replay");
        }
      }
      // function stopVideo() {
      //   player.stopVideo();
      // }

// code to retry loading
function retryLoad(chances){

  setTimeout(function(){
    if (votes >= 4 || chances <= 0) {
      // console.log("premature");
      $( ".enter" ).css("display","inline-block");
      $( "#dot1" ).css("display","none");
      $( "#dot2" ).css("display","none");
      $( "#dot3" ).css("display","none");

      interact('.welcome').on('tap', function (event) {
        // $(".welcome").fadeOut(10000, $(".welcome").css("zIndex",-10).css("visibility","hidden"));
        // $(".enter").fadeOut(10000, $(".enter").css("zIndex",-10).css("visibility","hidden"));

        $('.welcome').fadeOut();
      })

    } else {
      votes = 0;
      console.log("reload");
      
      // tag.remove(); // removes script from dom

      // reload API

      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      retryLoad(chances-1);
    };

  }, 3000);
}

var riz_player;

// code to handle page loading
window.onload = function() {

  ///////////// soundcloud init

  console.log(document.querySelector("#riziframe"))
  var iframeElement   = document.querySelector("#riziframe");
  riz_player      = SC.Widget(iframeElement);

  riz_player.bind("finish", function(){
    riz_player.seekTo(0);
    riz_player.pause();
  })

  // assign"zIndex"s to faces
  $('#face1').css("zIndex",2);
  $('#face2').css("zIndex",6);
  $('#face3').css("zIndex",4);
  $('#face4').css("zIndex",5);
  $('#face5').css("zIndex",3);
  listAllZ();

  var face1x = 300.0 / 1036.0, face1y = 420.0 / 701.0;
  var face2x = 250.0 / 1036.0, face2y = 200.0 / 701.0;
  var face3x = 360.0 / 1036.0, face3y = 220.0 / 701.0;
  var face4x = 190.0 / 1036.0, face4y = 130.0 / 701.0;
  var face5x = 380.0 / 1036.0, face5y = 35.0 / 701.0;

  var w = $(window).width();
  var h = $(window).height();

  $('#face1').css('transform', "translate(" + face1x*w + "px," + face1y*h + "px)");
  $('#face2').css('transform', "translate(" + face2x*w + "px," + face2y*h + "px)");
  $('#face3').css('transform', "translate(" + face3x*w + "px," + face3y*h + "px)");
  $('#face4').css('transform', "translate(" + face4x*w + "px," + face4y*h + "px)");
  $('#face5').css('transform', "translate(" + face5x*w + "px," + face5y*h + "px)");

  document.querySelector("#face1").setAttribute('data-x', $('#face1').offset().left);
  document.querySelector("#face1").setAttribute('data-y', $('#face1').offset().top);

  document.querySelector("#face2").setAttribute('data-x', $('#face2').offset().left);
  document.querySelector("#face2").setAttribute('data-y', $('#face2').offset().top);

  document.querySelector("#face3").setAttribute('data-x', $('#face3').offset().left);
  document.querySelector("#face3").setAttribute('data-y', $('#face3').offset().top);

  document.querySelector("#face4").setAttribute('data-x', $('#face4').offset().left);
  document.querySelector("#face4").setAttribute('data-y', $('#face4').offset().top);

  document.querySelector("#face5").setAttribute('data-x', $('#face5').offset().left);
  document.querySelector("#face5").setAttribute('data-y', $('#face5').offset().top);

  console.log("DONE ONLOAD");
  // console.log("translate(" + face1x / winX + "%," + face1y / winY + "%)");

  var chances = 1;
  retryLoad(chances);

};



///////////// links

interact('#naytronixlink').on('tap', function (event) {
    interact.stop();

    // $("#nay-overlay").css("zIndex",10).css("visibility","visible");
    // $("#nay-shadow").css("zIndex",9).css("visibility","visible");
    // $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#nay-overlay").fadeTo(200, 1);
    $("#nay-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    // nay_player.seekTo(nay_time_start);
    // nay_player.playVideo();
  })

interact('#speedyortizlink').on('tap', function (event) {
    interact.stop();

    // $("#SO-overlay").css("zIndex",10).css("visibility","visible");
    // $("#SO-shadow").css("zIndex",9).css("visibility","visible");
    // $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#SO-overlay").fadeTo(200, 1);
    $("#SO-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    // SO_player.seekTo(SO_time);
    // SO_player.playVideo();
  })

interact('#junglepussylink').on('tap', function (event) {
    interact.stop();

    // $("#JP-overlay").css("zIndex",10).css("visibility","visible");
    // $("#JP-shadow").css("zIndex",9).css("visibility","visible");
    // $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#JP-overlay").fadeTo(200, 1);
    $("#JP-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    JP_player.seekTo(JP_time);
    JP_player.playVideo();
  })

interact('#sublimelink').on('tap', function (event) {
    interact.stop();

    // $("#99-overlay").css("zIndex",10).css("visibility","visible");
    // $("#99-shadow").css("zIndex",9).css("visibility","visible");
    // $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#99-overlay").fadeTo(200, 1);
    $("#99-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    sub_player.seekTo(sub_time);
    sub_player.playVideo();
  })

interact('#rizzlalink').on('tap', function (event) {
    interact.stop();

    // $("#riz-overlay").css("zIndex",10).css("visibility","visible");
    // $("#riz-shadow").css("zIndex",9).css("visibility","visible");
    // $("#back-shadow").css("zIndex",8).css("visibility","visible");

    $("#riz-overlay").fadeTo(200, 1);
    $("#riz-shadow").fadeTo(200, 0.35);
    $("#back-shadow").fadeTo(200, 0.6);

    updatePlayTime();
    pauseAll();

    riz_player.seekTo(riz_time_start);
    riz_player.play();
  })



