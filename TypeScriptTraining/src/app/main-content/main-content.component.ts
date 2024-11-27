import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, throttle } from 'rxjs';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit{

  fruit = '';
  fruitList = ['Bannana'];

  constructor() {
    // this.fruit = this.fruitList.pop(); // wird als fehler gezeigt, da pop auch als undefined steht , da array auch leer sein könnte
    
    let banana = this.fruitList.pop()   // hier kein fehler , da man durch die if abfrage mit undefined nicht zum pop kommt!
    if (banana != undefined) {
      this.fruit = banana;
    }
  }

  // RXJS ---- here Train /
  timer = new BehaviorSubject<number>(0);

  ngOnInit(): void {  // laden beim aufrufen der Seite --> implent OnInit bei class nicht vergessen!

    this.timer
    .pipe(throttle( val => interval(2000)))        
    .subscribe( (timePassed) => {console.log(timePassed)} ); // logt die Zeit aus // .pipe(throttle( val => interval(2000))) setzt "eine" Ausszeit bzw lässt nur alle 2 sec einen wert durch , zählt aber im hintergrund weiter

    // this.timer.next(5);
    // this.timer.next(10);

     setInterval(() => {
      let newValue = this.timer.value +1000;
      this.timer.next(newValue);
     },1000)  // aktualisiert jede sekunde den subscribe()

  }

  
}