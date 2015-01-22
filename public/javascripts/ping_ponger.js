var listener = new window.keypress.Listener();

function init(containerNode) {
  var score1Node = createScore('score1');
  var score2Node = createScore('score2');

  containerNode.appendChild(score1Node);
  containerNode.appendChild(score2Node);

  containerNode.appendChild(createButton('player1', 'Add to player 1 score', score1Node));
  containerNode.appendChild(createButton('player2', 'Add to player 2 score', score2Node));

  var scoreNode1 = document.querySelector('#score1');
  var scoreNode2 = document.querySelector('#score2');
  listener.simple_combo("left", function(){increaseScore(scoreNode1)});
  listener.simple_combo("right", function(){increaseScore(scoreNode2)});
  listener.simple_combo("shift left", function(){decreaseScore(scoreNode1)});
  listener.simple_combo("shift right", function(){decreaseScore(scoreNode2)});

}

function createButton(id, text, scoreNode){
  var button = document.createElement("BUTTON");
  button.id = id;
  button.innerText = text;
  button.addEventListener('click', function() {
    scoreNode.innerText = parseInt(scoreNode.innerText) + 1;
    if (scoreNode.innerText === "21"){
      scoreNode.innerText = "You Win"
    }
  })
  return(button);
}

function createScore(id) {
  var score = document.createElement("h2");
  score.innerText = 0;
  score.id = id;

  return(score);
}

function increaseScore(scoreNode){
  scoreNode.innerText = parseInt(scoreNode.innerText) + 1;
  if (scoreNode.innerText === "21"){
    scoreNode.innerText = "You Win"
  }
}

function decreaseScore(scoreNode){
  scoreNode.innerText = parseInt(scoreNode.innerText) - 2;
  if (scoreNode.innerText === "21"){
    scoreNode.innerText = "You Win"
  }
}
