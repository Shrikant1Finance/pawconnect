import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosComponent } from './ngos.component';

describe('NgosComponent', () => {
  let component: NgosComponent;
  let fixture: ComponentFixture<NgosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgosComponent]
    });
    fixture = TestBed.createComponent(NgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
