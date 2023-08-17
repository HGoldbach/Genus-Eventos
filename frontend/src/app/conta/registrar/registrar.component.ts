import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { ContaService } from '../services';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
  @ViewChild('registrarForm') registrarForm! : NgForm;
  cliente!: Cliente;


  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  constructor(private contaService: ContaService){}

  registrarConta() {
    this.contaService.criarConta(this.cliente).subscribe(() => {
      console.log("Conta criada com sucesso!");
    })
  }

}
