import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input {
  @Input() title: string = 'app works!';
  mensajes: string[] = [];
  contador: number = 0;

  hacerClick(): void {
    this.contador++;
    this.title += " pulsa " + this.contador;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ng("ngOnChanges");
  }

  ngOnInit() {
    this.ng("ngOnInit");
  }

  ngDoCheck(){
    this.ng("ngDoCheck");
  }

  ngAfterContentInit(){
    this.ng("AfterContentInit");
  }

  ngAfterContentChecked(){
    this.ng("AfterContentChecked");
  }

  ngAfterViewInit(){
    this.ng("AfterViewInit");
  }

  ngAfterViewChecked(){
    this.ng("AfterViewChecked");
  }

  ng(nombreMetodo: string) {
    this.mensajes.push(new Date().toISOString() + ": " + nombreMetodo);
  }
}
