import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { WindowSizeSevice } from 'src/app/services/window-size.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.sass']
})
export class MainHeaderComponent implements OnInit {
  isMobile = false;
  isWidthSub: Subscription;

  constructor(
    private windowSizeService: WindowSizeSevice,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
  }

  subscriptionsOnInit() {
    this.isMobileMenu(this.windowSizeService.getWindowSize().width);
    this.isWidthSub = this.windowSizeService.isWindowSizeChanged.subscribe(() => {
      this.isMobileMenu(this.windowSizeService.getWindowSize().width);
    });
  }

  isMobileMenu(width: number) {
    if (width > 445) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }
}
