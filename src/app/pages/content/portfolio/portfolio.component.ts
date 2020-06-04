import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/classes/project.model';
import { ProjectStack } from 'src/app/classes/stack.model';
import { WindowSizeSevice } from 'src/app/services/window-size.service';
import { MenuService } from 'src/app/services/menu.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  faArrowCircleUp
   } from '@fortawesome/free-solid-svg-icons';

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
  selectedProject: Project;
  isSelectedProjectChanged: Subscription;
  upIcon = faArrowCircleUp;
  isScrolled = false;

  constructor(
    private windowSizeService: WindowSizeSevice,
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.allProjects = [
      new Project(
        'RPG Game',
        [
          'https://i.ibb.co/SvnPb0P/Przechwytywanie.png',
          'https://imgbbb.com/images/2020/06/04/inventory.png',
          'https://imgbbb.com/images/2020/06/04/shop.png',
          'https://imgbbb.com/images/2020/06/04/quests.png',
          'https://imgbbb.com/images/2020/06/04/crafting.png',
          'https://imgbbb.com/images/2020/06/04/fight.png',
        ],
        'https://github.com/LukaszKalinski/RPG-Game',
        'https://firstrpg-3e46e.web.app/',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat',
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
        'rpggame',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat',
      ),
      new Project(
        'Portfolio Page',
        ['https://imgbbb.com/images/2020/06/02/Przechwytywanie.png'],
        'https://lukkalinskiportfolio.web.app',
        'https://lukkalinskiportfolio.web.app',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat',
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
        'portfolio',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat',
      ),
    ];
    this.selectedProject = this.menuService.getSelectedProject();
    this.isSelectedProjectChanged = this.menuService.isSelectedProjectChanged.subscribe((project) => {
      this.selectedProject = project;
    });
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
