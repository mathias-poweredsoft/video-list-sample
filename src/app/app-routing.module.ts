import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactUsPage } from './pages/contact-us/contact-us.page';
import { HomePage } from './pages/home/home.page';
import { VideoListPage } from './pages/video-list/video-list.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'video-list',
    component: VideoListPage
  },
  {
    path: 'contact-us',
    component: ContactUsPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
