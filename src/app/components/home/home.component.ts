import {Component} from '@angular/core';
import {Perro} from './../../services/perro-service';

@Component({
    selector: 'home',
    templateUrl: '../../components/home/home.component.html',
    styles: ['.home {background: red}']
})

export class HomeComponent {
    title = 'Perdidog';

    breeds = ['Yorki', 'Salchicha'];
    perro = new Perro(1, '', '', '', '', []);
    name = '';

    submit() {
        console.log(this.perro);
    }
}
