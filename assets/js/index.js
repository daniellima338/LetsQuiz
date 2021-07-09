// Used to get the data
$.ajax({
    url: "https://opentdb.com/api.php?amount=20&category=9&type=multiple",
    type: 'GET',
    success: function(response) {
        setupQuiz(response.results);
    }
});

// Used to set up a new question everytime a answer is clicked
function setupQuiz(data){

    var current_question_id = 0
    setupAnswers(data[current_question_id])

    $("button").click(function() {
        current_question_id++;
        setupAnswers(data[current_question_id])
    });
    console.log(data);       
}

// Used to recycle the correct answer everytime. CANT GET THE ANSWERS TO DISPLAY
function setupAnswers(results){
    $("#question").text(results.question)

     answers = [results.correct_answer]
                     .concat(results.incorrect_answers)
                     .sort((a, b) => 0.5 - Math.random());
     
     var i = 0;
     answers.forEach(function (answer) {
         $("#answer_" + i).text(answer)  
         i++
     })
      
 }