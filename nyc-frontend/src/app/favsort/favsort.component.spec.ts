import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavsortComponent } from './favsort.component';

describe('FavsortComponent', () => {
  let component: FavsortComponent;
  let fixture: ComponentFixture<FavsortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavsortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
