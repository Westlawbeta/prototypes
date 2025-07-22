import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as sourcesData from './sources.component.json';

@Component({
  selector: 'app-sources-v4',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.less']
})

export class SourcesComponentv4 {
  @Input() fullReport: boolean = false;
  @Output() onClicked: EventEmitter<any> = new EventEmitter();
  sources = sourcesData;
  currentSource: any = '';

  ngOnInit(): void {
    this.currentSource = this.fullReport ? this.sources.sources : this.sources.sources.slice(0, 4);
  }

  sourceClicked(event: MouseEvent, sourceId:number, snippetId?:string): void {
    this.onClicked.emit([event, sourceId, snippetId]);
}

  activeSnippetIndices: number[] = [];

  constructor() {
    // Initialize activeSnippetIndices for each source
    this.activeSnippetIndices = this.sources.sources.map(() => 0);
  }

  prevSnippet(sourceIndex: number): void {
    if (this.activeSnippetIndices[sourceIndex] > 0) {
      this.activeSnippetIndices[sourceIndex]--;
    }
  }

  nextSnippet(sourceIndex: number): void {
    if (this.activeSnippetIndices[sourceIndex] < this.sources.sources[sourceIndex].snippets.length - 1) {
      this.activeSnippetIndices[sourceIndex]++;
    }
  }
}