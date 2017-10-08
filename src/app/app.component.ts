import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	teams: Team[];
	
	constructor(private _dataService: DataService) {
	
		this._dataService.getTeams<Team[]>()
			.subscribe(res => { 
				this.teams = res; 
			});
			
	}
}

interface Team {
	Id: number,
	Name: string
}
