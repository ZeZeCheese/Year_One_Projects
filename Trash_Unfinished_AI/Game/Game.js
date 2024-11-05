document.addEventListener('DOMContentLoaded', function () {
    const movingImage = document.getElementById('movingMouse');
    const screenWidth = window.innerWidth;

    function moveImage() {
        movingImage.style.left = screenWidth + 'px';
    } if (screenWidth === 100) {
        movingImage.style.right = screenWidth + 'px';
    }



    // Wacht 1 seconde en start dan de beweging
    setTimeout(moveImage, 1000);
});














// document.addEventListener("DOMContentLoaded", function () {
//     const obstacle = document.getElementById("obstacle");
//     const gameContainer = document.getElementById("game-container");

//     // Initial position of the obstacle
//     let obstacleLeft = 0;

//     // Move the obstacle from left to right
//     function moveObstacle() {
//         obstacleLeft += 500; // Adjust the speed of the obstacle as needed
//         obstacle.style.left = obstacleLeft + "px";

//         // // Check for collision with the cursor
//         // if (isColliding(obstacle)) {
//         //     stopGame();
//         // }

//         // Check if the obstacle has reached the right side of the screen
//         // if (obstacleLeft < gameContainer.clientWidth - obstacle.width) {
//         //     requestAnimationFrame(moveObstacle);
//         // }
//     }

//     // // Check for collision with the cursor
//     // function isColliding(element) {
//     //     const cursor = document.getElementById("cursor");
//     //     const elementRect = element.getBoundingClientRect();
//     //     const cursorRect = cursor.getBoundingClientRect();

//     //     return (
//     //         elementRect.left < cursorRect.right &&
//     //         elementRect.right > cursorRect.left &&
//     //         elementRect.top < cursorRect.bottom &&
//     //         elementRect.bottom > cursorRect.top
//     //     );
//     // }

//     // Stop the game when a collision occurs
//     function stopGame() {
//         alert("Game Over!");
//     }

//     // Start the game loop
//     moveObstacle();
// });
