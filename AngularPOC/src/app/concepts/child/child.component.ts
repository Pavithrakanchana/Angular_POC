import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() userData : any;
   log: string = '';
  @Output() notifyParent : EventEmitter<any>= new EventEmitter<any>();
   //childToParent:boolean = false;

  ngOnChanges(changes: any ) {
    if (changes['value']) {
      this.log += 'ngOnChanges called, ';
    }
  }
ngOnInit(){
  if(this.userData === ""){
    console.log('No data found');
    console.log(this.userData);

  }
}
sendNotification(){
  //this.childToParent = true;
  const msg = 'Hi Parent, Got your msg';
  this.notifyParent.emit(msg);
}

}
