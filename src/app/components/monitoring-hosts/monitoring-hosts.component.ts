import { Component, OnInit } from '@angular/core';
import { Data, Service } from './monitoring-hosts.service';

@Component({
  selector: 'app-monitoring-hosts',
  templateUrl: './monitoring-hosts.component.html',
  styleUrls: ['./monitoring-hosts.component.scss'],
  providers: [Service],
})
export class MonitoringHostsComponent implements OnInit {

  data: Data[];

  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getData().subscribe(data => this.data = data);
  }

  customizeTooltip = (pointsInfo) => {
    return { text: parseInt(pointsInfo.originalValue) + "%" };
  }

}
