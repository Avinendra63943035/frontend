import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './Dashboard';

describe('DashboardComponent'), () => {

  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should have user name', () => {
    expect(component.user.name).toEqual('kapil sharma');
  });

};