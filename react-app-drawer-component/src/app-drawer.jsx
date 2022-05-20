import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerActive: false
    };
    this.drawerToggle = this.drawerToggle.bind(this);
  }

  drawerToggle() {
    const toggle = !this.state.drawerActive;
    this.setState({ drawerActive: toggle });
  }

  render() {
    let hidden;
    let menu;
    if (this.state.drawerActive) {
      hidden = '';
      menu = 'hidden';
    } else {
      hidden = 'hidden';
      menu = '';
    }
    return (
      <div>
        <i onClick={this.drawerToggle} className={`fa-solid fa-bars fa-2xl menu-button ${menu}`}></i>
        <div className={hidden}>
          <div className="flex">
            <div className="drawer">
              <h1>Shrek Universe</h1>
                <p className="drawer-content" onClick={this.drawerToggle}>Shrek</p>
                <p className="drawer-content" onClick={this.drawerToggle}>Shrek 4-D</p>
                <p className="drawer-content" onClick={this.drawerToggle}>Shrek 2</p>
                <p className="drawer-content" onClick={this.drawerToggle}>Far Far Away Idol</p>
                <p className="drawer-content" onClick={this.drawerToggle}>Shrek the Third</p>
                <p className="drawer-content" onClick={this.drawerToggle}>Shrek Forever After</p>
                <p className="drawer-content" onClick={this.drawerToggle}>Scared Shrekless</p>
                <p className="drawer-content" onClick={this.drawerToggle}>Shrek 5</p>
                <p className="drawer-content" onClick={this.drawerToggle}>Puss in Boots</p>
            </div>
            <div onClick={this.drawerToggle} className="modal">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
