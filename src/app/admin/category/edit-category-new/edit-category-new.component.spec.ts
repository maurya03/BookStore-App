import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryNewComponent } from './edit-category-new.component';

describe('EditCategoryNewComponent', () => {
  let component: EditCategoryNewComponent;
  let fixture: ComponentFixture<EditCategoryNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoryNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
