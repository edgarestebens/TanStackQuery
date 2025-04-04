import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { CommonModule } from '@angular/common';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from '../../components/issue_item/issue_item.component';

@Component({
  selector: 'app-issues-list-pages',
  imports: [CommonModule,LabelsSelectorComponent,IssueItemComponent],
  templateUrl: './issues-list-pages.component.html',
})
export default class IssuesListPagesComponent {

  issuesService = inject(IssuesService);

  get labelIsQuery(){
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

}
