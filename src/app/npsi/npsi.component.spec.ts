import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsiComponent } from './npsi.component';

describe('NpsiComponent', () => {
  let component: NpsiComponent;
  let fixture: ComponentFixture<NpsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
