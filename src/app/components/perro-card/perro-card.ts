import {Component, Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {Perro} from '../../services/perro-service';

@Component({
    selector: 'perro-card',
    templateUrl: '../../components/perro-card/perro-card.html'
})
export default class PerroCardComponent {
    @Input() perro: Perro;


}


