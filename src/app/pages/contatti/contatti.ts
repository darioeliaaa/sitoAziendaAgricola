import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css'
})
export class Contatti {
  contattoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contattoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      messaggio: ['', Validators.required]
    });
  }

  inviaMessaggio() {
    if (this.contattoForm.valid) {
      console.log('Dati del form:', this.contattoForm.value);
      // Qui in futuro metterai la chiamata HTTP al backend
      alert('Messaggio pronto per essere inviato! (Guarda la console)');
      this.contattoForm.reset();
    } else {
      alert('Per favore, compila tutti i campi correttamente.');
    }
  }
}
