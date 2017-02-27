import {Component} from '@angular/core';
import { PerroService, Perro} from '../../services/perro-service';

@Component({
    selector: 'product',
    templateUrl: '../../components/perro-list/perro-list.component.html'})
export class PerroListComponent {

    perros: Array<Perro> = [];

    constructor(private perroService: PerroService) {
        this.perros = this.perroService.getPerros();
    }


}
