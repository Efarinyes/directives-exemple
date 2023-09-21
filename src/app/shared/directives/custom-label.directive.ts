import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null

  @Input() set color( value: string ) {
   this._color = value;
   this.setChangeStyleColor()
  }

  @Input() set errors(value: ValidationErrors | null | undefined ) {
    this._errors = value;
    this.setErrorsMessage();

  }

  constructor( private el: ElementRef<HTMLElement> ) {
    // console.log('Directiva en marcha')
    // console.log(el)
    this.htmlElement = el;

  }
  ngOnInit(): void {
    // console.log('Directiva des del NgOnInit')
    this.setChangeStyleColor()
  }

  setChangeStyleColor(): void {
    if (!this.htmlElement ) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorsMessage() : void{
    if (!this.htmlElement ) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Camp requerit';
      return;
    }
    if (errors.includes('minlength')) {

      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength']

      this.htmlElement.nativeElement.innerText = `EL camp ha de ser mínim de ${min} i en te ${current} caràcters`;
      return;
    }
    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'El format ha de ser de correu electrònic';
      return;
    }



  }
}
