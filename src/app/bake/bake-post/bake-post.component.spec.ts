import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakePostComponent } from './bake-post.component';

describe('BakePostComponent', () => {
  let component: BakePostComponent;
  let fixture: ComponentFixture<BakePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
