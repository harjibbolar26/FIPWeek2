const demo = document.getElementById("demo");

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, cur) => (
     acc * cur
), 1)

demo.innerHTML = result

