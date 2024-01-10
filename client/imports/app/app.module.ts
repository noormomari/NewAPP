import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules, RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule,
    RouterModule.forRoot([
      {
        path: 'todoList',
        component: TodoListComponent
      },
      {
        path: 'todoAdd',
        component: TodoAddComponent
      },
      // Home Page
      {
        path: '',
        component: TodoAddComponent
        // redirectTo: '/todoList',
        // pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ], 
    // { preloadingStrategy: PreloadAllModules }
    )
  ],
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
    PageNotFoundComponent
  ],
  providers: [
    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
