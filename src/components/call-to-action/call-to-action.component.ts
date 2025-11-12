import { Component, ChangeDetectionStrategy, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Usa ReactiveFormsModule
  templateUrl: './call-to-action.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallToActionComponent implements OnInit {
  private fb = inject(FormBuilder);
  demoForm!: FormGroup;
  showConfirmationModal = signal(false);

  ngOnInit() {
    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)]], // Exemplo: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
      message: [''],
    });
  }

  openConfirmationModal() {
    if (this.demoForm.valid) {
      this.showConfirmationModal.set(true);
    } else {
      // Mark all fields as touched to display validation messages
      this.demoForm.markAllAsTouched();
      alert('Por favor, preencha todos os campos obrigatórios e corrija os erros.');
    }
  }

  async confirmSubmission() {
    const formData = this.demoForm.value;
    console.log('Formulário enviado:', formData);

    // Simulate an async operation (e.g., API call)
    await new Promise(resolve => setTimeout(resolve, 1000));

    alert(`Obrigado, ${formData.name}! Sua solicitação foi recebida. Entraremos em contato em breve.`);

    // Clear form
    this.demoForm.reset();
    this.showConfirmationModal.set(false); // Close the modal
  }

  cancelSubmission() {
    this.showConfirmationModal.set(false); // Close the modal
  }
}