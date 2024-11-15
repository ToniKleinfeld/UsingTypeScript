import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  fruit = '';
  fruitList = ['Bannana'];

  constructor() {
    // this.fruit = this.fruitList.pop(); // wird als fehler gezeigt, da pop auch als undefined steht , da array auch leer sein könnte
    
    let banana = this.fruitList.pop()   // hier kein fehler , da man durch die if abfrage mit undefined nicht zum pop kommt!
    if (banana != undefined) {
      this.fruit = banana;
    }
  }
}