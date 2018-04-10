import { Pipe, PipeTransform } from "../../panaya-decorators/panaya-decorators";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        return term 
            ? items.filter(item => item.name.toUpperCase().indexOf(term.toUpperCase()) !== -1)
            : items;
    }
}
