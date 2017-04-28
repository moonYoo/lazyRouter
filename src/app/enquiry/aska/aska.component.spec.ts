import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskaComponent } from './aska.component';

describe('AskaComponent', () => {
  let component: AskaComponent;
  let fixture: ComponentFixture<AskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
