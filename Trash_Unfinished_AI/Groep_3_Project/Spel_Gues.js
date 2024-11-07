const targetNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        let timeLeft = 45;
        const timerElement = document.getElementById("timer");

        function checkGuess() {
            const guess = parseInt(document.getElementById("guess").value);
            attempts++;

            if (guess === targetNumber) {
                document.getElementById("message").textContent = `Gefeliciteerd! Je hebt het getal geraden in ${attempts} pogingen.`;
                document.getElementById("message").style.color = "green";
            } else if (guess < targetNumber) {
                document.getElementById("message").textContent = "Probeer een hoger getal.";
                document.getElementById("message").style.color = "red";
            } else {
                document.getElementById("message").textContent = "Probeer een lager getal.";
                document.getElementById("message").style.color = "red";
            }

            if (timeLeft <= 0) {
                document.getElementById("message").textContent = "Tijd is op! Het juiste getal was " + targetNumber + ".";
                document.getElementById("message").style.color = "red";
            }
        }

        const timerInterval = setInterval(function() {
            timeLeft--;
            timerElement.textContent = `Tijd over: ${timeLeft} seconden`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                checkGuess();
            }
        }, 1000);