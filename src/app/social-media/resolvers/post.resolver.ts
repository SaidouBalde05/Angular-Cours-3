import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Post } from "../models/post.model";
import { PostService } from "../service/post.service";
import { Observable } from "rxjs";
 
@Injectable()
export class PostResolver implements Resolve<Post[]>{
    constructor(
        private postsService: PostService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
        return this.postsService.getPost()
    }
}