import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { SearchData, Spell } from '../../models';
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
  protected readonly data$: Observable<Array<Spell>>;

  protected searchData: SearchData | undefined;

  constructor(dataService: SpellService, private readonly route: ActivatedRoute,
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

  /*protected doSelect(item: Spell): void {
    
  }*/
}
