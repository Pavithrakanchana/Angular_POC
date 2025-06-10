import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isInputNeeded:boolean = true;
  products:any = ["Iphone 14", "Samsung A51"];
  isActive:boolean = true;
  isHighlighted:boolean = true;
  isItalic:boolean = true;
  name : string = '';

}
