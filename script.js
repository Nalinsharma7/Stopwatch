let Timeinterval;
let sec = 00;
let min = 00;
let hr = 00;

// function to start the Stop watch.
function start() {
  Timeinterval = setInterval(time , 1000);
}


function time(){
  sec++;

  //Checking if minutes need to be increased.
  if (sec == 60) {
    sec = 00;
    min++;

    // Checking if hours need to be increased.
    if (min == 60) {
      min = 00;
      hr++;
      if (hr <= 9) {
        document.getElementById("hour").innerHTML = "0" + hr;
      } else {
        document.getElementById("hour").innerHTML = hr;
      }
    }

    if (min <= 9) {
      document.getElementById("minute").innerHTML = "0" + min;
    } else {
      document.getElementById("minute").innerHTML = min;
    }
  }

  // Checking if seconds need to be increased.
  if (sec <= 9) {
    document.getElementById("second").innerHTML = "0" + sec;
  } else {
    document.getElementById("second").innerHTML = sec;
  }
    
}


//Function to stop the Stop watch.
function stop() {
  clearInterval(Timeinterval);
}

//Function to reset the Stop watch.
function reset() {
  clearInterval(Timeinterval);
  min = 00;
  sec = 00;
  hr = 00;
  
  document.getElementById("minute").innerHTML = min + "0";
  
  document.getElementById("second").innerHTML = sec + "0";
  
  document.getElementById("hour").innerHTML = hr + "0";
}