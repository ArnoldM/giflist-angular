import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  template: `
    <mat-toolbar>
      <mat-form-field appearance="outline">
        <input
          type="text"
          matInput
          placeholder="subreddit..."
          [formControl]="subredditFormControl"
        />
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
    </mat-toolbar>
  `,
  imports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  styles: [
    `
      mat-toolbar {
        height: 80px;
      }

      mat-form-field {
        width: 100px;
        padding-top: 20px;
      }
    `,
  ],
})
export class SearchBarComponent {
  @Input({ required: true }) subredditFormControl!: FormControl;
}
