// Javascript code goes here

function pizzaClickButtonEvent(id) {
    if (id === "papa") {
        location.href = 'https://www.papajohns.com';
    } else if (id === "domino") {
        location.href = 'https://www.dominos.com';
    } else if (id === "pizzaHut") {
        location.href = 'https://www.pizzahut.com/';
    } else {
        alert("Something went wrong!!! Reclick your choice");
    }
}