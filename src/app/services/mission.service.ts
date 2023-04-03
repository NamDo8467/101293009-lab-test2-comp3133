import { Injectable } from '@angular/core';
import { Mission } from '../Mission';
@Injectable({
  providedIn: 'root',
})
export class MissionService {
  constructor() {}
  private URL: string = 'https://api.spacexdata.com/v3/launches';
  async getMissionList() {
    let missionList: Mission[] = [];
    missionList = await (await fetch(this.URL)).json();
    return missionList;
  }

  async getMissionListByYear(year: any) {
    let missionList: Mission[] = [];
    missionList = await (await fetch(`${this.URL}?launch_year=${year}`)).json();
    return missionList;
  }
}
