import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserslistPage } from './userslist.page';

describe('UserslistPage', () => {
  let component: UserslistPage;
  let fixture: ComponentFixture<UserslistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
