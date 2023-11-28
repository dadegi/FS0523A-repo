import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postSrv: PostsService) {
        this.postSrv.recuperaPosts().then((posts) => {
            this.posts = posts;
        });
    }

    ngOnInit(): void {}
}
