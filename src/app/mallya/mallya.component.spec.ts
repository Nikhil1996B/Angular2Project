import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallyaComponent } from './mallya.component';

describe('MallyaComponent', () => {
  let component: MallyaComponent;
  let fixture: ComponentFixture<MallyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
