import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelistComponent } from './pipelist.component';

describe('PipelistComponent', () => {
  let component: PipelistComponent;
  let fixture: ComponentFixture<PipelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});