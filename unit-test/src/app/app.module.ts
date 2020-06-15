import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostService } from './shared/post.service';
import { AuthenticationComponent } from './authentication/authentication.component';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxJsonViewerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule { }
