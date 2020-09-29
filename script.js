// Javascript code goes here

function pizzaClickButtonEvent() {

    let papaButton = document.getElementById('papa');
    let dominoButton = document.getElementById('domino');
    let pizzaHutButton = document.getElementById('pizzaHut');

    papaButton.addEventListener("click", function() {
        location.href = 'https://www.papajohns.com';
    });

    dominoButton.addEventListener("click", function() {
        location.href = 'https://www.dominos.com';
    });

    pizzaHutButton.addEventListener("click", function() {
        location.href = 'https://www.pizzahut.com/';
    });



    // document.getElementById('papa').onclick = function() {
    //     location.href = 'https://www.papajohns.com';
    // };

    // document.getElementById('domino').onclick = function() {
    //     location.href = 'https://www.dominos.com';
    // };

    // document.getElementById('pizzaHut').onclick = function() {
    //     location.href = 'https://www.pizzahut.com/';
    // };

}