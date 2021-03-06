import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { FormControlsComponent } from './form-controls.component';
import { FormControlsStore } from './form-controls.store';

const ROUTES: Routes = [
  {
    path: '', children: [
      { path: '', component: FormControlsComponent },
      { path: 'template-driven', loadChildren: './template-driven/template-driven.module#TemplateDrivenModule' },
      { path: 'reactive', loadChildren: './reactive/reactive.module#ReactiveModule' }
    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    MatCardModule,
    MobxAngularModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    FormControlsComponent
  ],
  providers: [
    FormControlsStore
  ]
})
export class FormControlsModule {}
