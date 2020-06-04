import { Component, OnInit } from '@angular/core';
import { WindowSizeSevice } from 'src/app/services/window-size.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(
    private windowSizeService: WindowSizeSevice,
  ) { }

  ngOnInit(): void {
    this.getContentHeight();
  }

  getContentHeight() {
    const result = this.windowSizeService.getContentHeight();
    return result;
  }
}
