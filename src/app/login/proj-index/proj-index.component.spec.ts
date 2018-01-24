import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjIndexComponent } from './proj-index.component';

describe('ProjIndexComponent', () => {
  let component: ProjIndexComponent;
  let fixture: ComponentFixture<ProjIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
