import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Specie } from '../../models';
import { SpecieService } from '../../services/species.service';
import { SpeciesViewComponent } from '../../species-view/species-view.component';

@Component({
  selector: 'app-species-view-page',
  standalone: true,
  imports: [CommonModule, SpeciesViewComponent],
  templateUrl: './species-view-page.component.html',
  styleUrls: ['./species-view-page.component.scss']
})
export class SpeciesViewPageComponent {
  protected readonly data$: Observable<Specie>;

  constructor(dataService: SpecieService, route: ActivatedRoute) {
    this.data$ = route.params.pipe(
      switchMap((params) => dataService.get(params['id'])),
    );
  }

  protected doBack(): void {
    history.back();
  }
}
