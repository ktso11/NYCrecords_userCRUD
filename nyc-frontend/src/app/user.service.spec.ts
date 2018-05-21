import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from './types/user';

describe('UsersService', () =>{
  let service: UserService;
  let httpMock: HttpTestingController;
  let dummyUsers: User[];

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations:[],
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          UserService
        ]
      })
      .compileComponents();

      service = TestBed.get(UserService);
      httpMock = TestBed.get(HttpTestingController);
      
      this.dummyUsers = [{ 
          id: 1,
          username: 'string',
          firstname: 'string',
          lastname: 'string',
          email: 'string'  
      }];
    }));

    it('getAllUsers() should return success', async(() => {
      service.getAllUsers()
      .subscribe(res => {
      // When observable resolves, result should match test data
        expect(res).toEqual(this.dummyUsers);
        expect(res.length).toBe(1);
      });
  
  // The following `expectOne()` will match the request's URL.    
      let mock = httpMock.expectOne('/api/users');

      // Assert that the request is a GET.
      expect(mock.request.method).toBe("GET");
      
      // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
      mock.flush(this.dummyUsers);
      
      // Finally, assert that there are no outstanding requests.
      httpMock.verify();
    }))
});
