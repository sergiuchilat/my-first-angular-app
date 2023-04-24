import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../auth/services/auth.service';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [ListComponent, CreateComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        TranslateModule,
    ],
  providers: [AuthService],
})
export class TodoModule {}
