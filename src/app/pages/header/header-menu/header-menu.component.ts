import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import { WindowSizeSevice } from 'src/app/services/window-size.service';
import { IconDefinition,
  faHome,
  faUser,
  faTasks,
  faEnvelope,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.sass'],
  animations: [
    trigger('menu', [
      state('true', style({
        transform: 'scale(0.8)'
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
export class HeaderMenuComponent implements OnInit {
  isSmallerMenu = false;
  isSmallestMenu = false;
  isMobileMenu = false;
  isContactClicked = false;
  isWidthSub: Subscription;
  homeIcon = faHome;
  userIcon = faUser;
  projectIcon = faTasks;
  contactIcon = faEnvelope;
  menuIcon = faBars;
  MENU: {name: string, url: string, icon: IconDefinition}[] = [
    {name: 'Home', url: 'home', icon: this.homeIcon},
    {name: 'About me', url: 'about', icon: this.userIcon},
    {name: 'Portfolio', url: 'portfolio', icon: this.projectIcon},
    {name: 'Contact', url: 'contact', icon: this.contactIcon}
  ];

  constructor(
    private windowSizeService: WindowSizeSevice,
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.isSmallerMenus(this.windowSizeService.getWindowSize().width);
    this.isWidthSub = this.windowSizeService.isWindowSizeChanged.subscribe(() => {
      this.isSmallerMenus(this.windowSizeService.getWindowSize().width);
    });
  }

  onChangeMenu(name: string) {
    this.menuService.updateSelectedProject(null);
    if (name !== 'Contact') {
      this.menuService.updateIsContactClicked(false);
      this.menuService.updateMenuItem(name);
    } else {
      this.menuService.updateIsContactClicked(true);
    }
  }

  isSmallerMenus(width: number) {
    if (width > 680) {
      this.isSmallerMenu = false;
      this.isSmallestMenu = false;
      this.isMobileMenu = false;
    } else if (width > 520) {
      this.isSmallerMenu = true;
      this.isSmallestMenu = false;
      this.isMobileMenu = false;
    } else  if (width > 445) {
      this.isSmallerMenu = false;
      this.isSmallestMenu = true;
      this.isMobileMenu = false;
    } else {
      this.isSmallerMenu = false;
      this.isSmallestMenu = true;
      this.isMobileMenu = true;
    }
  }
}
