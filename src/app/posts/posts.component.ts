import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  #http = inject(HttpClient)

  posts$!: Observable<Post[]>

  ngOnInit () {
    this.posts$ = this.#http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
