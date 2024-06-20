import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowBookingComponent } from './show-booking.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShowBookingComponent', () => {
  let component: ShowBookingComponent;
  let fixture: ComponentFixture<ShowBookingComponent>;

    const activatedRouteMock = {
      queryParamMap: of({ get: (key: string) => '123' }), 
  };

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [ShowBookingComponent],
          imports: [RouterTestingModule],
          providers: [
              { provide: ActivatedRoute, useValue: activatedRouteMock } 
          ]
      });

      fixture = TestBed.createComponent(ShowBookingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should fetch booking data on init', () => {
      expect(component.booking_data_dict).toEqual({ id: '123' }); 
  });

});
