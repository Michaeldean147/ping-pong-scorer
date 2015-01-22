describe('ping ponger', function() {
  beforeEach(function() {
    var container = document.querySelector("#jasmine_content");
    init(container);
  });

  afterEach(function() {
    var container = document.querySelector("#jasmine_content");
    container.innerHTML = "";
  });

  it('increments the score when the button is clicked', function() {

    var scoreNode = document.querySelector('#score1');
    var buttonNode = document.querySelector('#player1');

    expect(scoreNode.innerText).toEqual('0');

    buttonNode.click();

    expect(scoreNode.innerText).toEqual('1');
  });

  it('increments player 2 score when player 2 button is clicked', function() {
    var scoreNode2 = document.querySelector('#score2');
    var buttonNode2 = document.querySelector('#player2');

    expect(scoreNode2.innerText).toEqual('0');

    buttonNode2.click();

    expect(scoreNode2.innerText).toEqual('1');
  })

  it('displays "you win" when player accumulates 21 points', function() {
    var scoreNode = document.querySelector('#score1');
    var buttonNode = document.querySelector('#player1');
    scoreNode.innerText = 20;
    buttonNode.click();

    expect(scoreNode.innerText).toEqual('You Win');
  })

  it()

});
