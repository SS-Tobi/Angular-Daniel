import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorAddComponent } from './competitor-add.component';

describe('CompetitorAddComponent', () => {
  let component: CompetitorAddComponent;
  let fixture: ComponentFixture<CompetitorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
