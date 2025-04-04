import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces/github-issue.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'issue-item',
  imports: [CommonModule,RouterLink],
  templateUrl: './issue_item.component.html',
})
export class IssueItemComponent {
  issue = input.required<GitHubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }
}
