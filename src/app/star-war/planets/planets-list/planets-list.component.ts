import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { List, Planet, SearchData } from '../../models';

@Component({
  selector: 'star-war-planets-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent implements OnInit {
  @Input() data!: List<Planet>;
  @Input() search?: SearchData;
  @Output() searchChange = new EventEmitter<SearchData>();
  @Output() itemSelected = new EventEmitter<Planet>();

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
    const search = searchParams?.get('search');
    const page = searchParams?.get('page');
    const searchData = searchParams
      ? {
          ...(search ? { search } : {}),
          ...(page ? { page } : {}),
        }
      : {};
    this.searchChange.emit(searchData);
  }
  protected select(item: Planet): void {
    this.itemSelected.emit(item);
  }
}
