import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundFageComponent } from './not-found-fage.component';

describe('NotFoundFageComponent', () => {
  let component: NotFoundFageComponent;
  let fixture: ComponentFixture<NotFoundFageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundFageComponent]
    });
    fixture = TestBed.createComponent(NotFoundFageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
