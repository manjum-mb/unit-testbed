import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  let postService: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PostService
      ],
    });

    postService = TestBed.get(PostService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, PostService],
    (httpClient: HttpTestingController, postService: PostService) => {

      const postItem = [
        {
          "userId": 1,
          "id": 1,
          "title": "I like npm",
          "body": "NPM is best pakckage manager ever seen!"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "I like JavaScript",
          "body": "JavaScript is very popular for building native mobile apps"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "I like NodeJS",
          "body": "Node provides JavaScript everywhere paradigm"
        }
      ];

      postService.getPosts()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

      let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
      httpMock.verify();

    })));
});