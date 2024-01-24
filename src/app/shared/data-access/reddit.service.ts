import { computed, Injectable, signal } from '@angular/core';
import { Gif } from '../interfaces';
import { of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface GifState {
  gifs: Gif[];
}

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  // state
  private state = signal<GifState>({
    gifs: [],
  });
  // selectors
  gifs = computed(() => this.state().gifs);
  // sources
  gifsLoaded$ = of([
    {
      src: '',
      author: '',
      name: '',
      permalink: '',
      title: 'test',
      thumbnail: '',
      comments: 0,
    },
  ]);

  constructor() {
    // reducers
    this.gifsLoaded$.pipe(takeUntilDestroyed()).subscribe((gifs) =>
      this.state.update((state) => ({
        ...state,
        gifs: [...state.gifs, ...gifs],
      })),
    );
  }
}