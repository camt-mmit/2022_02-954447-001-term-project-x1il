import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { House, SearchData } from 'src/app/character/models';
import { HouseService } from 'src/app/character/services/house.service';
import { HouseListComponent } from 'src/app/character/house/house-list/house-list.component';

@Component({
  selector: 'app-house-list-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HouseListComponent],
  templateUrl: './house-list-page.component.html',
  styleUrls: ['./house-list-page.component.scss']
})
export class HouseListPageComponent {
  protected readonly data$: Observable<Array<House>>;

  protected searchData: SearchData | undefined;

  constructor(
    dataService: HouseService, 
    private route: ActivatedRoute, 
    private readonly router: Router,){
    //this.data$ = dataService.getAll({page:'2'});
    // this.searchData = route.snapshot.queryParams;
    // this.data$ = route.queryParams.pipe(
    //   switchMap((params) => dataService.getAll(params)),
    // );
    this.data$ = this.route.queryParams.pipe(
      switchMap((params) => dataService.getAll(params)),
    );
  }
  protected search(searchData:SearchData): void{
    this.router.navigate([],{
      queryParams: searchData,
      replaceUrl: true
    })
  }
  // protected doSelect(item: Student): void{
  //   this.itemSelected.emit(item);
  // }
}
