import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { InputComponent } from './input/input.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';

@NgModule({
    declarations: [
        AppComponent,
        TitleComponent,
        CalendarComponent,
        SelectorComponent,
        InputComponent,
        TasksBoardComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
