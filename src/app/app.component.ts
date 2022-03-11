import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byteBank_two';

  transferencias: any[] = [];

  transferir($event) {
    console.log($event);
    const transferencia = {...$event, data: new Date()} // passa para dentro de transferência somente as propriedades internas
    console.log(transferencia)

    this.transferencias.push(transferencia);
  }
}
