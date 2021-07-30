import { Component, OnInit} from '@angular/core';
import { TournoiservService } from 'tournoi/tournoiserv.service';



@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})


export class ClubsComponent implements OnInit {
  clubList: any[]=[];

  getClubsList(): void{
    this.tournoiserv.getClubs().subscribe(c=>this.clubList=c)
  }
  constructor(private tournoiserv:TournoiservService) { }
  ngOnInit(): void {
    this.getClubsList();
  }



}
