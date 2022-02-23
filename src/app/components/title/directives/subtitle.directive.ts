import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSubtitle]'
})
export class SubtitleDirective {
  constructor(public template: TemplateRef<any>) { }
}
