import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import { WindowSizeSevice, WindowSize } from './services/window-size.service';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('loadingContent', [
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
    trigger('isHome', [
      state('true', style({
        filter: 'grayscale(0%)'
      })),
      state('false', style({
        filter: 'grayscale(100%)'
      })),
      transition('* => *', [
        animate(1000)
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit {
  isFullyLoaded = false;
  startAnimation = false;
  title = 'Lukasz Kalinski Portfolio';
  selectedItem: string;
  selectedItemSub: Subscription;
  loadingPerc = 0;

  constructor(
    private windowSizeService: WindowSizeSevice,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.loadingContent();
    this.onResize();
    this.selectedItem = this.menuService.getMenuItem();
    this.selectedItemSub = this.menuService.isMenuItemChanged.subscribe(menu => {
      this.selectedItem = menu;
    });
  }

  loadingContent() {
    const loadingTime = 2000;
    const startingTime = 1000;
    setTimeout(() => {
      const x = setInterval(() => {
        if (this.loadingPerc >= 100) {
          clearInterval(x);
          this.startAnimation = true;
          setTimeout(() => {
            this.isFullyLoaded = true;
          }, startingTime);
        } else if (!this.isFullyLoaded) {
          this.loadingPerc += 1;
        }
      }, loadingTime / 100);
    }, startingTime);
  }

  loadingBarWidth() {
    const width = this.windowSizeService.getWindowSize().width;
    const result = ((width - 60 - 20) * this.loadingPerc / width) ;
    return result;
  }

  onResize() {
    const newSizes: WindowSize = {width: window.innerWidth, height: window.innerHeight};
    this.windowSizeService.updateWindowSize(newSizes);
  }
}
