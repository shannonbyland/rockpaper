
$('#rock').on('click', function() {
  var result = compare('rock', compAnswer());
  $('#thing').html(result);
});

$('#paper').on('click', function() {
  var result = compare('paper', compAnswer());
  $('#thing').html(result);
});

$('#scissors').on('click', function() {
  var result = compare('scissors', compAnswer());
  $('#thing').html(result);
});
  var compAnswer = function () {
    var random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
          return "rock"
        } else if (random === 2) {
          return "paper"
        } else {
          return "scissors"
        }
  }

  var compare = function (user, computer) {
    if (user === "rock") {
        if (computer === "rock") {
          return "Computer chose Rock, It's a Tie"

            } else if (computer === "paper") {
              compWin();
              return "Computer chose paper, Paper covers rock, Computer Wins!"
            } else if (computer === "scissors") {
              userWin();
              return "Computer chose scissors, Rock Crushes Scissors!"
            }  //This is the end of the user == rock condition

        } else if (user === "paper") {
      if (computer === "paper") {
        return "Computer chose paper, It's a tie"
      } else if (computer === "rock") {
        userWin();
        return "Computer chose Rock, Paper covers rock, You Win!"
      } else if (computer === "scissors") {
        compWin();
        return "Computer chose scissors, Scissors slice paper, Computer Wins!"
      }
    } //This is the end of the user == paper condition
          else if (user === "scissors") {
      if (computer === "scissors") {
        return "Computer chose Scissors, It's a tie!"
      } else if (computer === "rock") {
        compWin();
        return "Computer chose Rock, Rock crushes scissors, Computer Wins"
        } else if (computer === "paper") {
        userWin();
        return "Computer chose paper, Scissors cut paper, User Wins!"

          } else {
           return "YOU BROKE IT"
          }
       }
  }

function userWin () {
  var userScore = $('#usertally');
  var newPlayerScore = parseInt(userScore.text()) + 1;
  userScore.text(newPlayerScore);
}

function compWin () {
  var compScore = $('#comptally');
  var newCompScore = parseInt(compScore.text()) + 1;
  compScore.text(newCompScore)
}

$('#clearme').on('click', function () {
  $('#thing').html(" ");
});
