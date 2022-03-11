import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byteBank_two';

  // injetando as informações do service
  constructor(private service: TransferenciaService) {

  }

  transferir($event) {
    // utilizando a instância criada no service
    this.service.adicionarTransferencia($event);
  }
}
