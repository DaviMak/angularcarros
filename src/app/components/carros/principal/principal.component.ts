import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
    voltavolta():void{
      window.location.href = "http://localhost:4200/carros";
    }
    listanomes: string[] = ["reinaldo", "carlinhos aguiar", "kefera"];
    
}
