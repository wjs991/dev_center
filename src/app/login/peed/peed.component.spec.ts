import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeedComponent } from './peed.component';

describe('PeedComponent', () => {
  let component: PeedComponent;
  let fixture: ComponentFixture<PeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
