import { Component, OnInit } from '@angular/core';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

 transferencias: any[];

  constructor(private service: TransferenciaService) {

  }

  ngOnInit(): void {
    // Quando o componente extrato é inicializado
    // esta pegando as informações do get de transferência
    //e passando para a variável local.
    this.service.todasTransferencias().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
