var sweet = [
    "Do you ever want to be famous? Why or why not?",
    "What's your favorite way to waste time?",
    "What would a 'perfect' day look like for you?",
    "When was the last time you sang to yourself? To someone else?",
    "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
    ""
]

var sour =  [
    "What do you feel most grateful for in your life?",
    "What does your ideal life look like?",
    "Do you have a hunch about how you will die?",
    "What are you most proud of?"

]
var storytime = [
    "Tell your partner as much of your life story as you can in four minutes.",
]
var salty =  [
    "What's the most difficult challenge you've overcome?",
    "Would you rather be crazy rich, or deeply in love?",
    "How do you feel about your relationship with your mom?",
    "If you could change one thing about yourself, what would it be?",
    "How important are love and affection to you?"
]

var smoky = [
    "Is anything too serious to be joked about? If so, what is it?",
    "Of everyone in your family, whose death would you find most disturbing? Why?",
    "Is love a choice or something uncontrollable? Why?",
    "Would you choose a wild hot relationship, or a calm and stable one?",
    "If you were to die right now, what would you most regret not having told someone? Why haven't you told them yet?",
    "If heaven is real and you died tomorrow, would you get in?"
]

var spicy = [
    "If a crystal ball could tell you the truth about anything, what would you want to know?",
    "If you knew that you would die one year from now, would you change anything about the way you are now living? Why?",
    "What did your most recent past relationship teach you?",
    "Why do you think you're still single?",
    "If you and your partner were to become close friends, please share what would be the most important thing for them to know."
]

var umami = [
    "Share a personal problem and ask your partner's advice on how he or she might handle it."
]


var sweet_used = [];
var storytime_used = [];
var sour_used = [];
var salty_used = [];
var smoky_used = [];
var spicy_used = [];
var umami_used = [];

var startTime = Date.now();
console.log(startTime);

function inner_helper(questions_list, used_list) {

    var FOS = document.querySelector('.fadeOnSwitch')

    randomNumber = Math.floor(Math.random() * (questions_list.length))
        while (used_list.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (questions_list.length))
        }
        FOS.classList.add('pre-animation')
        
        setTimeout(function() {
            document.getElementById('question').innerHTML = questions_list[randomNumber];
            FOS.classList.remove('pre-animation');
        }, 500)
        
        used_list.push(randomNumber);

}




function nextQuestion() {
    button = document.getElementsByClassName("next-btn");
    var timeElapsed = Date.now() - startTime;
    console.log(timeElapsed)

    if (timeElapsed < 300000 && sweet_used.length !== sweet.length) {
        return inner_helper(sweet, sweet_used)

    } else if (timeElapsed < 600000 && sour_used.length !== sour.length) {
        return inner_helper(sour, sour_used)
    
    } else if (timeElapsed < 900000 && storytime_used.length != storytime.length) {
        return inner_helper(storytime, storytime_used)
        
    } else if (timeElapsed < 1200000 && salty_used.length !== salty.length) {
        return inner_helper(salty, salty_used)

    } else if (timeElapsed < 1500000 && smoky_used.length !== smoky.length) {
        return inner_helper(smoky, smoky_used)

    } else if (timeElapsed < 1800000 && spicy_used.length !== spicy.length) {
        return inner_helper(spicy, spicy_used)

    } else if (timeElapsed < 2100000 && umami_used.length !== umami.length) {
        return inner_helper(umami, umami_used)
    
    } else {
        document.getElementById('question').innerHTML = "Congrats, now stare into each other's eyes";
        button[0].parentNode.removeChild(button[0]);
    }
}
document.addEventListener("keydown", nextQuestion, false);