import { Route } from '@angular/router';

export declare type Pages = Page[];

export interface Page extends Route {
    icon?: string;
    displayName?: string;
    childPages?: Pages;
}
  
     