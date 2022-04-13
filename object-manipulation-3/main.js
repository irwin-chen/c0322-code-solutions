console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = [];
var rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];

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
  console.log(deck);
}

function deal() {
  _.shuffle(deck);
  console.log('?');
}
