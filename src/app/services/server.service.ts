import { FormGroup } from '@angular/forms';
import { Email } from '../classes/email.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServerService {

  constructor(
    private http: HttpClient,
  ) {}

  onSendEmail(form: FormGroup) {
    const firstName = form.get('firstName').value;
    const lastName = form.get('lastName').value;
    const email = form.get('email').value;
    const subject = form.get('subject').value;
    const message = form.get('message').value;
    const date = new Date().getTime();
    const goingEmail: Email = new Email(firstName, lastName, email, subject, message, date);
    this.sendEmailToServer(goingEmail);
  }

  sendEmailToServer(email: Email) {
    this.http
    .post(environment.firebaseConfig.databaseURL + '/emails.json', email)
    .subscribe(response => {
      // console.log(response);
    });
  }
}
