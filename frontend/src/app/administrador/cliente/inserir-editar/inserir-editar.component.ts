import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { ClienteService } from '../services';



@Component({
  selector: 'app-inserir-editar',
  templateUrl: './inserir-editar.component.html',
  styleUrls: ['./inserir-editar.component.css']
})
export class InserirEditarComponent implements OnInit{
  @ViewChild('formCliente') formCliente! : NgForm;
  cliente: Cliente = new Cliente();
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private clienteService: ClienteService){}
  

  buscarEndereco(cep: string) {
    this.clienteService.buscarEndereco(cep).subscribe(data => {
      console.log(data);
    })
    
  }  
}
