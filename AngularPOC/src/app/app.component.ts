import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./concepts/data-binding/data-binding.component";
import { DirectivesComponent } from "./concepts/directives/directives.component";
import { ParentComponent } from './concepts/parent/parent.component';
import { FirstChildComponent } from "./concepts/ViewChilds/first-child/first-child.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent, DirectivesComponent, ParentComponent, FirstChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPOC';
}
