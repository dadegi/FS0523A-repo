import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'uppercase',
})
export class UppercasePipe implements PipeTransform {
    transform(value: string, ...args: unknown[]): unknown {
        const maiuscolo = value.toUpperCase();
        return maiuscolo;
    }
}
