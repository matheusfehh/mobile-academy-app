import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //User
  userName = 'Leonardo Santos';
  userLevel = 'Nível Roxo';

  //Slides
  images = [
    '../../assets/img/hipertrofia.jpg',
    '../../assets/img/yoga.jpg',
    '../../assets/img/crossfit.jpg'
  ]

  constructor() {}

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

}
