import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postSrv: PostsService) {
        this.postSrv.recuperaPosts().then((posts) => {
            this.posts = posts;
        });
    }

    ngOnInit(): void {}
}
