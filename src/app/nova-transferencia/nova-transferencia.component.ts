import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';

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

  constructor(private service: TransferenciaService){}

  transferir() {
    console.log('solicitado nova transferencia');

    // esta emitindo um evento, propagando um valor
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionarTransferencia(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error)
    );

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
