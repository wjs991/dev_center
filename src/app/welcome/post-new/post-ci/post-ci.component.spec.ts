import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCiComponent } from './post-ci.component';

describe('PostCiComponent', () => {
  let component: PostCiComponent;
  let fixture: ComponentFixture<PostCiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
