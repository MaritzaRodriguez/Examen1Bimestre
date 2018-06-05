import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBootComponent } from './carousel-boot.component';

describe('CarouselBootComponent', () => {
  let component: CarouselBootComponent;
  let fixture: ComponentFixture<CarouselBootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselBootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
