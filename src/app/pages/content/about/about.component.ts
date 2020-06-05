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
  technologyImg: {url: string, hint: string}[] = [];
  upIcon = faArrowCircleUp;

  // tslint:disable-next-line: max-line-length
  firstMessage = 'My name is Lukasz Kalinski and I am pretending to become Junior Front-End Developer.';
  secondMessage = 'Currently I am working as a Junior ServiceNow Developer, where I am using HTML, CSS, JS, Angular.';
  thirddMessage = 'Below I present a list of technologies, which I am mostly using:';
  // tslint:disable-next-line: max-line-length
  fourthMessage = 'On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills.';
  // tslint:disable-next-line: max-line-length
  fifthMessage = 'I love to play indoor/outdoor football games with friends and take care of my bonsai trees.';

  constructor(
    private windowSizeService: WindowSizeSevice,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
    this.setTechnologyImages();
  }

  subscriptionsOnInit() {
    this.isSmallerWindows(this.windowSizeService.getWindowSize().width);
    this.isSmallerWindowSub = this.windowSizeService.isWindowSizeChanged.subscribe(() => {
      this.isSmallerWindows(this.windowSizeService.getWindowSize().width);
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
    a.push({url: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/html5-3-502526.png', hint: 'HTML5'});
    a.push({url: 'https://cdn.iconscout.com/icon/free/png-512/css3-9-1175237.png', hint: 'CSS3'});
    a.push({url: 'https://cdn.iconscout.com/icon/free/png-512/sass-226054.png', hint: 'SASS'});
    a.push({url: 'https://cdn.iconscout.com/icon/free/png-512/bootstrap-226077.png', hint: 'Bootstrap 4'});
    a.push({url: 'https://cdn.iconscout.com/icon/free/png-512/angular-2038881-1720094.png', hint: 'Angular 9'});
    a.push({url: 'https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png', hint: 'Javascript'});
    a.push({url: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png', hint: 'Typescript'});
    a.push({url: 'https://cdn.iconscout.com/icon/free/png-512/node-js-2-1174936.png', hint: 'Node.js'});
    a.push({url: 'https://cdn.iconscout.com/icon/free/png-256/firebase-1-282796.png', hint: 'Firebase'});
    a.push({url: 'https://cdn.iconscout.com/icon/free/png-512/git-225996.png', hint: 'Git'});
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
