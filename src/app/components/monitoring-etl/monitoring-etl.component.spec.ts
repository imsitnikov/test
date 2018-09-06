import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringEtlComponent } from './monitoring-etl.component';

describe('MonitoringEtlComponent', () => {
  let component: MonitoringEtlComponent;
  let fixture: ComponentFixture<MonitoringEtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringEtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringEtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
