import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardHomeComponent } from './big-card-home.component';

describe('BigCardHomeComponent', () => {
  let component: BigCardHomeComponent;
  let fixture: ComponentFixture<BigCardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
