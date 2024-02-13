//import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../../interfaces/character.interfaces';
import { OutletContext } from '@angular/router';
//import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({

 // standalone: true,
 // imports: [
 //   CommonModule,
 // ],
 // template: `<p>list works!</p>`,
 selector: 'dbz-list',
 templateUrl:'./list.component.html',
 styleUrl: './list.component.css',
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  @Input()
  public characterList : Character[] = [
    {
      name:'Trunks',
      power:10
    }
  ]
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    // TODO: emitir el ID del persobnaje
    if(!id) return;
    console.log({id})
    this.onDelete.emit(id);
  }
 }
