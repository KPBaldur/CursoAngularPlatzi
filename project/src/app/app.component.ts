import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Kevin';
  age = 22;
  img = 'https://i.pinimg.com/564x/ca/18/26/ca1826f90cd5430344563ff4bf6010c7.jpg'
  btnDisable = true ;
  person = {
    name: 'Naomy',
    age: 29,
    avatar: 'https://i.pinimg.com/564x/5a/e2/da/5ae2dad5cc49cdbcc519a84d3a91b896.jpg'
  }

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
}
