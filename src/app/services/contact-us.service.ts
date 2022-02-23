import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IContactUsForm {
  fullName: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  sent: boolean = false;

  constructor(private http: HttpClient) { }

  send(model: IContactUsForm) {
    return new Observable<boolean>((o) => {
      setTimeout(() => {
        o.next(true);
        o.complete();
        this.sent = true;
      }, 1000);
    });
  }
}
