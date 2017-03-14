import { BaseRequestOptions, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { environment } from 'environments/environment';

export class BookwormApiRequestOptions extends BaseRequestOptions {
    merge(options?: RequestOptionsArgs): RequestOptions {
        options.url = environment.baseApiUrl + options.url;
        return super.merge(options);
    }
}
  