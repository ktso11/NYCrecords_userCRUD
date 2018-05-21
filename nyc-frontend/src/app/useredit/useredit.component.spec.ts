import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UsereditComponent } from './useredit.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

describe('UsereditComponent', () => {
  let component: UsereditComponent;
  let fixture: ComponentFixture<UsereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsereditComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
