

// computer chooses a word
var computer_word = "fifa";

var computer_array = computer_word.split("");



var fill_in_array = []

for (var i = 0; i < computer_array.length; i++) {
   fill_in_array.push("*");
}
var player_letter = prompt("chose a letter");


check_whole_word(player_letter);


  for (var i = 0; i < 9; i++) {
    check_whole_word(player_letter);
    if ((fill_in_array.join(""))===computer_word) {
        break;
      }
      // else if (fill_in_array !== computer_array) {
          player_letter = prompt("choose another letter, you have "+(10-(i+1))+" more tries!");
        // }
}

switch (true) {
  case i===9:
  alert("you losted! the word was "+computer_word);
    break;
  default:  alert("you won! the word was "+computer_word);
}





function check_whole_word(player_letter){
  for (var i = 0; i < computer_array.length; i++) {
    if (player_letter === computer_array[i]) {
      fill_in_array[i] = player_letter;
      console.log(fill_in_array);
    }
  }
}

console.log((fill_in_array.join()));




console.log(" the is the fillin array:");
console.log(fill_in_array);

console.log("bottom is comp array" );
console.log( computer_array);



// computer displays the spaces



// you have 10 trys to guess a guess the word
// if you guess a letter if in word display in it in its position if not dont displays



// if you know the word and type the rest of the missing letters
 // let player know he won if not lost
