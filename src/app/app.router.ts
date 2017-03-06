import { Routes, Route, RouterState } from '@angular/router';

import { Pages } from './model/common/page.model';

import { DashboardComponent } from './component/dashboard.component';
import { AuthorsComponent } from './component/authors.component';
import { NotFoundComponent } from './component/not-found.component';

const getRoutes = (pageConfig: Pages): Routes => {
    if (!pageConfig)
        return null;

    let routes: Routes;

    routes = pageConfig.filter(page => page.component && page.path || page.redirectTo);

    pageConfig.forEach(page => {
        let childRoutes = getRoutes(page.childPages);

        if (childRoutes)
            routes = routes.concat(childRoutes);
    });

    return routes;
};

const getPages = (pageConfig: Pages): Pages => {
    if (!pageConfig)
        return null;

    let pages: Pages;

    pages = pageConfig.filter(page => page.displayName);

    pages.forEach(page => {
        page.childPages = getPages(page.childPages);
    });

    return pages;
}


const pageConfiguration: Pages = [
    { path: 'dashboard', displayName: 'Dashboard', component: DashboardComponent, icon: 'fa fa-tasks' },
    {
        path: 'books', redirectTo: 'books/add', displayName: 'Kitaplar', icon: 'fa fa-comments', childPages:
        [
            { path: 'books/add', displayName: 'Yeni Kitap', component: AuthorsComponent, icon: 'test' },
            { path: 'books/update', displayName: 'Düzenle', component: AuthorsComponent, icon: 'test' }
        ]
    },
    {
        path: 'authors', redirectTo: 'authors/add', displayName: 'Yazarlar', icon: 'fa fa-cube', childPages:
        [
            { path: 'authors/add', displayName: 'Yeni Yazar', component: DashboardComponent, icon: 'test' },
            { path: 'authors/update', displayName: 'Düzenle', component: DashboardComponent, icon: 'test' }
        ]
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
]

export const routes: Routes = getRoutes(pageConfiguration);
export const pages: Pages = getPages(pageConfiguration);

