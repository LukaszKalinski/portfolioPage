import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIconsComponent } from './header-icons.component';

describe('HeaderIconsComponent', () => {
  let component: HeaderIconsComponent;
  let fixture: ComponentFixture<HeaderIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
