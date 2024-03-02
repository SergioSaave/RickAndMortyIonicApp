import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  public characters: Character[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('https://rickandmortyapi.com/api/character')
      .subscribe((res) => {
        this.characters = res.results;
      });
  }
}
