import { IUser, Itens } from './../model/IUser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  path = environment.url;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Itens<IUser>> {
    let apiPath = this.path;
    return this.http.get<Itens<IUser>>(apiPath);
  }
}
