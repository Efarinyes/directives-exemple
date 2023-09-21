import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  // Forma clàssica de inicialitaar un formulari reactoi
  // constructor( private fb:  FormBuilder) {}
  // ********
  // Alternativa per la injecció de dependències, molt usada amb signals ( solid )

  private fb = inject(FormBuilder);

  public color: string = 'green';
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  })

  changeColor() {

    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
