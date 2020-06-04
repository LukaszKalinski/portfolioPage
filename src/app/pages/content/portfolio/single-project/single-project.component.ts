import { Component, OnInit, Input } from '@angular/core';

import { Project } from 'src/app/classes/project.model';
import { WindowSizeSevice } from 'src/app/services/window-size.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.sass'],
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
    trigger('filter', [
      state('true', style({
        filter: 'grayscale(0%)',
        transform: 'scale(1.03)',
        background: 'rgb(255,255,255,0.3)'
      })),
      state('false', style({
        filter: 'grayscale(100%)',
        background: 'rgb(255,255,255,0)'
      })),
      transition('* => *', [
        animate(200)
      ]),
    ]),
  ]
})
export class SingleProjectComponent implements OnInit {
  @Input() project: Project;
  isLoaded = false;
  isHover = false;
  isShowBtn = true;
  isSmallerContainer = false;
  isWidthSub: Subscription;
  selectedProject: Project;
  isSelectedProjectChanged: Subscription;
  stackPairArr: {name: string, is: boolean}[] = [];

  constructor(
    private windowSizeService: WindowSizeSevice,
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.toStringTechnologies();
    this.subscriptionsOnInit();
  }

  subscriptionsOnInit() {
    this.selectedProject = this.menuService.getSelectedProject();
    this.isSelectedProjectChanged = this.menuService.isSelectedProjectChanged.subscribe((project) => {
      this.selectedProject = project;
    });
    this.isSmallerCont(this.windowSizeService.getWindowSize().width);
    this.isWidthSub = this.windowSizeService.isWindowSizeChanged.subscribe(() => {
      this.isSmallerCont(this.windowSizeService.getWindowSize().width);
    });
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  }

  toStringTechnologies() {
    const keys = Object.keys(this.project.stack);
    const values = Object.values(this.project.stack);
    keys.forEach((data, index) => {
      this.stackPairArr.push({name: data, is: values[index]} );
    });
  }

  isSmallerCont(width: number) {
    if (width > 1150) {
      this.isSmallerContainer = false;
    } else {
      this.isSmallerContainer = true;
    }
  }

  onStartHover() {
    if (this.isLoaded) {
      this.isHover = true;
      this.isShowBtn = true;
    }
  }

  onEndHover() {
    if (this.isLoaded) {
      this.isHover = false;
      this.isShowBtn = false;
    }
  }

  onHover(event: Event) {
    if (this.isLoaded) {
      this.isHover = true;
      this.isShowBtn = true;
    }
  }
}
