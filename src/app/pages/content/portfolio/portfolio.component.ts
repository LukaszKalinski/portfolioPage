import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';

import { Project } from 'src/app/classes/project.model';
import { ProjectStack } from 'src/app/classes/stack.model';
import {
  faArrowCircleUp
   } from '@fortawesome/free-solid-svg-icons';

import { WindowSizeSevice } from 'src/app/services/window-size.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  animations: [
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
export class PortfolioComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;
  allProjects: Project[] = [];
  isScrolled = false;
  upIcon = faArrowCircleUp;
  selectedProject: Project;
  isSelectedProjectChanged: Subscription;

  constructor(
    private windowSizeService: WindowSizeSevice,
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.subscriptionsOnInit();
    this.setProjects();
  }

  subscriptionsOnInit() {
    this.selectedProject = this.menuService.getSelectedProject();
    this.isSelectedProjectChanged = this.menuService.isSelectedProjectChanged.subscribe((project) => {
      this.selectedProject = project;
    });
  }

  setProjects() {
    this.allProjects = [
      new Project(
        'Portfolio Page',
        ['https://imgbbb.com/images/2020/06/05/portfolio.png'],
        'https://github.com/LukaszKalinski/portfolioPage',
        'https://lukkalinskiportfolio.web.app',
        'This is my personal page, where You can find everything about my person and projects which I have created.',
        new ProjectStack(
          true, // isHTML: boolean
          false, // isCSS: boolean
          true, // isSASS: boolean
          true, // isBootstrap: boolean
          true, // isAngular: boolean
          false, // isJavascript: boolean
          true, // isTypescript: boolean
          false, // isMongoDB: boolean
          true, // isFirebase: boolean
          true, // isRestAPI: boolean
          true, // isNodeJs: boolean}
        ),
        'portfolio'
      ),
      new Project(
        'RPG Game',
        ['https://i.ibb.co/SvnPb0P/Przechwytywanie.png'],
        'https://github.com/LukaszKalinski/RPG-Game',
        'https://firstrpg-3e46e.web.app/',
        // tslint:disable-next-line: max-line-length
        'This is online game, where You can raise Your hero as a knight, archer or wizard. There are many creatures, adventures and quest which You can discover on particular levels. You are able to work on various fighting, collecting and crafting skills.',
        new ProjectStack(
          true, // isHTML: boolean
          true, // isCSS: boolean
          false, // isSASS: boolean
          true, // isBootstrap: boolean
          true, // isAngular: boolean
          false, // isJavascript: boolean
          true, // isTypescript: boolean
          false, // isMongoDB: boolean
          true, // isFirebase: boolean
          true, // isRestAPI: boolean
          true, // isNodeJs: boolean}
        ),
        'rpggame'
      ),
    ];
  }

  getContentHeight() {
    const result = this.windowSizeService.getContentHeight();
    return result;
  }

  scrollTop(el: CdkVirtualScrollViewport) {
    el.scrollToIndex(0);
  }

  scrollDetected(el: CdkVirtualScrollViewport) {
    this.isScrolled = el.elementRef.nativeElement.scrollTop === 0 ? false : true;
  }
}
