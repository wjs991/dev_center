import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjNewComponent } from './proj-new.component';

describe('ProjNewComponent', () => {
  let component: ProjNewComponent;
  let fixture: ComponentFixture<ProjNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
