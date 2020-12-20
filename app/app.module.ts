import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './demo-material.module';
import { AppRoutingModule } from './app-routing.module';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { TestRoutingModule } from './test/test-routing.module';
import { TestModule } from './test/test.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestComponent } from './test/test.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    TestRoutingModule,
    AppRoutingModule,
    TestModule
  ],
  entryComponents: [AppComponent],
  declarations: [
    AppComponent,
    WelcomeComponent,
    HelloComponent, 
    SignUpComponent, 
    TestComponent]
  ,
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
