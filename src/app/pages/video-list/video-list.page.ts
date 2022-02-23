import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IVideo, VideoService } from 'src/app/services/video.service';
import { finalize } from 'rxjs/operators'

@Component({
  templateUrl: './video-list.page.html',
  styleUrls: ['./video-list.page.scss']
})

export class VideoListPage implements OnInit {

  videos: IVideo[] = [];
  page: number = 0;
  atEnd: boolean = false;
  loading: boolean = false;

  constructor(private videoService: VideoService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getVideos()
  }

  getVideoUrl(videoId: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}?rel=0&controls=0&&showinfo=0&playlist=${videoId}`);
  }

  getVideos(target?: any) {
    this.loading = true;
    this.videoService.getVideos(this.page)
      .pipe(
        finalize(() => {
          this.page += 1;
          if (target) {
            target.complete();
          }
          
          this.loading = true;
        })
      )
      .subscribe((results) => {
        if (results.length === 0) {
          this.atEnd = true;
        }

        this.videos = [
          ...this.videos, 
          ...results
        ];
      }, (error) => {
        console.error(error);
      });
  }

  loadData(event: Event) {
    const target = event.target as any;
    this.getVideos(target);
  }
}