import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GifListComponent, InfiniteScrollModule],
  template: `
    <app-gif-list
      [gifs]="redditService.gifs()"
      infiniteScroll
      (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
      class="grid-container"
    ></app-gif-list>
  `,
  styles: ``,
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
