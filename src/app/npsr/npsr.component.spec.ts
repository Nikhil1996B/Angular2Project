import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsrComponent } from './npsr.component';

describe('NpsrComponent', () => {
  let component: NpsrComponent;
  let fixture: ComponentFixture<NpsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
