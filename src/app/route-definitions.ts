import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooteComponent } from './foote/foote.component';
import { TestComponent } from './test/test.component';
export const appRoutes: Routes = [


    {
       path: '',
       component: MainpageComponent
    },
    {
       path: 'test',
       component: TestComponent
    }
 ];
