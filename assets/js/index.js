// Used to get the data
$.ajax({
    url: "https://opentdb.com/api.php?amount=10&type=multiple",
    type: 'GET',
    dataType: 'json', // added data type
        success: function(response) {
           setupQuiz(response.results);
        }
    });

// Taken from stack Overflow. Function that randomize the order of the questions.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setupQuiz(data){

    var current_question_id = 0
    setupNewQuestion(data[current_question_id])

    $("button").click(function() {
            current_question_id++
            setupNewQuestion(data[current_question_id])
    });
    
    console.log(data)            
    }

function setupNewQuestion(current){
    $("#question").text(current.question)

    answers = [current.correct_answer]
                .concat(current.incorrect_answers)
                    .sort((a, b) => 0.5 - Math.random());
         var i = 1;
         answers.forEach(function (answer) {
             $("#answer_" + i).text(answer)  
             i++
         })
          
     }
