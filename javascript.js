var sweet = [
    "Would you like to be famous? In what way?",
    "What's your favourite way to waste time?",
    "What would constitute a 'perfect' day for you?",
    "When did you last sing to yourself? To someone else?",
    "If you were able to live to the age of 90 and retain either the mind or body of a 30-year old, which would you want?"
]

var sour =  [
    "Take four minutes and tell your partner your life story in as much detail as possible.",
    "For what in your life do you feel most grateful?",
    "What does your ideal life look like?",
    "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
    "Do you have a secret hunch about how you will die?",
    "What is the greatest accomplishment of your life?"

]
var salty =  [
    "What has been your greatest challenge, and how did you overcome it?",
    "What is your most terrible memory?",
    "Would you rather be crazy rich, or deeply in love?",
    "How do you feel about your relationship with your mother?",
    "What's one thing that you would change on yourself if you could?",
    "What roles do love and affection play in your life?"
]

var savory = [
    "What Has Been Your Biggest Challenge In Life, And How Did You Overcome It?",
    "What is your most terrible memory?",
    "Would You Rather Be Crazy Rich, Or Deeply In Love?",
    "How do you feel about your relationship with your mother?",
    "What's one thing that you would change on yourself if you could?",
    "What roles do love and affection play in your life?"
]

var smoky = [
    "What, if anything, is too serious to be joked about?",
    "Of all the people in your family, whose death would you find most disturbing? Why?",
    "Is love a choice? Why?",
    "Would you choose a wild, hot relationship or a calm and stable one?",
    "If you were to die right now, what would you most regret not having told someone? Why haven't you told them yet?",
    "If heaven is real and you died tomorrow, would you get in?"
]

var spicy = [
    "If a crystal ball could tell you the truth about anything, what would you want to know?",
    "If you knew that in one year you would die, would you change anything about the way you are now living? Why?",
    "What did your past relationship teach you?",
    "Why do you think you're still single?",
    "If you were going to become a close friend with your partner, please share what would be important for him or her to know."
]

var umami = [
    "Share a personal problem and ask your partner's advice on how he or she might handle it."
]


var sweet_used = [];
var sour_used = [];
var salty_used = [];
var savory_used = [];
var smoky_used = [];
var spicy_used = [];
var umami_used = [];

var startTime = Date.now();
console.log(startTime);

function inner_helper(questions_list, used_list) {
    randomNumber = Math.floor(Math.random() * (questions_list.length))
        while (used_list.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * (questions_list.length))
        }
        document.getElementById('question').innerHTML = questions_list[randomNumber];
        used_list.push(randomNumber);

}

function nextQuestion() {
    var timeElapsed = Date.now() - startTime;
    console.log(timeElapsed)

    if (timeElapsed < 10000 && sweet_used.length !== sweet.length) {
        return inner_helper(sweet, sweet_used)


    } else if (timeElapsed < 15000 && sour_used.length !== sour.length) {
        return inner_helper(sour, sour_used)
        
    } else if (timeElapsed < 25000 && salty_used.length !== salty.length) {
        return inner_helper(salty, salty_used)

    } else if (timeElapsed < 30000 && savory_used.length !== savory.length) {
        return inner_helper(savory, savory_used)

    } else if (timeElapsed < 35000 && smoky_used.length !== smoky.length) {
        return inner_helper(smoky, smoky_used)

    } else if (timeElapsed < 40000 && spicy_used.length !== spicy.length) {
        return inner_helper(spicy, spicy_used)

    } else if (timeElapsed < 45000 && umami_used.length !== umami.length) {
        return inner_helper(umami, umami_used)
    
    } else {
        document.getElementById('question').innerHTML = "Congrats, now stare into each other's eyes";
    }
    
document.addEventListener("keydown", nextQuestion, false);

