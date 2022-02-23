import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoListPage } from './pages/video-list/video-list.page';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsPage } from './pages/contact-us/contact-us.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';
import { SpacesPipe } from './pipes/spaces.pipe';
import { TitleComponent } from './components/title/title.component';
import { SubtitleDirective } from './components/title/directives/subtitle.directive';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [AppComponent, VideoListPage, ContactUsPage, HomePage, SpacesPipe, TitleComponent, SubtitleDirective],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
