import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, keyframes, state } from '@angular/animations';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';

import {
  faArrowCircleUp
   } from '@fortawesome/free-solid-svg-icons';

import { WindowSizeSevice } from 'src/app/services/window-size.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  animations: [
    trigger('entertechn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-200px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(-40px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ]))]), { optional: true }),
      ]),
    ]),
    trigger('thingsappear', [
      state('in', style({
        opacity: 1,
      })),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(1000)
      ]),
    ]),
  ]
})
export class AboutComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;
  isLoaded = false;
  isSmallerWindow = false;
  isSmallestWindow = false;
  isSmallerWindowSub: Subscription;
  showEducation = false;
  showExperience = false;
  showOther = false;
  isScrolled = false;
  technologyImg: string[] = [];
  upIcon = faArrowCircleUp;
  firstMessage = 'My name is Lukasz Kalinski and I am pretending to become Junior Front-End Developer.';
  secondMessage = 'Currently I am working as a Junior ServiceNow Developer, where I am using HTML, CSS, JS, Angular.';
  // tslint:disable-next-line: max-line-length
  thirddMessage = 'On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills.';
  fourthMessage = 'Below is a list of technologies, which I am mostly using:';
  fifthMessage = 'I prefer to work with NoSQL databases using JSON format files.';

  constructor(
    private windowSizeService: WindowSizeSevice,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
    this.setTechnologyImages();
  }

  subscriptionsOnInit() {
    const width = this.windowSizeService.getWindowSize().width;
    this.isSmallerWindows(width);
    this.isSmallerWindowSub = this.windowSizeService.isWindowSizeChanged.subscribe(() => {
      this.isSmallerWindows(width);
    });
    this.reloadImages();
  }

  isSmallerWindows(width: number) {
    const old = this.isSmallerWindow;
    if (width > 775) {
      this.isSmallerWindow = false;
      this.isSmallestWindow = false;
    }  else if (width > 365) {
      this.isSmallerWindow = true;
      this.isSmallestWindow = false;
    } else {
      this.isSmallerWindow = true;
      this.isSmallestWindow = true;
    }
    if (old !== this.isSmallerWindow) {this.reloadImages(); }
  }

  reloadImages() {
    this.isLoaded = false;
    setTimeout(() => {
      this.isLoaded = true;
    }, 1500);
  }

  getContentHeight() {
    const result = this.windowSizeService.getContentHeight();
    return result;
  }

  setTechnologyImages() {
    const a = this.technologyImg;
    a.push('https://cdn.iconscout.com/icon/premium/png-512-thumb/html5-3-502526.png');
    a.push('https://cdn.iconscout.com/icon/free/png-512/css3-9-1175237.png');
    a.push('https://cdn.iconscout.com/icon/free/png-512/sass-226054.png');
    a.push('https://cdn.iconscout.com/icon/free/png-512/bootstrap-226077.png');
    a.push('https://cdn.iconscout.com/icon/free/png-512/angular-2038881-1720094.png');
    a.push('https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png');
    a.push('https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png');
    a.push('https://cdn.iconscout.com/icon/free/png-512/node-js-2-1174936.png');
  }

  onShowEducation() {
    this.showEducation = !this.showEducation;
  }

  onShowOther() {
    this.showOther = !this.showOther;
  }

  onShowExperience() {
    this.showExperience = !this.showExperience;
  }

  scrollTop(el: CdkVirtualScrollViewport) {
    el.scrollToIndex(0);
  }

  scrollDetected(el: CdkVirtualScrollViewport) {
    this.isScrolled = el.elementRef.nativeElement.scrollTop === 0 ? false : true;
  }
}
