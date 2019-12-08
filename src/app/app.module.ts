import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//App Modules
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule, routingComponents } from './modules/routing/app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { CompletedPipe } from './pipes/completed.pipe';
import { IncompletedPipe } from './pipes/incompleted.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    routingComponents,
    CompletedPipe,
    IncompletedPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
