/*Quiz*/

// globale variabler - synlige for hele skriptet
	var questions, score, feedback, button;

    button = document.getElementById('start');
	button.addEventListener('click', runQuiz);

    feedback = document.getElementById('result');

    // 2-dimensionel array
	questions = [
            ['Hvor varm var den varmeste sommer i Danmark? Rundet ned.', 36], // questions[0]
            ['Hvad var gennemsnits temperaturen i Danmarks sommer 2019? Rundet ned.', 16],
            ['Hvor kold var den koldeste sommer i Danmark? Rundet ned.', 12],
            ['Hvilket år var den varmeste sommer i Danmark?', 1874]
                ];

    // console.log(questions[0][0]); udgiver How many moons does Earth have? i konsolen.

	function runQuiz(){
        score = 0; // hver gang quizzen starter, sætter vi score tilbage til 0!
        // loop igennem array questions
        for(var i=0; i<questions.length; i++){
            askQuestion(questions[i]); // iterationer med kald til funktionen med parameter variablen i
        };
        giveFeedback(); // kalder funktionen feedback, når quizzet er afsluttet
    }

	function askQuestion(array){ // funktion med argument
        //console.log(array[1]);
        // lokal variable med nøgleord let
        let answer = parseInt(prompt(array[0],'')); //skaber en prompt dialog med mulighed for bruger input
        // parseInt forvandler en string til et helt nummer (integer)
        if(answer === array[1]){ // rigtige svar
                alert('Korrekt!');
                score++;
           } else { // forkert svar
               alert('Desvære, svaret er ' + array[1])
           }
    }

	function giveFeedback(){ // funktionen afslutter
        feedback.innerHTML = 'Du fik ' + score + ' ud af ' + questions.length + ' spørgsmål rigtige!';
        button.innerHTML = ' Tag quizzen igen!';
    }





/* kontaktformular */




function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Navn skal være udfyldt";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email skal være udfyldt";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Emne skal udfyldes";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Din besked skal udfyldes";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
}

document.getElementById('status').innerHTML = "Sending...";
formData = {
'name'     : $('input[name=name]').val(),
'email'    : $('input[name=email]').val(),
'subject'  : $('input[name=subject]').val(),
'message'  : $('textarea[name=message]').val()
};


$.ajax({
url : "mail.php",
type: "POST",
data : formData,
success: function(data, textStatus, jqXHR)
{

$('#status').text(data.message);
if (data.code) //If mail was sent successfully, reset the form.
$('#contact-form').closest('form').find("input[type=text], textarea").val("");
},
error: function (jqXHR, textStatus, errorThrown)
{
$('#status').text(jqXHR);
}
});
