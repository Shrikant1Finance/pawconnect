import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindapetComponent } from './findapet.component';

describe('FindapetComponent', () => {
  let component: FindapetComponent;
  let fixture: ComponentFixture<FindapetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindapetComponent]
    });
    fixture = TestBed.createComponent(FindapetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
