import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class signalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(()=> this.counter()*2);

  constructor() {
    effect(() =>console.log(this.counter())); 
  }

  increment() {
    this.counter.update((oldCounter)=> oldCounter + 1);
    this.actions.mutate((oldActions)=> oldActions.push('INCREMENT'));
    
  }
  set(){
    this.counter.set(this.counter()+1);
    this.actions.mutate((oldActions)=> oldActions.push('SET'));
  }

  decrement() {
    this.counter.update((oldCounter)=> oldCounter - 1);
    this.actions.update((oldActions)=> [...oldActions,' DECREMENT']);
  }
}
