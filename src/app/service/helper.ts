import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Result } from '../model/personaje';

Injectable()
export class Helper {

    private personajeDatos = new BehaviorSubject<Result[]>({} as Result[]);
    public customMessage = this.personajeDatos.asObservable();

    constructor() { }

    public changeMessage(personanje: Result[]) {
        this.personajeDatos.next(personanje);
    }
}
