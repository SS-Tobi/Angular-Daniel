import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingsComponent } from './hostings.component';

describe('HostingsComponent', () => {
  let component: HostingsComponent;
  let fixture: ComponentFixture<HostingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
