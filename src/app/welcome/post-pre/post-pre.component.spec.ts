import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPreComponent } from './post-pre.component';

describe('PostPreComponent', () => {
  let component: PostPreComponent;
  let fixture: ComponentFixture<PostPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
