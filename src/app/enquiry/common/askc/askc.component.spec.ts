import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskcComponent } from './askc.component';

describe('AskcComponent', () => {
  let component: AskcComponent;
  let fixture: ComponentFixture<AskcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
