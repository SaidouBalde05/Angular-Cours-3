import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";

@Injectable()
export class PostService{
    constructor(private http: HttpClient){}
    apiUrl = 'http://localhost:3000'

    getPost(): Observable<Post[]>{
        return this.http.get<Post[]>(`${this.apiUrl}/posts`)
    }
    
    addNewComment(postCommented: { comment: string, postId: number }) {
        console.log(postCommented);
    }

}