import React from 'react';
const list = [
  {
    id: 0,
    url: 'https://i.insider.com/5bdc8cd3da27f86e7b74dc98?width=600&format=jpeg&auto=webp'
  },
  {
    id: 1,
    url: 'https://www.gannett-cdn.com/presto/2021/06/16/USAT/005750ac-2e30-430d-ad8b-d1bce562cb77-NintendoSwitch_SuperSmashBrosUltimate_CharacterArt_06.png?crop=3384,4155,x615,y156'
  },
  {
    id: 2,
    url: 'https://i.insider.com/5bdc869a110d4c6f5d30624a?width=1000&format=jpeg&auto=webp'
  },
  {
    id: 3,
    url: 'https://i.insider.com/5bdc87eee4218a686f1f7901?width=1000&format=jpeg&auto=webp'
  },
  {
    id: 4,
    url: 'https://www.pinclipart.com/picdir/middle/455-4552475_super-smash-bros-ultimate-characters-clipart.png'
  }
];

let timer;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 0
    };
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.bulletClick = this.bulletClick.bind(this);
  }

  clicked() {
    clearInterval(timer);
  }

  bulletClick(event) {
    this.clicked();
    const selectedImage = this.state.image;
    this.setState({
      image: selectedImage
    });
  }

  nextImage() {
    this.clicked();
    let next = this.state.image;
    next++;
    if (next === list.length) {
      next = 0;
    }
    this.setState({
      image: next
    });
  }

  previousImage() {
    this.clicked();
    let prev = this.state.image;
    prev--;
    if (prev < 0) {
      prev = list.length - 1;
    }
    this.setState({
      image: prev
    });
  }

  render() {
    timer = setInterval(this.nextImage, 3000);
    const currentImageId = this.state.image;
    const images = list.map(entry => {
      if (entry.id === currentImageId) {
        return (
          <img className="image" key={entry.id} imageid={entry.id} src={entry.url}></img>
        );
      } else {
        return (
        <img className="image hidden" key={entry.id} imageid={entry.id} src={entry.url}></img>
        );
      }
    });
    const bulletList = list.map(entry => {
      if (entry.id === currentImageId) {
        return (
          <i onClick={this.bulletClick} className="fa-solid fa-circle margin-side" key={entry.id}></i>
        );
      } else {
        return (
          <i onClick={this.bulletClick} className="fa-regular fa-circle margin-side" key={entry.id} id={entry.id}></i>
        );
      }
    });
    return (
      <div className="container">
        <div className="carousel-container">
          <i onClick={this.previousImage} className="fa-solid fa-angle-left fa-2xl"></i>
          {images}
          <i onClick={this.nextImage} className="fa-solid fa-angle-right fa-2xl"></i>
        </div>
        <div>
          <div className="bullet-container">
            {bulletList}
          </div>
        </div>
      </div>
    );
  }
}
