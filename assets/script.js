// var topics = "HTML, CSS, Git, JavaScript";
// console.log(topics);

// var topics = "HTML";

// if (topics === 'HTML') {
//     console.log("Let's study HTML!");
// } else if (topics === 'CSS') {
//     console.log("Let's study CSS!");
// } else if (topics === 'Git') {
//     console.log("Let's study Git!");
// } else if (topics === 'JavaScript') {
//     console.log("Let's study JavaScript!");
// } else {
//     console.log('Please try again!');
// }

var topics = ["HTML", "CSS", "Git", "JavaScript", "Random"];

for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
    if (topics[x] === "HTML") {
        console.log("Let's study HTML!");
    } else if (topics[x] === "CSS") {
        console.log("Let's study CSS!");
    } else if (topics[x] === "Git") {
        console.log("Let's study Git!");
    } else if (topics[x] === "JavaScript") {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}