console.log('Lodash is loaded:', typeof _ !== 'undefined');

var $button = document.querySelector('button');
var deck = null;
var rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var points = null;
var players = null;

function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

function createDeck() {
  for (var s = 0; s < suit.length; s++) {
    for (var r = 0; r < rank.length; r++) {
      var newCard = new Card(rank[r], suit[s]);
      deck.push(newCard);
    }
  }
  deck = _.shuffle(deck);
}

function deal() {
  for (var i = 0; i < players.length; i++) {
    while (players[i].hand.length < 2) {
      players[i].hand.push(deck.shift());
    }
  }
}

function checkValues() {
  for (var i = 0; i < players.length; i++) {
    var sum = 0;
    for (var j = 0; j < players[i].hand.length; j++) {
      var holder = players[i].hand[j].rank;
      if (holder === 'ace') {
        sum += 11;
      } else if (holder === 'jack' || holder === 'queen' || holder === 'king') {
        sum += 10;
      } else {
        sum += holder;
      }

    }
    points.push(sum);
  }
}

function winner() {
  var max = _.max(points);
  var holder = [];
  for (var i = 0; i < points.length; i++) {
    if (points[i] === max) {
      holder.push(players.slice(i, i + 1));
    }
  }
  players = holder.flat();
  if (players.length > 1) {
    var tie = '';
    for (i = 0; i < players.length; i++) {
      tie += players[i].name + ' ';
    }
    tie = tie.trim();
    console.log('There\'s a tie between ' + tie.replaceAll(' ', ', ') + ' with ' + max + ' points!');
    points = [];

    for (i = 0; i < players.length; i++) {
      if (players[i].hand !== 0) {
        players[i].hand = [];
      }
    }
    play();
  } else {
    console.log('The winner is ' + players[0].name + ' with ' + max + ' points!');
  }
}

function play() {
  if (deck.length < players.length * 2) {
    deck = [];
    createDeck();
  }
  deal();
  checkValues();
  winner();
}

$button.addEventListener('click', newGame);

function newGame() {
  players = [
    {
      name: 'Jimmy',
      hand: []
    },
    {
      name: 'Jamie',
      hand: []
    },
    {
      name: 'Jango',
      hand: []
    },
    {
      name: 'Jorothy',
      hand: []
    }
  ];
  deck = [];
  points = [];
  play();
}
