import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPlanetComponent } from './details-planet.component';

describe('DetailsPlanetComponent', () => {
  let component: DetailsPlanetComponent;
  let fixture: ComponentFixture<DetailsPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
