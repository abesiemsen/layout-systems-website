import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '@environments/environment';

@Pipe({
  name: 'resourcePath'
})
export class ResourcePathPipe implements PipeTransform {

  transform(
    value: string,
  ): string {
    if (value.toLowerCase().startsWith('http')) {
      return value;
    }
    return environment.resourcePath + value;
  }

}
