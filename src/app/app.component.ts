import { Observable } from 'rxjs';
import { IUser, Itens } from './model/IUser';
import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor(private usersService: UsersService) {}

  /**
   * Está chamando a função que está fazendo o controle do que o Observable está notificando
   */
  ngOnInit(): void {
    this.postList();
  }
  

  postList(): void {
    this.usersService.getAllPosts().subscribe((res) => {
      this.POSTS = res;
      console.log(this.POSTS);
    });
  }


  /**
   * @param event -> Será armazenado o número de páginas que terão para guardar os dados
   * Obs.: Vai depender diretamente da função "onTableSizeChange"
   */
  onTableDataChange(event: any): void {
    this.page = event;
    this.postList();
  }


  /**
   * @param event -> Esse "event" vai conter o número de linhas que cada página vai conter
   */
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }
}
