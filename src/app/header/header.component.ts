import { Component,EventEmitter, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements 
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() text: string = '';
  @Output() changer: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes)
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){}


  change() {
    this.changer.emit('Hello 2');
  }
}
