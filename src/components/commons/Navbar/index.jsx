import  React, { Component } from 'react';
import './style/style.css';

export default class Navbar extends Component {
  render(){
    return(
      <nav className = 'nav'>
      <ul className = 'navbar'>
          <li><a href="#" className = ' navbar_childres_1 '>ГЛАВНАЯ</a></li>
          <li><a href="#" className = ' navbar_childres '>БИО</a></li>
          <li><a href="#" className = ' navbar_childres '>МУЗЫКА</a></li>
          <li><a href="#" className = ' navbar_childres '>КОНЦЕРТЫ</a></li>
          <li><a href="#" className = ' navbar_childres '>ГАЛЕРЕЯ</a></li>
          <li><a href="#" className = ' navbar_childres '>ПРЕСС-КИТ</a></li>
          <li><a href="#" className = ' navbar_childres '>КОНТАКТЫ</a></li>
      </ul>
      </nav>
    )
  }
}
