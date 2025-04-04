import { ChangeDetectionStrategy, Component, inject, input, NgModule } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {
  labels = input.required<GitHubLabel[]>();

  issuesService = inject(IssuesService);

  isSelected(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName); //el has regresa un valor booleano
  }

  onToggleLabel(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }

}
