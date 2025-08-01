import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactInfo } from '../models/contact';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactServices {

  contactUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  postMessage(contact: ContactInfo): Observable<ContactInfo> {
    return this.httpClient.post<ContactInfo>(`${this.contactUrl}/api/contact`, contact);
  }

}
