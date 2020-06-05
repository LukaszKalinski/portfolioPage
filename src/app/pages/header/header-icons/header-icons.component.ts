import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import {
  faFacebook,
  faLinkedin,
  faGoogle
   } from '@fortawesome/free-brands-svg-icons';

import { WindowSizeSevice } from 'src/app/services/window-size.service';

@Component({
  selector: 'app-header-icons',
  templateUrl: './header-icons.component.html',
  styleUrls: ['./header-icons.component.sass'],
  animations: [
    trigger('icons', [
      state('true', style({
        transform: 'scale(0.7)',
        padding: '5px',
      })),
      state('false', style({
        transform: 'scale(1)',
      })),
      transition('true <=> false', [
        animate('1s')
      ]),
    ]),
    trigger('thingsappear', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-50px)'
        }),
        animate(1000)
      ]),
    ]),
  ]
})
export class HeaderIconsComponent implements OnInit {
  fbUrl = 'https://www.facebook.com/profile.php?id=100000462866542';
  linkedInUrl = 'https://www.linkedin.com/in/lukkalinski';
  googleUrl = 'https://www.google.com';
  facebookIcon = faFacebook;
  linkedInIcon = faLinkedin;
  googleIcon = faGoogle;
  isSmallerIcon = null;
  isWidthSub: Subscription;

  constructor(
    private windowSizeService: WindowSizeSevice,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
  }

  subscriptionsOnInit() {
    this.isSmallerIcons(this.windowSizeService.getWindowSize().width);
    this.isWidthSub = this.windowSizeService.isWindowSizeChanged.subscribe(() => {
      this.isSmallerIcons(this.windowSizeService.getWindowSize().width);
    });
  }

  onClickIcon(name: string) {
    switch (name) {
      case 'facebook':
        window.open(this.fbUrl, '_blank');
        break;
      case 'linkedIn':
        window.open(this.linkedInUrl, '_blank');
        break;
      case 'google':
        window.open(this.googleUrl, '_blank');
        break;
      default:
        break;
    }
  }

  isSmallerIcons(width: number) {
    if (width < 680) {
      this.isSmallerIcon = true;
    } else {
      this.isSmallerIcon = false;
    }
  }
}
