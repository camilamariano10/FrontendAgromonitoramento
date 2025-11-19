import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from './service';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-fazenda',
  templateUrl: './adicionar-fazenda.html',
  styleUrls: ['./adicionar-fazenda.css'],
  imports: [ReactiveFormsModule],
})
export class AdicionarFazenda {
  form!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private service: Service,
    private dialogRef: MatDialogRef<AdicionarFazenda>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nomeFazenda: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      cep: ['', Validators.required],
      nomeResponsavel: ['', Validators.required],
      cargoResponsavel: ['', Validators.required],
      telefoneResponsavel: ['', Validators.required],
      areaCultivada: ['', Validators.required],
      safraAtual: ['', Validators.required],
    });
  }

  cancelar() {
    this.dialogRef.close();
  }

  salvarFazenda() {
    if (this.form.invalid) return;

    this.loading = true;

    this.service.criarFazenda(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.dialogRef.close({ sucesso: true });
      },
      error: err => {
        this.loading = false;
        console.error(err);
        alert('Erro ao criar fazenda');
      }
    });
  }
}
