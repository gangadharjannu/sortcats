import { XHRBackend, Http, RequestOptions } from '@angular/http';
import { CustomHttpService } from './custom-http.service';

import { LoaderService } from './loader.service';

export function CustomHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, loaderService: LoaderService): Http {
    return new CustomHttpService(xhrBackend, requestOptions, loaderService);
};
