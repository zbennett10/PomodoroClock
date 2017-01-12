$(document).ready(function() {
//globals -----------------------------------------------------
  var display = $("#display");
  var displaymin = $("#displaymin");
  var limit = 0;
  var seconds = 0;
  var minutes = 0;
  var limitdisplay = $("#limitdisplay");
  var limitadd = $("#limitadd");
  var limitsubtract = $("#limitsubtract");
  var timerstop = $("#timerstop");
  var breakdisplay = $("#breakdisplay");
  var breakadd = $("#breakadd");
  var breaksubtract = $("#breaksubtract");
  var breaklimit = 0;
  var breakminutes = 0;
  var breakseconds = 0;
  var breaksecdisplay = $("#breaksecdisplay");
  var breakmindisplay = $("#breakmindisplay");
  var breaktimerint;
  var pomtimerint;
  var pomodorotimer;
  
  //helper functions ------------------------------------------------------------
  //plays alarm sound
  var alarm = function() {
		document.getElementById( 'alarmsound' ).play();
	};
  
 //timer for the break period
 var breaktimer = function() {
     breaktimerint = setInterval(function() {
      if (breakseconds < 60) {
        breakmindisplay.text(breakminutes);
        breaksecdisplay.text(breakseconds++);
      } else {
          breakseconds = 0;
          //seconds++
          breakminutes++;
      breakmindisplay.text(breakminutes);
          if (breakminutes == breaklimit) {
            alarm();
           clearInterval(breaktimerint);
              breaksecdisplay.text(0);
            breakmindisplay.text(0);
            breakminutes = 0;
            breakseconds = 0;
            pomodorotimer();
           }
      }
      
    }, 1000);
    
  }
  
 //pomodoro timer
 pomodorotimer = function () {
     pomtimerint = setInterval(function() {
      if (seconds < 60) {
        displaymin.text(minutes);
        display.text(seconds++);
      } else {
          seconds = 0;
          //seconds++
          minutes++;
      displaymin.text(minutes);
          if (minutes == limit) {
            //play sound here
            alarm();
            //
           clearInterval(pomtimerint);
            display.text(0);
            displaymin.text(0);
            minutes = 0;
            seconds = 0;
            breaktimer();
           }
      }
      
    }, 1000);
  }
  
 
 //user induced event handlers ----------------------------------------------
  
  limitadd.click(function() {
    if (limit < 50) {
    limit = limit + 1;
    limitdisplay.text(limit);
    } else {}
  });
  
  limitsubtract.click(function() {
    if (limit > 0) {
    limit = limit - 1;
    limitdisplay.text(limit);
    }
    
    else {}
  });
  
  breakadd.click(function() {
    if (breaklimit < 15) {
    breaklimit = breaklimit + 1;
    breakdisplay.text(breaklimit);
    } else {}
  });
  
  breaksubtract.click(function() {
    if (breaklimit > 0) {
    breaklimit = breaklimit - 1;
    breakdisplay.text(breaklimit);
    } else {}
  });
 
  
  $("#timerstart").click(function() {
    if (limit == 0 || breaklimit == 0) {
      alert("Please enter a Break/Pomodoro Time Limit.")
      return;
    }
    pomodorotimer();
  });
  
  timerstop.click(function() {
    
   clearInterval(pomtimerint);
   clearInterval(breaktimerint);  
    minutes = 0;
    seconds = 0;
    breakseconds = 0;
    breakminutes = 0;
    //display.text(0);
    //displaymin.text(0);
    //breaksecdisplay.text(0);
    //breakmindisplay.text(0);
  });
  
  $("#timerpause").click(function() {
    clearInterval(pomtimerint);
    clearInterval(breaktimerint);
  });

});
