import { Component } from '@angular/core';

import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg= 10;
  name = 'Kevin';
  age = 22;
  img = 'https://i.pinimg.com/564x/ca/18/26/ca1826f90cd5430344563ff4bf6010c7.jpg'
  btnDisable = true ;

  register = {
    name: '',
    email: '',
    password: '',
  }


  person = {
    name: 'Naomy',
    age: 29,
    avatar: 'https://i.pinimg.com/564x/5a/e2/da/5ae2dad5cc49cdbcc519a84d3a91b896.jpg'
  }

  names: string[]= ['Juancho', 'Ceci', 'Isidora'];
  newName = '';


  movies: string[]= ['Avatar 2', 'Sonic', 'Mario Bross'];
  newMovie = '';

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  products: Product[] = [
    {
      name : 'Pinky Pie',
      price: 35000,
      image: './assets/products/pinky pie.jpg',
      category: 'toys'
    },
    {
      name : 'Kriss Vector',
      price: 800000,
      image: './assets/products/kriss vector.jpg'
    },
    {
      name : 'Dibujo',
      price: 75000,
      image: './assets/products/dibujo.jpg'
    },
    {
      name : 'Car',
      price: 1505000,
      image: './assets/products/ford mustang.jpg'
    },
    {
      name : 'watermelon',
      price: 5000,
      image: './assets/products/watermelon.jpg'
    }

  ]



  toogleButton() {
    this.btnDisable = !this.btnDisable;
  }

  ageIncrease() {
    this.person.age += 1;
  }

  ageDecrease() {
    this.person.age -=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

/* AGREGAR UN NOMBRE AL ARRAY*/
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  addMovie(){
    this.movies.push(this.newMovie);
    this.newMovie = '';
  }

  deleteMovie(index: number){
    this.movies.splice(index, 1);
  }


  onRegister(){
    console.log(this.register);
  }
}
