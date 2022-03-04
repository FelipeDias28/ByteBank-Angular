import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nova-transferencia', // Nome para identificar o componente
  templateUrl: './nova-transferencia.component.html', // indica o que será renderizado
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  // tira o valor desse component e propaga para quem o chamou
  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  transferir() {
    console.log('solicitado nova transferencia');

    // esta emitindo um evento, propagando um valor
    this.aoTransferir.emit({valor: this.valor, destino: this.destino})
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
