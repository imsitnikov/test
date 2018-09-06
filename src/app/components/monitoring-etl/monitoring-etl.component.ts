import { Component, OnInit } from '@angular/core';
import { Data, Service } from './monitoring-etl.service';

@Component({
  selector: 'app-monitoring-etl',
  templateUrl: './monitoring-etl.component.html',
  styleUrls: ['./monitoring-etl.component.scss'],
  providers: [Service],
})
export class MonitoringEtlComponent implements OnInit {

  data: Data[];

  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getData().subscribe(data => this.data = data);
  }

}
