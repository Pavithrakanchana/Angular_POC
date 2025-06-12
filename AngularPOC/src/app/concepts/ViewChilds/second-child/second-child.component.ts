import { DatePipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.css'
})
export class SecondChildComponent {
today: Date = new Date();
}
