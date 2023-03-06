import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { List, SearchData, Specie } from 'src/app/models';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss'],
})
export class SpeciesListComponent implements OnInit {
  @Input() data!: List<Specie>;
  @Input() search?: SearchData;
  @Output() searchChange = new EventEmitter<SearchData>();

  protected formGroup!: FormGroup<{
    search: FormControl<string>;
  }>;

  private fb: NonNullableFormBuilder;

  constructor(fb: FormBuilder) {
    this.fb = fb.nonNullable;
  }

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Property 'data' is required!`);
    }

    this.formGroup = this.fb.group({
      search: this.search?.search ?? '',
    });
  }

  protected doSearch(): void {
    this.searchChange.emit(this.formGroup.value);
  }

  protected page(searchParams?: URLSearchParams): void {
    const searchData = searchParams
      ? {
          ...(searchParams.get('search')
            ? { search: searchParams.get('search')! }
            : {}),
          ...(searchParams.get('page')
            ? { page: searchParams.get('page')! }
            : {}),
        }
      : {};
    this.searchChange.emit(searchData);
  }
}
