
    let phrases = [
    "What's one difference between you and someone you love that you enjoy?",
    "Is there a part of you that you'd like for other people to understand more?",
    "What's one thing you wished other people asked you more about?",
    "What's the most comforting line someone has ever said to you?",
    "In what ways is someone you love good for your mental health?",
    "If someone offered you a box with everything you ever lost, what's the first thing you'd look for?",
    "What's the thought that always stays on your mind before you go to sleep?",
    "What was the worst nightmare you had and the best dream you ever had?",
    "What would your dream date look like from start to finish?",
    "What do you value most in people?",
    "What's the one thing someone you care about has done that still hurts you?",
    "Is there a part yourself that you feel you need to hide from people you care about?",
    "Describe a time where you doubted when someone you cared about loved you?",
    "Do you feel like you can trust people you care about completely? Why?",
    "What is the hardest thing for you to understand about the people you care about?",
    "When was the last time you received a love letter?",
    "When was the last time someone asked how your day was and how they can make it better?",
    "When was the last time someone bought you flowers just because?",
    "When was the last time someone gave you a long hug and said 'I missed you.'?",
    "When was the last time someone told you that you were beautiful, handsome or gorgeous?",
    "Has anyone ever gotten you a sentimental gift with their signature on it? How did it make you feel?",
    "When was the last time you felt loved constantly?",
    "Describe your perfect date night? What was the best date night you ever had?",
    "Have you put someone else's photo as your background? Who was it and what did they mean to you?",
    "When was the last time someone did something or gifted something to you because it reminded them of you?",
    "Do you enjoy physical touch? Why not?",
    "When was the last time you cooked a meal with a loved one?",
    "What is the hardest thing for people to understand about you?",
    "What's a fear that's holding you back?",
    "Based on the people you share space with, do you think you are more confident since meeting them? Why not?",
    "If someone woke up as you, what do you think is the first thing they would do?",
    "What's one thing that you have changed your mind about based on new information?",
    "What's one thing that a loved one has changed your mind about?",
    "What was the biggest doubt that you have had about your future?",
    "Is there something about yoursef that you struggle to accept or deal with?",
    "Is there something about people you care about that you struggle to accept or deal with?",
    "Have you ever felt like you had to hide a part of yourself in your interpersonal relationships to avoid being perceived?",
    "Are there any unresolved feelings or issues from your past that people should know about?",
    "Do you feel fully satisfied with the level of connection that you have with the people in your life?",
    "Is there anything in your relationships that you feel is lacking or needs improvement?",
    "Do you feel like you've gotten lazy in showing love or passion? How?",
    "If you can go back in time, knowing what you know nowm what advice would you give yourself before getting into relationships with people?",
    "What negative thing has people said that you have a hard time forgetting?",
    "Is there a conflict that you have swept under the rug instead of resolving?",
    "If people could never say they love you again, how is a way they could show you how in their actions?",
    "Based on what you tell your friends, how would they describe you?",
    "Why do you love yourself?"
]

let box2 = document.getElementById("box2")
box2.addEventListener("click", function(){
})

let textEl = document.getElementById("text-el")
function text() {
    let random = Math.floor(Math.random() * phrases.length) 
    console.log(phrases[random])
    textEl.textContent = "Question: " + phrases[random]
}

function inputValue() {
    let inputValue = document.getElementById("inputValue").value
    console.log(inputValue)
    output.textContent = "My Answer: " + inputValue 
}
