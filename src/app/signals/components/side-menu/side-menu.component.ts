import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {


  // Aixi contruim un menú dinàmic. Sense Signals
  // public menuItems: MenuItem[] = [
  //   { title: 'Comptador', route: 'counter' },
  //   { title: 'Usuari', route: 'user-info' },
  //   { title: 'Mutacions', route: 'properties' }
  // ]

  // Així construim un menú amb Signals

  public menuItems  = signal<MenuItem[]>([
    { title: 'Comptador', route: 'counter' },
    { title: 'Usuari', route: 'user-info' },
    { title: 'Mutacions', route: 'properties' }
  ])

}
