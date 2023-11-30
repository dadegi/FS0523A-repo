import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
    post: Post | undefined;

    constructor(private route: ActivatedRoute, private postSrv: PostsService) {}

    ngOnInit(): void {
        this.route.params.subscribe((param) => {
            const id = +param['id'];
            this.post = this.postSrv.recuperaPost(id);
        });
    }
}
