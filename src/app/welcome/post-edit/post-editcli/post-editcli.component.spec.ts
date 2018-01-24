import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditcliComponent } from './post-editcli.component';

describe('PostEditcliComponent', () => {
  let component: PostEditcliComponent;
  let fixture: ComponentFixture<PostEditcliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEditcliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
