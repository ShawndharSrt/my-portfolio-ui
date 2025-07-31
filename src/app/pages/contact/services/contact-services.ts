import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactInfo } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServices {

  contactUrl = "http://localhost:8080/api/contact";

  constructor(private httpClient: HttpClient) {

  }

  postMessage(contact: ContactInfo): Observable<ContactInfo> {
    return this.httpClient.post<ContactInfo>(this.contactUrl, contact);
  }

}
