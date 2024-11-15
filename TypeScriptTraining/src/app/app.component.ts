import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { Pkw } from './interfaces/pkw.interface';

// interface Pkw {                         // über dem component kann ein interface erstellt werden, was wie eine typ schablone für objekte verwendet werden kann   -- einfach hinter dem objektnamen :interfacename angeben.
//   readonly marke: string | number;
//   baujahr: number;
//   unfallwagen?: boolean;
// }     // kann auch komplett ausgelagert werden in --> interface --> pkw.interface.ts  , als export --> in import eintragen! siehe oben !
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TypeScriptTraining';


  /** Bekannte Typen */
  aString = 'ich bin ein String';
  aNumber = 124;
  aBoolean = true;

  /**Spezielle 'Bekannte' typen */
  aUndefined = undefined;
  aNull = null; 
  

// Es gibt noch bigInt und symbol , werden aber selten verwendet

// theAnyType = any ;  selten bis nie verwenden wenn möglich!  

theTypeless : undefined | string  ; // es kann mehr alsd ein typ vergeben werden , wie hier mit | oder , werden aber auch zum teil selbst erkannt, wenn nicht vergebeb! 

theArray: (number | string)[] = [1,'2'] // bei typvergabe die [] hinter den typ , somit bezug auf inhalt des arrays 
// für gemixte array müssen die typen zwischen eine () , hinter der klammer dan der bezug auf das array []
// wenn number[] | string[]  , dann ist das array entweder nur aus numbers oder strings!!+

noteType: 'trash'|'note' = 'trash';  // type ist jetzt 'trash' oder 'note' und wird als fehler angezeigt , wenn kein von beiden vorliegt.

theSecondArray: [string,number] = ['200',404];  // hineinschreiben der number in die [] setzt den string für jede einzelne positions fest

person: {                 // so wird in einem object die types festgelegt!
  readonly name: string;    // mit readonly kann dieser objektpunkt nicht überschrieben werden! Nur gelesen!
  alter: number | string;
  anwesend?: boolean;     // ? wenn ein punkt nicht umbedingt im objekt vorhanden sein muss
} = {
  name: 'toni',
  alter: 36,
}

pkw: Pkw = {
  marke: 'Volvo',
  baujahr: 1988,
}

constructor() {
  this.theTypeless = 'string';
  this.theArray;
  this.add(1,1);      // wenn hier jetzt ein string eingeführt wird erscheint eine fehler meldung! , da in der function number festgesetzt wurden!
  this.pkw.unfallwagen = true;  
}

add(a:number ,b:number):number {    // number nach der klammer definiert hier den return wert! nicht die variablen in der klammer
  return a + b;
}


}
