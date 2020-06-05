import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import { MenuService } from 'src/app/services/menu.service';
import { WindowSizeSevice } from 'src/app/services/window-size.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('item', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({
          transform: 'translateX(100%)',
          opacity: 0,
        }))
      ]),
    ]),
    trigger('message', [
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
    trigger('contact', [
      state('in', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0.5)'
        }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({
          transform: 'scale(0.5)',
          opacity: 0,
        }))
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  isSmallerMsg = false;
  isSmallerMsgSub: Subscription;
  selectedItem: string;
  selectedItemSub: Subscription;
  isContactClicked = false;
  isContactClickedSub: Subscription;

  constructor(
    private menuService: MenuService,
    private windowSizeService: WindowSizeSevice
  ) { }

  ngOnInit(): void {
    this.subscriptionOnInit();
  }

  subscriptionOnInit() {
    this.selectedItem = this.menuService.getMenuItem();
    this.selectedItemSub = this.menuService.isMenuItemChanged.subscribe(menu => {
      this.selectedItem = menu;
    });
    this.isContactClicked = this.menuService.getIsContactClicked();
    this.isContactClickedSub = this.menuService.isContactClickedChanged.subscribe(clicked => {
      this.isContactClicked = clicked;
    });
    this.isSmallerMessage(this.windowSizeService.getWindowSize().width);
    this.isSmallerMsgSub = this.windowSizeService.isWindowSizeChanged.subscribe(width => {
      this.isSmallerMessage(this.windowSizeService.getWindowSize().width);
    });
  }

  isSmallerMessage(width: number) {
    this.isSmallerMsg = width > 680 ? false : true;
  }

  getContentHeight() {
    const result = this.windowSizeService.getContentHeight();
    return result;
  }

  onCloseContact() {
    this.isContactClicked = false;
    this.menuService.updateIsContactClicked(this.isContactClicked);
  }
}
