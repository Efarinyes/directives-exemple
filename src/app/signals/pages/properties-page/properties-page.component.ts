import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnInit, OnDestroy {


  public counter = signal(10)
  public user = signal<User>({
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  })

  public fullBame = computed( ()=> `${this.user().first_name} ${this.user().last_name }`);

  public userChangedEffect = effect( () => {
    console.log(`${this.user().first_name } - ${this.counter() }`)
  })

  ngOnInit(): void {
    setInterval( () => {
      this.counter.update( current => current +1 )
      if ( this.counter() == 16 )
        this.userChangedEffect.destroy()
    }, 1000)
  }
  ngOnDestroy(): void {

  }

  incressBy(value: number) {
    this.counter.update( current => current + value )
  }


  onFieldUpdate( field: keyof User , value: string ) {

    // Mètode possible però alhora insegur
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // })

    // Mètode mutate dels signals. Evalua el tipus de dade de cada camp
    // this.user.mutate( current => {

    //   switch( field ) {
    //     case 'email':
    //       current.email = value;
    //     break;

    //     case 'first_name':
    //       current.first_name = value;
    //     break;

    //     case 'last_name':
    //       current.last_name = value;
    //     break;

    //     case 'id':
    //       current.id = Number(value);
    //     break;
    //   }
    // })

    // Metode usant la opció update dels signals

    this.user.update( current => {
      return {
        ...current,
        [field]: value
      }
    })
  }

}
