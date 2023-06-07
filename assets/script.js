var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopics = topics[Math.floor(Math.random() * topics.length)];

const listTopics = () => {
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i])
    }
}

const randomTopic = () => {
    if (randomTopics === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopics === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopics === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopics === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

const selectTopic = (topic) => {
    if (topic === 'HTML') {
        console.log("Let's study HTML!");
        alert("Let's study HTML!");
    } else if (topic === 'CSS') {
        console.log("Let's study CSS!");
        alert("Let's study CSS!");
    } else if (topic === 'Git') {
        console.log("Let's study Git!");
        alert("Let's study Git!");
    } else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript!");
        alert("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
randomTopic();