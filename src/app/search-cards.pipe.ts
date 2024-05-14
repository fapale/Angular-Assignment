import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCards'
})
export class SearchCardsPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    var filterCard;
    if(!value ){
      return null;
    }
    if(!args){
      return value;
    }
    // let searchText=args[0];
    // searchText=searchText?.toLowerCase();
    return value.filter((el:any)=>{
      return JSON.stringify(el).toLowerCase().includes(args);
    })
    // console.log("filtered cards",filterCard);
    // console.log("values",value)
    //  return filterCard;
  }

}
