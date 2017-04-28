import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskbComponent } from './askb.component';

describe('AskbComponent', () => {
  let component: AskbComponent;
  let fixture: ComponentFixture<AskbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
