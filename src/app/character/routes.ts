import { Route } from "@angular/router";
import { CharacterComponent } from "./router/character/character.component";
import { StaffListPageComponent } from "./router/staff/staff-list-page/staff-list-page.component";
import { StudentListPageComponent } from "./router/student/student-list-page/student-list-page.component";
import { StudentViewPageComponent } from "./router/student/student-view-page/student-view-page.component";

export const routes: Route[] = [
    {
        path: '',
        component:CharacterComponent,
        children: [
            {path:'',redirectTo: 'student',pathMatch: 'full'},
            {path:'student',component:StudentListPageComponent},
            {path:'student/:id',component: StudentViewPageComponent},

            {path:'staff',component: StaffListPageComponent},
            // {path:'species/:id',component: SpeciesViewPageComponent},
        ],
    },
];