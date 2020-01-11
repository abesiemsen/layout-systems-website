import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { ConfigurationService } from '@app/services';
import { Deliverable } from '@app/definitions';

@Component({
  selector: 'wu-deliverables',
  templateUrl: './deliverables.component.html',
  styleUrls: ['./deliverables.component.scss']
})
export class DeliverablesComponent implements OnInit {

  deliverables: Deliverable[];

  constructor(
    private configuration: ConfigurationService
  ) { }

  ngOnInit() {
    this.configuration.deliverables()
      .then(deliverables => this.deliverables = deliverables);
  }

  public get visibleDeliverables(): Deliverable[] {
    if (!this.deliverables) {
      return [];
    }
    return this.deliverables
      .filter(deliverable => deliverable.hidden !== true);
  }

  deliverablePath(deliverable: Deliverable): string {
    return '/' + deliverable.projectSlug + '/' + deliverable.slug + '/' + deliverable.file;
  }

  formatDate(date: string): string {
    return moment(date).format('MMM D');
  }

}
