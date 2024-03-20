import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, CommandBarComponent],
  imports: [BrowserModule, 
    AppRoutingModule, 
    SharedModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}