import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsidepanelComponent } from './controlsidepanel.component';

describe('ControlsidepanelComponent', () => {
  let component: ControlsidepanelComponent;
  let fixture: ComponentFixture<ControlsidepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsidepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
