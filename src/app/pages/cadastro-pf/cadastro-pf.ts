import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from './service';

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
  constructor(private fb: FormBuilder, private service: Service) {
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
      this.service.registerIndividual(this.form.value).subscribe({ // Chama o serviço para registrar a empresa
        next: (response) => {
          alert('Cadastro realizado com sucesso!'); // Alerta de sucesso
          console.log('Response from server:', response); // Loga a resposta do servidor
          this.form.reset(); // Reseta o formulário após o sucesso
        },
        error: (error) => {
          alert('Erro ao realizar cadastro. Tente novamente.'); // Alerta de erro
          console.error('Error from server:', error); // Loga o erro do servidor
        }
      });
    } else {
      console.error('Formulário inválido'); // Lida com o caso de formulário inválido
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
