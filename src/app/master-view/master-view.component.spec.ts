import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDatePickerModule, IgxInputGroupModule, IgxCheckboxModule, IgxAccordionModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { MasterViewComponent } from './master-view.component';

describe('MasterViewComponent', () => {
  let component: MasterViewComponent;
  let fixture: ComponentFixture<MasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDatePickerModule, IgxInputGroupModule, IgxCheckboxModule, IgxAccordionModule, IgxExpansionPanelModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
