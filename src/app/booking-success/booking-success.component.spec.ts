import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSuccessComponent } from './booking-success.component';

import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('BookingSuccessComponent', () => {
  let component: BookingSuccessComponent;
  let fixture: ComponentFixture<BookingSuccessComponent>;

  const activatedRouteMock = {
    queryParamMap: of({ get: (key: string) => 'booking123' }),
};

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ BookingSuccessComponent ],
    imports: [RouterTestingModule],
    providers: [
      { provide: ActivatedRoute, useValue: activatedRouteMock }
    ]
  })
  .compileComponents();

  fixture = TestBed.createComponent(BookingSuccessComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
