import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ProvaInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        console.log('Richiesta originale: ', request);
        const newReq = request.clone({
            headers: request.headers
                .append('Auth', 'secret')
                .append('token', 'jisdfug09s7etvnopcx9b09987fdghm'),
        });
        if (newReq.headers.get('Auth') == 'secret') {
            return next.handle(newReq).pipe(
                tap((event) => {
                    console.log('Nuova richiesta: ', newReq);
                    console.log("L'evento chiamata HTTP è partito ", event);
                })
            );
        } else {
            return next.handle(request);
        }
    }
}
