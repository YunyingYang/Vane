import { Component, OnInit,Input } from '@angular/core';
// 这就是你要对 HeroDetailComponent 类做的唯一(1/2)一项修改。 
// 没有其它属性，也没有展示逻辑。
// 这个组件所做的只是通过 hero 属性接收一个英雄对象，并显示它。
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  
  // 这就是你要对 HeroDetailComponent 类做的唯一(2/2)一项修改。 
  // 没有其它属性，也没有展示逻辑。
  // 这个组件所做的只是通过 hero 属性接收一个英雄对象，并显示它。

  constructor() { }

  ngOnInit() {
  }

}
