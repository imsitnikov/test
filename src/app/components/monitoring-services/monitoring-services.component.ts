import { Component, OnInit } from '@angular/core';
import { Data, Service } from './monitoring-services.service';

@Component({
  selector: 'app-monitoring-services',
  templateUrl: './monitoring-services.component.html',
  styleUrls: ['./monitoring-services.component.scss'],
  providers: [Service],
})
export class MonitoringServicesComponent implements OnInit {

  data: Data[];

  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getData().subscribe(data => this.data = data);
  }

}
