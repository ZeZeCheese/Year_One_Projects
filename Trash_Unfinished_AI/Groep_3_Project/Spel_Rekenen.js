let currentQuestion = 0;
        let score = 0;

        const questions = shuffle([
            { question: "7 + 3", answer: 10 },
            { question: "15 - 6", answer: 9 },
            { question: "4 x 5", answer: 20 },
            { question: "8 : 2", answer: 4 },
            { question: "10 + 12", answer: 22 },
            { question: "17 - 9", answer: 8 },
            { question: "6 x 7", answer: 42 },
            { question: "18 : 3", answer: 6 },
            { question: "9 + 8", answer: 17 },
            { question: "14 - 5", answer: 9 }
        ]);

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function checkAnswer() {
            const userAnswer = parseInt(document.getElementById("answer").value);
            if (userAnswer === questions[currentQuestion].answer) {
                score++;
                document.getElementById("result").innerHTML = "Goed gedaan!";
                document.getElementById("result").style.color = "#4CAF50";
            } else {
                document.getElementById("result").innerHTML = "Fout. Het juiste antwoord is " + questions[currentQuestion].answer;
                document.getElementById("result").style.color = "#E74C3C";
            }

            currentQuestion++;
            if (currentQuestion < questions.length) {
                document.getElementById("question").innerHTML = "Wat is: " + questions[currentQuestion].question;
                document.getElementById("answer").value = "";
            } else {
                document.getElementById("question").innerHTML = "Je score is: " + score + " van de " + questions.length + " vragen.";
                document.getElementById("answer").style.display = "none";
                document.querySelector("button").style.display = "none";
            }
            
        }
        document.getElementById("question").innerHTML = "Wat is: " + questions[currentQuestion].question;