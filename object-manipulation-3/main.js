console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = [];
var rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var points = [];

var players = [
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
  var index = points.indexOf(max);
  var lastIndex = points.lastIndexOf(max);
  if (lastIndex !== index) {
    console.log('There\'s a tie');
  } else {
    console.log('the winner is ' + players[index].name + ' with ' + max + ' points!');
  }
}

function play() {
  createDeck();
  deal();
  checkValues();
  winner();
}

play();
