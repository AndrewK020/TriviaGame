var questionDiv = $("#question");
var answerDivArr = [
    $("#q1"),
    $("#q2"),
    $("#q3"),
    $("#q4")
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
        questions: "Who was the enemy of Rome during the Punic Wars?",
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


});

function gameStart() {
    questions = shuffle(questions);
    roundStart(questions[0]);
    
}

function roundStart(roundObject) {
    $(questionDiv).text(roundObject.question);

    for(let i = 0; i < roundObject.answers.length; i++){
        $(answerDivArr[i]).text(roundObject.answers[i]);
    }
}