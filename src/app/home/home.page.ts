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
  //Subtitulos recebem variaveis dinamicas
  items = [
    { imageSrc: '../../assets/img/hipertrofia.jpg', title: 'LEVANTAMENTO DE PESO', subtitle: '' },
    { imageSrc: '../../assets/img/yoga.jpg', title: 'YOGA EXPRESS', subtitle: '' },
    { imageSrc: '../../assets/img/crossfit.jpg', title: 'CROSSFIT', subtitle: '' }
  ];

  constructor() {}

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

}
