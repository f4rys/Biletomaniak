import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookingFormComponent } from './delete-booking-form.component';
import { FormsModule } from '@angular/forms';

describe('DeleteBookingFormComponent', () => {
  let component: DeleteBookingFormComponent;
  let fixture: ComponentFixture<DeleteBookingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [DeleteBookingFormComponent]
    });
    fixture = TestBed.createComponent(DeleteBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
