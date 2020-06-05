import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { WindowSizeSevice } from 'src/app/services/window-size.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [
    trigger('thingsappear', [
      state('in', style({
        opacity: 1,
      })),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(500)
      ]),
    ]),
    trigger('changingwindow', [
      state('in', style({
        opacity: 1,
      })),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(2000)
      ]),
    ]),
  ]
})
export class ContactComponent implements OnInit {
  @Output() contactClosed = new EventEmitter<void>();
  isHover = false;
  isSmaller = false;
  isSmallest = false;
  isWidthSub: Subscription;
  messageForm: FormGroup;
  offMsg = 'Do not hestitate to write';

  constructor(
    private windowSizeService: WindowSizeSevice,
    private serverService: ServerService
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
    this.subscribeForm();
  }

  subscriptionsOnInit() {
    const width = this.windowSizeService.getWindowSize().width;
    this.isSmallerWindow(width);
    this.isWidthSub = this.windowSizeService.isWindowSizeChanged.subscribe(() => {
      this.isSmallerWindow(width);
    });
  }

  subscribeForm() {
    this.messageForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
    });

  }

  onClear() {
    this.messageForm.reset();
  }

  onSendMessage(form: FormGroup) {
    this.serverService.onSendEmail(form);
    this.onClose();
  }

  onClose() {
    this.contactClosed.emit();
  }

  onAnimationStart() {
    this.isHover = true;
  }

  onAnimationEnd() {
    this.isHover = false;
  }

  isSmallerWindow(width: number) {
    if (width > 1000) {
      this.isSmaller = false;
      this.isSmallest = false;
    } else  if (width > 500) {
      this.isSmaller = true;
      this.isSmallest = false;
    } else {
      this.isSmaller = false;
      this.isSmallest = true;
    }
  }

}
