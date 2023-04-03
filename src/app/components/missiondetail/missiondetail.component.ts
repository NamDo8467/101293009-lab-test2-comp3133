import { Component, Input } from '@angular/core';
import { Mission } from 'src/app/Mission';
@Component({
  selector: 'app-missiondetail',
  templateUrl: './missiondetail.component.html',
  styleUrls: ['./missiondetail.component.css'],
})
export class MissiondetailComponent {
  @Input() mission: any;
  @Input() toggleOpenMissionDetail: any;

  toggleMissionDetail() {
    // alert("Yes")
    this.toggleOpenMissionDetail();
  }
}
