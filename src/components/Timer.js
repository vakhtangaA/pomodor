// Here iss General logic for timer, this function takes time from users, converts it
// To MM:SS format and displays, also here is  start/stop and reset buttons, which
// controls general flow of time in application

export default function Timer(props) {
  // Global variables for controlling application flow and data
  var counting = false;
  var session = true;
  var sessionLength = parseInt(props.sessionLength);
  var breakLength = parseInt(props.breakLength);
  var counter = sessionLength * 60;
  var interval;

  // This function takes parameter s, which is seconds, converts it to minutes and    /// remaining seconds and formats it with MM:SS format
  function convertSeconds(s) {
    let min = Math.floor(s / 60);
    let sec = s % 60;
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    return min + ":" + sec;
  }

  // Function for setting and clearing  intervals, it's onClick function on button with
  // id - "start-stop", which controls if timer is counting or not
  function start() {
    if (!counting) {
      let button = document.getElementById("start_stop");
      interval = setInterval(timeIt, 1000);
      counting = true;
      button.className = "fas fa-pause";
    } else {
      let button = document.getElementById("start_stop");
      clearInterval(interval);
      counting = false;
      button.className = "fas fa-play";
    }

    function timeIt() {
      var pTag = document.getElementById("timer-label");
      counter--;
      document.getElementById("time-left").innerHTML = convertSeconds(counter);

      if (counter === 0 && session) {
        pTag.innerText = "Break";
        let audio = document.getElementById("beep");
        audio.play();
        counter = breakLength * 60 + 1;
        session = false;
      } else if (counter === 0 && !session) {
        pTag.innerText = "Session";
        let audio = document.getElementById("beep");
        audio.play();
        counter = sessionLength * 60 + 1;
        session = true;
      }
    }
  }

  function reset() {
    let audio = document.getElementById("beep");
    audio.pause();
    audio.load();
    props.handleReset();
    counter = sessionLength * 60;
    clearInterval(interval);
    document.getElementById("time-left").innerHTML = convertSeconds(counter);
    document.getElementById("timer-label").innerText = "Session";
  }

  return (
    <div className="session">
      <audio
        id="beep"
        src="https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/519[kb]080_keep-it-simple-vibes.wav.mp3"
      ></audio>
      <p id="timer-label" style={{ width: "100%" }}>
        {session ? "Session" : "Break"}
      </p>
      <span id="time-left" style={{ width: "100%" }}>
        {convertSeconds(counter)}
      </span>

      <button
        id="start_stop"
        onClick={start}
        className="fas fa-play"
        style={{
          padding: "18px",
          marginLeft: "10px",
          marginTop: "10px",
          // borderRadius: "10px",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      ></button>
      <button
        id="reset"
        className="fas fa-redo-alt"
        style={{
          padding: "12px",
          marginLeft: "10px",
          marginTop: "10px",
          borderRadius: "30px",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={reset}
      ></button>
    </div>
  );
}
