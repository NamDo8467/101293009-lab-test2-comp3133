import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css'],
})
export class MissionComponent {
  @Input() mission: any;
  openMissionDetail: boolean = false;
  constructor() {
    // console.log(this.openMissionDetail)
  }

  toggleOpenMissionDetail() {
    this.openMissionDetail = !this.openMissionDetail;
  }
}
