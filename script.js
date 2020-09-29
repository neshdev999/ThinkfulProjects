// Javascript code goes here

function pizzaClickButtonEvent() {

    document.getElementById('papa').onclick = function() {
        location.href = 'https://www.papajohns.com';
    };

    document.getElementById('domino').onclick = function() {
        location.href = 'https://www.dominos.com';
    };

    document.getElementById('pizzaHut').onclick = function() {
        location.href = 'https://www.pizzahut.com/';
    };

}