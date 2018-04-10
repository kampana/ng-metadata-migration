import { PipeTransform, Pipe } from "../../panaya-decorators/panaya-decorators";

@Pipe({ name: 'checkmark' })
export class CheckMarkFilter implements PipeTransform {

  transform(value: any, ...args: any[]) {
    return value ? '\u2713' : '\u2718';
  }
}
