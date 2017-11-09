import React, { Component } from 'react';
import logo from './logo.png';
import SubscribeForm from './Newsletter.js';
import 'font-awesome/css/font-awesome.css';
import './App.css';


const socialNetworks = [
  {id: 1, icon: "telegram", url: "https://t.me/vvinograd"},
  {id: 2, icon: "instagram", url: "https://www.instagram.com/vinogradco/"}
  //{id: 3, icon: "facebook-square" , url: "https://www.facebook.com"}
];

const listOfNetworks = socialNetworks.map((socialNetwork) =>
  <li key={socialNetwork.id}><a href={socialNetwork.url} target="_blank"><i className={"fa fa-" + socialNetwork.icon}></i></a></li>
);

const formProps = {
  action:
    "https://gmail.us6.list-manage.com/subscribe/post?u=3122191960b770be28eb0ac9c&amp;id=31de85dbe2"
};

const DefaultButton = (props) => (<button className="cta-button" onClick={props.onClick}>Узнай первым</button>);

function Vivino(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" className="vivino" {...props}>
      <metadata>
        {/*?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?*/}

          {/*?xpacket end="w"?*/}</metadata>
      <defs>
      </defs>
      <path d="M0.1,18.6c0-4.4,0-8.7,0-13.1c0-0.1,0-0.3,0-0.4c0.1-0.6,0.1-1.1,0.3-1.6c0.7-1.8,2-2.9,3.9-3.2C5.1,0.1,5.8,0,6.5,0
    		c0,0,0.1,0,0.1,0c3.6,0,7.1,0,10.7,0c0,0,0.1,0,0.1,0c0.5,0,1,0,1.5,0.1c0.6,0,1.1,0.1,1.6,0.3c1.8,0.7,2.9,2.1,3.2,4.1
    		C24,5.3,24,6.1,24,6.9c0,3.1,0,6.2,0,9.3c0,0.9,0,1.8-0.1,2.7c0,0.6-0.1,1.1-0.3,1.6c-0.8,2-2.3,3-4.4,3.3
    		c-0.5,0.1-1.1,0.1-1.7,0.1c0,0-0.1,0-0.1,0c-3.6,0-7.2,0-10.7,0c0,0-0.1,0-0.1,0c-0.7,0-1.3,0-2-0.1c-0.8-0.1-1.6-0.4-2.3-0.9
    		C1,22,0.3,20.7,0.1,19.2C0.1,19,0.1,18.8,0.1,18.6z M17.1,13.6c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5
    		c0,0.8,0.7,1.5,1.5,1.5C16.4,15.1,17.1,14.4,17.1,13.6z M13.9,18.1c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5
    		c-0.8,0-1.5,0.7-1.5,1.5C12.4,17.4,13,18.1,13.9,18.1z M12,9.1c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5
    		c-0.8,0-1.5,0.7-1.5,1.5C10.5,8.4,11.2,9.1,12,9.1z M12.3,4.7c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5
    		C13,3.2,12.3,3.9,12.3,4.7z M13.5,19.5c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5
    		C12.9,21,13.5,20.3,13.5,19.5z M7,13.6c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5C7.7,12.1,7,12.8,7,13.6
    		z M13.5,13.6c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5C12.9,15.1,13.5,14.4,13.5,13.6z M11.7,16.6
    		c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5C11.1,18.1,11.7,17.4,11.7,16.6z M13.8,12.2
    		c0.8,0,1.5-0.6,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5C12.4,11.5,13,12.2,13.8,12.2z M10.3,9.2
c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.6,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5C11.7,9.9,11.1,9.2,10.3,9.2z"/>
    </svg>
  );
}

const VivinoIcon = () => (<li><a href="https://www.vivino.com/users/vinograd.co" target="_blank"><Vivino /></a></li>);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleGetNotifiedClick = this.handleGetNotifiedClick.bind(this);
    this.state = {button: 0};
  }

  handleGetNotifiedClick () {
    this.setState({button: 1});
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" alt="vinograd logo" />
        {this.state.button === 0 && <DefaultButton onClick={this.handleGetNotifiedClick} />}
        {this.state.button === 1 && <SubscribeForm {...formProps} />}
        <ul className="social-networks">
          {listOfNetworks}
          <VivinoIcon />
        </ul>
      </div>
    );
  }
}

export default App;
