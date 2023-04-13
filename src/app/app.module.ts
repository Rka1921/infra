import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavigationDrawerModule, IgcFormsModule, IgxCardModule, IgxDatePickerModule, IgxInputGroupModule, IgxCheckboxModule, IgxAccordionModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgcFormsModule,
    FormsModule,
    IgxCardModule,
    IgxDatePickerModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
    IgxAccordionModule,
    IgxExpansionPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
