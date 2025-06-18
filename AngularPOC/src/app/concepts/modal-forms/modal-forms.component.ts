import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-modal-forms',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './modal-forms.component.html',
  styleUrl: './modal-forms.component.css'
})
export class ModalFormsComponent {
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    state:'',
    district:'',
    zipcode:'',
    country:''
  };

  submitForm(form: any): void {
    
      console.log('Form data:', this.userDetails);
  }
}
