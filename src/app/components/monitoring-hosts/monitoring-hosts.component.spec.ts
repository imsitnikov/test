import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringHostsComponent } from './monitoring-hosts.component';

describe('MonitoringHostsComponent', () => {
  let component: MonitoringHostsComponent;
  let fixture: ComponentFixture<MonitoringHostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringHostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringHostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
