import { Subject } from 'rxjs';

export interface WindowSize {
  width: number;
  height: number;
}

export class WindowSizeSevice {
  isWindowSizeChanged = new Subject<WindowSize>();
  private windowSize: WindowSize;

  updateWindowSize(newSizes: WindowSize) {
    this.windowSize = newSizes;
    this.isWindowSizeChanged.next(this.windowSize);
  }

  getWindowSize() {
    return this.windowSize;
  }

  getContentHeight() {
    const headerHeight = this.getElementHeight('header');
    const footerHeight = this.getElementHeight('footer');
    const windowHeight = this.getWindowSize().height;
    const result = windowHeight - headerHeight - footerHeight;
    return result;
  }

  getElementHeight(name: string) {
    const result = document.getElementById(name).clientHeight;
    return result;
  }
}
