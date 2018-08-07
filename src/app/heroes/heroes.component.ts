import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes = HEROES;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    //把从页面获取到的被点击的“hero”的值赋给了本class的selectedHero变量。
  }

  constructor() { }

  ngOnInit() {
  }

}
