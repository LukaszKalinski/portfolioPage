import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import {
  faChevronCircleLeft,
  faChevronCircleRight
   } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate, query, group } from '@angular/animations';
import { WindowSizeSevice } from 'src/app/services/window-size.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  animations: [
    trigger('image', [
      state('*', style({
        opacity: 1,
        transform: 'translateX(0)',
        position: 'absolute'
      })),
      transition('void => right', [
        style({
          opacity: 0,
          position: 'absolute',
          transform: 'translateX(-100%)',
        }),
        animate(1000)
      ]),
      transition('right => void', [
        animate(1000, style({
          transform: 'translateX(100%)',
          position: 'absolute',
          opacity: 0,
        }))
      ]),
      transition('void => left', [
        style({
          opacity: 0,
          position: 'absolute',
          transform: 'translateX(100%)',
        }),
        animate(1000)
      ]),
      transition('left => void', [
        animate(1000, style({
          transform: 'translateX(-100%)',
          position: 'absolute',
          opacity: 0,
        }))
      ]),
    ]),
  ]
})

export class CarouselComponent implements OnInit, AfterViewChecked {
  @Input() stringArr: string[];
  @Input() identifierDOM: string;
  page = 0;
  slides: string[] = [];
  elementsNum = 1;
  rightIcon = faChevronCircleRight;
  leftIcon = faChevronCircleLeft;
  carouselImgName: string;
  carouselRowName: string;
  animationSite: string;

  constructor(
    private windowSizeService: WindowSizeSevice,
  ) { }

  ngOnInit(): void {
    this.carouselImgName = 'carouselimg-' + this.identifierDOM;
    this.carouselRowName = 'carouselrow-' + this.identifierDOM;
    this.createSlides(this.stringArr);
  }

  getImageHeightOnInit() {
    const carousel = document.getElementById(this.carouselImgName);
    const height = carousel.offsetHeight;
    this.setRowHeight(height);
  }

  setRowHeight(height: number) {
    const element = document.getElementById(this.carouselRowName);
    element.style.height = height + 'px';
  }

  createSlides(arr: string[]) {
    this.slides = this.cuttingArray(arr, this.elementsNum);
  }

  cuttingArray(arr: string[], elNum: number) {
    const tempArr = [];
    for (let i = 0; i < arr.length; i += elNum) {
      tempArr.push(arr.slice(i, i + elNum));
    }
    return tempArr;
  }

  goBack() {
    this.animationSite = 'left';
    if (this.page === 0) {
      this.page = this.slides.length - 1;
    } else {
      this.page -= 1;
    }
  }

  goForward() {
    this.animationSite = 'right';
    if (this.page === this.slides.length - 1) {
      this.page = 0;
    } else {
      this.page += 1;
    }
  }

  ngAfterViewChecked() {
    this.getImageHeightOnInit();
  }

}
