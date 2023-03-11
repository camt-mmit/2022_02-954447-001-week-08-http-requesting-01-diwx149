import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List, Person, SearchData } from '../../models';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'star-war-people-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit {
  @Input() data!: List<Person>;
  @Input() search?: SearchData;
  @Output() searchChange = new EventEmitter<SearchData>();
  @Output() itemSelected = new EventEmitter<Person>();

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
  protected select(item: Person): void {
    this.itemSelected.emit(item);
  }
}
