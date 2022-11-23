import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  // games: Game = {
  //   id: 0,
  //   title: '',
  //   description: '',
  //   image: '',
  //   created_at: new Date(),
  // };
games:any=[];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.gameService.getGames()
      .subscribe(
        res => {
          this.games = res;
        }
      );
  }
}
