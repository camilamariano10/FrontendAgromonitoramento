import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from './service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-adicionar-fazenda',
  templateUrl: './adicionar-fazenda.html',
  styleUrls: ['./adicionar-fazenda.css'],
  imports: [ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
})
export class AdicionarFazenda {
  form!: FormGroup;
  loading = false;
  isEditMode = false; // Para diferenciar entre adicionar e editar

  constructor(
    private fb: FormBuilder,
    private service: Service,
    private dialogRef: MatDialogRef<AdicionarFazenda>,
    @Inject(MAT_DIALOG_DATA) public data: any // Recebe dados se for em modo edição
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nomeFazenda: ['', Validators.required],
      endereco: [''],
      cidade: [''],
      uf: [''],
      cep: [''],
      nomeResponsavel: [''],
      cargoResponsavel: [''],
      telefoneResponsavel: [''],
      areaCultivada: [''],
      safraAtual: [''],
    });
    // Se houver dados, estamos em modo edição
    if (this.data) {
      this.isEditMode = true; // Ativa modo edição
      this.form.patchValue(this.data); // Preenche o formulário com os dados existentes
    }
  }

  // Inicializa o formulário de edição
  initForm() {
    this.form = this.fb.group({
      nomeFazenda: ['', Validators.required],
      endereco: [''], // Deixei não obrigatório para facilitar teste, ajuste conforme regra
      cidade: [''],
      uf: [''],
      cep: [''],
      nomeResponsavel: [''],
      cargoResponsavel: [''],
      telefoneResponsavel: [''],
      areaCultivada: [''],
      safraAtual: [''],
    });
  }

  cancelar() {
    this.dialogRef.close();
  }

  salvarFazenda() {
    if (this.form.invalid) return;
    this.loading = true;

    if (this.isEditMode) {
      // Modo edição
      this.service.editarFazenda(this.form.value).subscribe({
        next: () => {
          this.loading = false;
          this.dialogRef.close({ acao: 'editar', fazenda: this.form.value });
        },
      });
    } else {
      this.service.criarFazenda(this.form.value).subscribe({
        next: () => {
          this.loading = false;
          this.dialogRef.close({ sucesso: true, fazendaCriada: this.form.value });
        },
      error: err => {
        this.loading = false;
        console.error(err);
        alert('Erro ao criar fazenda');
      }
      });
    }
  }

  excluirFazenda() {
    if (confirm('Tem certeza que deseja excluir esta fazenda?')) {
      this.loading = true;
      const nomeParaExcluir = this.form.get('nomeFazenda')?.value;

      this.service.excluirFazenda(nomeParaExcluir).subscribe({
        next: () => {
          this.loading = false;
          // Retorna ação 'excluir' e o nome da fazenda
          this.dialogRef.close({ acao: 'excluir', nomeFazenda: nomeParaExcluir });
        }
      });
    }
  }


}

