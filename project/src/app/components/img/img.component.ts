import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  imagen: string = 'valor init';

  constructor() {

  }

  ngOnInit(): void {

  }
}
