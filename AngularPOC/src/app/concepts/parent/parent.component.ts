import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  user = {
    name : 'Pavithra',
    age : 25
  }
receiveNotification(eMsg:string){
  alert('msg from child:'+ eMsg);
}
}
