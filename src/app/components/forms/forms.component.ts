import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'user-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  contactForm: FormGroup;
  loading = false;
  showModal = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    
    
    setTimeout(() => {
      this.loading = false;
      this.showModal = true;

      
      this.contactForm.reset();
    }, 2000);
  }

  closeModal() {
    this.showModal = false;
  }
}
