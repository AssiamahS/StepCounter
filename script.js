// script.js
let stepCount = 0;
let isCounting = false;

document.getElementById("startButton").addEventListener("click", () => {
  if (!isCounting) {
    isCounting = true;
    startStepCounting();
    document.getElementById("startButton").innerText = "Stop Counting";
  } else {
    isCounting = false;
    document.getElementById("startButton").innerText = "Start Counting";
  }
});

function startStepCounting() {
  if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", (event) => {
      if (isCounting && event.accelerationIncludingGravity) {
        const acc = event.accelerationIncludingGravity;
        const totalAcc = Math.sqrt(acc.x ** 2 + acc.y ** 2 + acc.z ** 2);

        // Simple threshold-based step detection
        if (totalAcc > 15) {
          stepCount++;
          document.getElementById("stepCount").innerText = `Steps: ${stepCount}`;
        }
      }
    });
  } else {
    alert("Device Motion is not supported on this device.");
  }
}
