import { Component, ContentChild, ContentChildren, Input, OnInit } from '@angular/core';
import { SubtitleDirective } from './directives/subtitle.directive';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @ContentChild(SubtitleDirective) subtitle: SubtitleDirective;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }
}
