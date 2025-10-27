import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pf',
  standalone: false,
  templateUrl: './cadastro-pf.html',
  styleUrls: ['./cadastro-pf.css']

})
export class CadastroPF {

  // Injeção do FormBuilder para criar o formulário reativo
  form: FormGroup;

  // Variável para controlar a visibilidade da senha
  showPassword = false;
  showConfirmPassword = false;

  // O construtor para injetar serviços e inicializar o formulário
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      whatsapp: ['', Validators.required],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulário enviado com sucesso!', this.form.value);
      // Aqui você adicionaria a lógica para enviar os dados ao back-end
    }
  }

  // Lógica para alternar a visibilidade
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

}
