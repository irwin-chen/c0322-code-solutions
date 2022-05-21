import React from 'react';

const shrekt = [
  {
    id: 1,
    title: 'Shrek (2001)',
    description: 'Once upon a time there was a lovely princess. But she had an enchantment upon her of a fearful sort, which could only be broken by Love\'s first kiss. She was locked away in a castle guarded by a terrible fire breathing dragon. Many brave knights had attempted to free her from this dreadful prison, but none prevailed. She waited in the dragon\'s keep in the highest room of the tallest tower for her true love and true love\'s first kiss. Like that\'s ever going to happen. '
  },
  {
    id: 2,
    title: 'Shrek 2 (2004)',
    description: 'I watched that scene, I Need a Hero recently. Jesus Christ, what perfection. I don\'t know what exactly it was, but that whole scene was like nothing I have ever seen in an movie before. It was far fetched but in a good way. The powerful voice of the Fairy Godmother, whenever she roars "Hit It!", the start of one of the best scenes ever to grace movies. The transitions between Shrek and the huge gingerbread making their way to the castle and the Fairy Godmother singing was perfectly paced. A massive party inside the castle meanwhile the guards are doing their jobs to take down a huge piece of dough, Mongo screaming like a fucking dinosaur when he gets hit and starts kicking the gumdrop button back to them. The whole scene was well paced. It was fast, but balanced everything well. Amazing every single time.'
  },
  {
    id: 3,
    title: 'Shrek the Third (2007)',
    description: 'The worst movie ever is Shrek 3. A cinematic disaster of a film. Instead of this very movie carrying on the legacies of shrek 1 and shrek 2 it absolutely ruined the franchise. Why do you think shrek five has only been announced recently? That’s right, cause shrek 3 was sooo bad that dreamworld knew that they could not dig themselves out of such a hole of shame from what they have done to the beautiful ogre they have created.i mean, it’s not just shrek that was a bad character. Fiona sucked, donkey sucked, there were no new villains which sucked, and who the hell remembered about any of the plot of shrek 3. That’s right, NOBODY. The only half decent part about it is that donkey fucked a dragon, which makes ZERO SENSE BY THE WAY. I mean how could donkeys tiny penis be able to fit in the MONSTER vagina that the dragon has. She would literally eat donkey alive using it! Anyways... this movie makes little to now sense and I have no idea how dreamworld could of gotten sooo bad on a movie that people adored because of the first and second part. SHREK 3 WAS THE WORST FILM RELEASED TO DATE. THE END.'
  }
];

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      entry: null
    };
    this.clickDrawer = this.clickDrawer.bind(this);
  }

  clickDrawer(event) {
    const entryId = event.target.getAttribute('dataentryid');
    // if (event.target.getAttribute)
    this.setState({
      active: !this.state.active,
      entry: entryId
    });
  }

  render() {
    const target = Number(this.state.entry);
    const toggle = this.state.active;
    const entries = shrekt.map(entry => {
      if (entry.id === target && toggle) {
        return (
          <div className="tab" key={entry.id} dataentryid={entry.id} onClick={this.clickDrawer}>
            {entry.title}
            <div className="dropdown">
              {entry.description}
            </div>
          </div>
        )
      } else {
        return (
          <div className="tab" key={entry.id} dataentryid={entry.id} onClick={this.clickDrawer}>
            {entry.title}
            <div className="dropdown hidden">
              {entry.description}
            </div>
          </div>
        )
      }
      return (
        <div className="container">
          {entries}
        </div>
      )
    }
  }
};
