import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { ContentwrapperComponent } from './contentwrapper/contentwrapper.component';
import { ControlsidepanelComponent } from './controlsidepanel/controlsidepanel.component';
import { SitefooterComponent } from './sitefooter/sitefooter.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HrDetailsComponent } from './human-resources/hr-details.component';

const appRoutes: Routes = [
  { path: 'human-resources', component: HumanResourcesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainheaderComponent,
    ContentwrapperComponent,
    ControlsidepanelComponent,
    SitefooterComponent,
    HumanResourcesComponent,
    PageNotFoundComponent,
    DashboardComponent,
    HrDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
