import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { ContentwrapperComponent } from './contentwrapper/contentwrapper.component';
import { ControlsidepanelComponent } from './controlsidepanel/controlsidepanel.component';
import { SitefooterComponent } from './sitefooter/sitefooter.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainheaderComponent,
    ContentwrapperComponent,
    ControlsidepanelComponent,
    SitefooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
