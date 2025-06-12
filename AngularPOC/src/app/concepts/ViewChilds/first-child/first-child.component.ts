import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SecondChildComponent } from '../second-child/second-child.component';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [SecondChildComponent],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.css',
})
export class FirstChildComponent {
  @ViewChild('myButton') myValue!: ElementRef;
  @ViewChildren(SecondChildComponent) value!: QueryList<SecondChildComponent>;

  
  ngAfterViewInit() {
    // setInterval(() => {
    //   this.value.today = new Date();
    // }, 1000);
    //console.log(this.myValue);
      //this.value.today = new Date();
         console.log(this.value.toArray());
  }
}
