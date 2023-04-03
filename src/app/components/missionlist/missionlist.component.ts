import { Component, OnInit, Input } from '@angular/core';
import { MissionService } from 'src/app/services/mission.service';
import { Mission } from 'src/app/Mission';
@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  public missionList: Mission[] = [];
  public searchYear: string = '';
  constructor(private missionService: MissionService) {
  
  }
  async ngOnInit() {
    this.missionList = await this.missionService.getMissionList();
    console.log(this.missionList[0]);
    
  }

  async searchByYear() {
    this.missionList = await this.missionService.getMissionListByYear(
      this.searchYear
    );
  }
}
