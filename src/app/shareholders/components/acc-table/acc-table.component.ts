import { Component } from '@angular/core';

interface Person {
  key: string;
  name: string;

}
@Component({
  selector: 'app-acc-table',
  templateUrl: './acc-table.component.html',
  styleUrls: ['./acc-table.component.css']
})
export class AccTableComponent {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'Colque mamani juan',
    },
    {
      key: '2',
      name: 'peres velasques martin',

    },
    {
      key: '3',
      name: 'lopez Cerezo Carlos',

    },
    {
      key: '1',
      name: 'Colque mamani juan',
    },
    {
      key: '2',
      name: 'peres velasques martin',

    },
    {
      key: '3',
      name: 'lopez Cerezo Carlos',

    },{
      key: '1',
      name: 'Colque mamani juan',
    },
    {
      key: '2',
      name: 'peres velasques martin',

    },
    {
      key: '3',
      name: 'lopez Cerezo Carlos',

    },
  ];
}
