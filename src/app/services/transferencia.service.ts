import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];

constructor() {
  this.listaTransferencia = [];
}

get transferencias() {
  return this.listaTransferencia;
}

adicionarTransferencia(transferencia:any) {
  this.hidratar(transferencia);
  this.transferencias.push(transferencia);
}

private hidratar(transferencia: any) {
  // Onde poderia colocar as regras de negocio
  transferencia.data = new Date;
}

}
