import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissiondetailComponent } from './components/missiondetail/missiondetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissionComponent } from './components/mission/mission.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailComponent,
    MissionComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, FormsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
