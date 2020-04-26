import { TestBed, async, inject } from '@angular/core/testing';

import { StudentListGuard } from './student-list.guard';

describe('StudentListGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentListGuard]
    });
  });

  it('should ...', inject([StudentListGuard], (guard: StudentListGuard) => {
    expect(guard).toBeTruthy();
  }));
});
