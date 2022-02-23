import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface IVideo {
  id: number;
  language: string;
  title: string;
  video_id: string;
  description?: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  endpoint: string = 'https://my-json-server.typicode.com/mathias-poweredsoft/video-database';
  pageSize = 3;

  constructor(private http: HttpClient) { }

  getUrl(route: string) {
    return `${this.endpoint}/${route}`;
  }

  getVideos(page: number) {
    return this.http.get<IVideo[]>(this.getUrl('video'))
      .pipe(
        map((value) => {
          let total = 0;
          return value.filter((video, index, array) => {
            if (index < page * this.pageSize)
              return false;

            if (total >= this.pageSize)
              return false;

            total++;
            return true;
          })
        })
      );
  }
}