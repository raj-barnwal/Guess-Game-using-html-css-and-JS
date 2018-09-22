function check_correct(){
  var val = num.value;
  guessNumber(val);  
}

var num=document.getElementById("guess_num");
num.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
      guessNumber(this.value);
  }
});

function guessNumber(_input) {
  var number = parseInt(_input, 10);
  var gnum = Math.ceil(Math.random() * 10);
  if(gnum===number){
    document.getElementById('game_result').innerHTML = "Congratulations Good Guess : " + number;
  }
  else{
    document.getElementById('game_result').innerHTML = "Oooo.....Try Again: " + number;
  }
  num.value="";
  return _input;
}
