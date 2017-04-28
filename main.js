$('#rock').click( function() {
  var result = compare('rock', compAnswer());
  $('#thing').html(result);
});

$('#paper').click(function() {
  var result = compare('paper', compAnswer());
  $('#thing').html(result);
});

$('#scissors').click( function() {
  var result = compare('scissors', compAnswer());
  $('#thing').html(result);
});


  var compAnswer = function () {
    var random = Math.floor(Math.random() * 3) + 1;
    console.log(random)
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
          return "This is a Tie"

            } else if (computer === "paper") {
              return "Paper cover rock, Computer Wins!"

            } else if (computer === "scissors") {
              return "Rock Crushes Scissors!"
            }  // this is the end of paper condidition

        } else if (user === "paper") {
                   if (computer === "paper")
                     return "THis is a tie"
             } else if ( computer === "rock") {
               return "Paper covers rock, User wins!"

             } else if (computer === "scissors") {
               return "Scissors slice paper, computer wins."
             }
          else if (user === "scissors") {
               if (computer === "scissors") {
                   return "IT's a tie!"

                   } else if (computer === "rock") {
                     return "Rock crushes, computer wins"

                   } else if (computer === "paper") {
                   return "scissors cuts paper, user wins!"

          } else {
           return "YOU BROKE IT"
          }
       }
  }
