import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { SearchData } from 'src/app/spell/models';
import { ActivatedRoute, Router } from '@angular/router';
import { Specie } from '../../models';
import { SpecieService } from '../../services/species.service';
import { SpeciesListComponent } from '../../species-list/species-list.component';

@Component({
  selector: 'app-species-list-page',
  standalone: true,
  imports: [CommonModule, SpeciesListComponent],
  templateUrl: './species-list-page.component.html',
  styleUrls: ['./species-list-page.component.scss']
})
export class SpeciesListPageComponent {
  protected readonly data$: Observable<Array<Specie>>;

  protected searchData: SearchData | undefined;

  constructor(dataService: SpecieService, private readonly route: ActivatedRoute,
    private readonly router: Router) {
      this.searchData = route.snapshot.queryParams;
      this.data$ = route.queryParams.pipe(switchMap((params) => dataService.getAll(params)));
    }
  
  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      queryParams: searchData,
      replaceUrl: true,
    });
  }
}
