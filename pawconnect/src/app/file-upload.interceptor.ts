import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FileUploadInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/upload') && req.body instanceof FormData) {
      const clonedRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE'), // Add token or other headers if needed
      });
      console.log('Intercepted File Upload Request:', clonedRequest);
      return next.handle(clonedRequest);
    }

    // For other requests, pass through
    return next.handle(req);
  }
}
