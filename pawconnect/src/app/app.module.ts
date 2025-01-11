import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HealthCheckComponent } from './health-check/health-check.component';
import { NgosComponent } from './ngos/ngos.component';
import { VetsComponent } from './vets/vets.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FindapetComponent } from './findapet/findapet.component';
import { DropzoneComponent } from './components/dropzone/dropzone.component';
import { ProgressComponent } from './components/progress/progress.component';
import { FileUploadInterceptor } from './file-upload.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HealthCheckComponent,
    NgosComponent,
    VetsComponent,
    FindapetComponent,
    DropzoneComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS,
      useClass: FileUploadInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
