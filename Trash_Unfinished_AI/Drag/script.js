document.addEventListener('DOMContentLoaded', function () {
    var draggableElements = document.querySelectorAll('.draggable');
    var droppableElements = document.querySelectorAll('.droppable');
    var rollDiceButton = document.getElementById('rollDiceButton');
    var diceResult = document.getElementById('diceResult');

    var activeDraggableElement = null;
    var offsetX, offsetY;

    draggableElements.forEach(function (draggableElement) {
        draggableElement.addEventListener('mousedown', function (e) {
            e.preventDefault();
            activeDraggableElement = draggableElement;
            offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
            offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

            draggableElement.style.zIndex = 2; // Bring the draggable element to the front

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });

    function onMouseMove(e) {
        if (activeDraggableElement) {
            activeDraggableElement.style.left = e.clientX - offsetX + 'px';
            activeDraggableElement.style.top = e.clientY - offsetY + 'px';
        }
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        // Check if the draggable element is dropped near any of the droppable elements
        droppableElements.forEach(function (droppableElement) {
            var rect = droppableElement.getBoundingClientRect();
            if (
                activeDraggableElement.offsetLeft + activeDraggableElement.offsetWidth / 2 >= rect.left &&
                activeDraggableElement.offsetLeft + activeDraggableElement.offsetWidth / 2 <= rect.right &&
                activeDraggableElement.offsetTop + activeDraggableElement.offsetHeight / 2 >= rect.top &&
                activeDraggableElement.offsetTop + activeDraggableElement.offsetHeight / 2 <= rect.bottom
            ) {
                // Set the draggable element's position to the center of the droppable element
                activeDraggableElement.style.left = rect.left + (rect.width - activeDraggableElement.offsetWidth) / 2 + 'px';
                activeDraggableElement.style.top = rect.top + (rect.height - activeDraggableElement.offsetHeight) / 2 + 'px';
            }
        });

        activeDraggableElement.style.zIndex = 1; // Restore the original z-index
        activeDraggableElement = null;
    }

    // Roll dice functionality
    rollDiceButton.addEventListener('click', function () {
        var randomNumber = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
        diceResult.textContent = 'Dice result: ' + randomNumber;
    });




});

function bringToFront(color) {
    var elements = document.getElementsByClassName('draggable');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.zIndex = 1; // Reset all zIndex values
    }
    var targetElement = document.getElementById(color);
    targetElement.style.zIndex = 2; // Bring the clicked element to the front
}


//dice
const buttonEl = document.getElementById("rollDiceButton");
const diceEl = document.getElementById("dice");
let historyList = [];
function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}
buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});
