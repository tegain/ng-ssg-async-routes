import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  #http = inject(HttpClient)
  post$!: Observable<Post>

  @Input() id!: string

  ngOnInit () {
    this.post$ = this.#http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
  }
}
