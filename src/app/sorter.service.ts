import { Injectable } from '@angular/core';

@Injectable()
export class SorterService {
ascdesc : boolean;

  constructor() { }




private dynamicSort(property) {
    var sortOrder = 1;
   
    if(property[0] === "-") {
        sortOrder = -1;      
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


  sort(table, column){    
     this.ascdesc=!this.ascdesc;
     this.ascdesc ? column=column : column='-'+column;
      table.sort(this.dynamicSort(column));
  }

}
