import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveListComponent } from './reactive-list.component';

describe('ReactiveListComponent', () => {
  let component: ReactiveListComponent;
  let fixture: ComponentFixture<ReactiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
