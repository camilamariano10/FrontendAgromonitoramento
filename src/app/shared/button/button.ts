import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button', //selector do componente
  templateUrl: './button.html', //caminho do template HTML
  styleUrl: './button.css', //caminho do arquivo CSS
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {
  @Input() buttonText!: string; //texto do botão
  @Input() buttonColor: string = 'primary'; //cor do botão, padrão é 'primary'
  @Input() buttonLink: string = '#'; //link do botão, padrão é '#'

  @Output() buttonClick = new EventEmitter<void>(); //evento de clique do botão

  onClick() {
    this.buttonClick.emit(); //emite o evento de clique
  }

}
