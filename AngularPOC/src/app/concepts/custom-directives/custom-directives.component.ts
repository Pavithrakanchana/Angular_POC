import { Component } from '@angular/core';
import { AtmCardNumberDirective } from '../../Shared/atm-card-number.directive';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [ AtmCardNumberDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css'
})
export class CustomDirectivesComponent {

}
