var questionDiv = $("#question");
var answerDivArr = [
    $("#questionCard1"),
    $("#questionCard2"),
    $("#questionCard3"),
    $("#questionCard4")
]


let questions = [
    {
        question: "Who founded the city of Rome in 753BC?",
        correctAnswer: "Romulus",
        answers: [
            "Remus",
            "Caesar",
            "Agustus",
            "Romulus"
        ]
    },
    {
        question: "Which modern day country was not included in the Roman Empire at the Empire's peak?",
        correctAnswer: "Denmark",
        answers: [
            "Spain",
            "England",
            "Tunisia",
            "Denmark",
        ]
    },
    {
        question: "What was the Ancient Roman calendar that was used up until 1582?",
        correctAnswer: "Julian Calendar",
        answers: [
            "Julian Calendar",
            "Agustine Calendar",
            "Gregorian Calendar",
            "Caesararian Calendar"
        ]
    },
    {
        question: "Who was the first Roman Emperor?",
        correctAnswer: "Agustus",
        answers: [
            "Julius Caesar",
            "Tiberius",
            "Agustus",
            "Marcus Aurelius"
        ]
    },
    {
        question: "Who was the first Roman Emperor to legalize Christianity in the Empire?",
        correctAnswer: "Constantine I",
        answers: [
            "Julius Caesar",
            "Constantine I",
            "Trajan",
            "Theodosius I"
        ]
    },
    {
        question: "Who was the enemy of Rome during the Punic Wars?",
        correctAnswer: "Carthage",
        answers: [
            "Greece",
            "Persia",
            "Carthage",
            "Gaul"
        ]
    },
    {
        question: "What is the name of the famous Roman amphitheatre where gladiatorial contests and public spectacles such as mock sea battles were held?",
        correctAnswer: "Colosseum",
        answers: [
            "Colosseum",
            "Verona Arena",
            "Pompeii Spectacula",
            "Epidaurus"
        ]
    }

];

const origionalQuestions = questions;
const origionalState = $('#page').clone();

let score = {
    correct: 0,
    incorrect: 0
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}



$(document).ready(function() {
    
    $('#startP').on('click',function() {
        $('#start').remove();
        $('#main').css('display', 'block');
        gameStart();
    });

    $(document).on("click", '#next', function(){
        nextRound(questions[0]);
    });
    $(document).on("click", "#reset", function() {
        resetGame();
    });

});

function gameStart() {
    questions = shuffle(questions);
    shuffle(questions[0].answers);
    roundStart(questions[0]);
}


function roundStart(roundObject) {
  
    $(questionDiv).text(roundObject.question);

    for(let i = 0; i < roundObject.answers.length; i++){
        $(answerDivArr[i]).find('p').text(roundObject.answers[i]);
    }

    $("#questionCard1").on("click", function(){

        if ($(this).find('p').text() === roundObject.correctAnswer) {
            $(this).css("background-color","lightgreen");
            $(this).css("color","white");
            score.correct++;
        }
        else {
            $(this).css("background-color","red");
            $(this).css("color","white");
            score.incorrect++;
        }
        removeClick();
        addBtn();
    });
    $("#questionCard2").on("click", function(){

        if ($(this).find('p').text() === roundObject.correctAnswer) {
            $(this).css("background-color","lightgreen");
            $(this).css("color","white");
            score.correct++;
        }
        else {
            $(this).css("background-color","red");
            $(this).css("color","white");
            score.incorrect++;
        }
        removeClick();
        addBtn();
    });
    $("#questionCard3").on("click", function(){

        if ($(this).find('p').text() === roundObject.correctAnswer) {
            $(this).css("background-color","lightgreen");
            $(this).css("color","white");
            score.correct++;
        }
        else {
            $(this).css("background-color","red");
            $(this).css("color","white");
            score.incorrect++;
        }
        removeClick();
        addBtn();
    });
    $("#questionCard4").on("click", function(){

        if ($(this).find('p').text() === roundObject.correctAnswer) {
            $(this).css("background-color","lightgreen");
            $(this).css("color","white");
            score.correct++;
        }
        else {
            $(this).css("background-color","red");
            $(this).css("color","white");
            score.correct++;
        }
        removeClick();
        addBtn();
    });

}


function addBtn() {
    var btnDiv = $('<div class="container" id="nextRoundContainer"></div>')
    var nextBtn = $('<button type="button" class="btn btn-danger" id="next" >Next Round</button>');

    $('#main').append(btnDiv);
    $('#nextRoundContainer').append(nextBtn);
}

function removeClick() {
    answerDivArr.forEach(function(element) {
        $(element).off('click');
    })
}


function nextRound(roundObject) {

    //remove last round
    let index = questions.indexOf(roundObject);
    questions.splice(index, 1);
    //remove next round button
    $("#next").remove();
    
    answerDivArr.forEach(function(element){
        $(element).css("background-color", "wheat");
        $(element).css("color", "black");
    });

    if(questions.length > 0) {
        gameStart();
    }
    else {
        endGame();
    }

}

function endGame() {
    $(questionDiv).empty();

    answerDivArr.forEach(function(element){
        $(element).remove();
    });
    let scoreDiv = $('<div class="container"></div>')
    let correctP = $('<p>').text("Correct Answers: " + score.correct);
    let incorrectP = $('<p>').text("Incorrect Answers: " + score.incorrect);
    let resetBtn = $('<button type="button" class="btn btn-primary btn-lg" id="reset" >Play Again!</button>');

    $(scoreDiv).append(correctP);
    $(scoreDiv).append(incorrectP);

    $(questionDiv).append(scoreDiv);
    $('#main').append(resetBtn);
}

function resetGame() {
   // $('#page').html(origionalState);
    document.location.reload(true);
    questions = origionalQuestions;
    score.correct = 0;
    score.incorrect =0;
}