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
      
        expect(res).toEqual(this.dummyUsers);
        expect(res.length).toBe(1);
      });

      let mock = httpMock.expectOne('/api/users');

      expect(mock.request.method).toBe("GET");
      
      mock.flush(this.dummyUsers);
      
      httpMock.verify();
    }))
});
