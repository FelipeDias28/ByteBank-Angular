import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = "http://localhost:3000/transferencias";

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = [];
}

get transferencias() {
  return this.listaTransferencia;
}

todasTransferencias() {
  return this.httpClient.get<Transferencia[]>(this.url);
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
