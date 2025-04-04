import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces/github-issue.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'issue-item',
  imports: [CommonModule,RouterLink],
  templateUrl: './issue_item.component.html',
})
export class IssueItemComponent {
  issue = input.required<GitHubIssue>();
  issueService = inject(IssueService);

  get isOpen() {
    return this.issue().state === State.Open;
  }

  prefetchData() {
    //this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }

}
