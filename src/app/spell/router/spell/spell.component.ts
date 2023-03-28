import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { List, SearchData, Spell } from '../../models';
import { SpellService } from '../../services/spell.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SpellListComponent } from '../../spell-list/spell-list.component';

@Component({
  selector: 'app-spell',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SpellListComponent],
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent {
  protected readonly data$: Observable<List<Spell>>;
  protected searchData: SearchData;

  constructor(
    dataService: SpellService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.searchData = route.snapshot.queryParams;
    this.data$ = route.queryParams.pipe(
      switchMap((params) => dataService.getAll(params))
    );
  }

  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: searchData,
    });
  }
//   doSelect(item: Spell): void {
//     if (item.documentationLink) {
//       window.open(item.documentationLink.href, '_blank');
//     }
// }
}
