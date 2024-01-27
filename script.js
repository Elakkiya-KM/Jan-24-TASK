// Start the countdown
const C = document.getElementById("countdown");
setTimeout(function () {
 C.textContent = 10;

  // Continue the countdown
  setTimeout(function () {
   C.textContent = 9;

    // Continue the countdown
    setTimeout(function () {
     C.textContent = 8;

      // Continue the countdown
      setTimeout(function () {
       C.textContent = 7;

        // Continue the countdown
        setTimeout(function () {
        C.textContent = 6;

          // Continue the countdown
          setTimeout(function () {
          C.textContent = 5;

            // Continue the countdown
            setTimeout(function () {
             C.textContent = 4;

              // Continue the countdown
              setTimeout(function () {
              C.textContent = 3;

                // Continue the countdown
                setTimeout(function () {
                C.textContent = 2;

                  // Continue the countdown
                  setTimeout(function () {
                  C.textContent = 1;

                    // Display "Happy Independence Day"
                    setTimeout(function () {
                      C.textContent = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
