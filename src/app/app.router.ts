import { Routes, Route, RouterState } from '@angular/router';

import { Pages } from './model/common/page.model';

import { DashboardComponent } from './component/common/dashboard.component';
import { PageNotFoundComponent } from './component/common/page-not-found.component';
import { AuthorsComponent } from './component/author/authors.component';
import { AddAuthorComponent } from './component/author/add-author.component';

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
        path: 'books', redirectTo: 'books/add', displayName: 'Kitaplar', icon: 'fa fa-comments', pathMatch:'full', childPages:
        [
            { path: 'books/add', displayName: 'Yeni Kitap', component: AddAuthorComponent, icon: 'test' },
            { path: 'books/update', displayName: 'Düzenle', component: AuthorsComponent, icon: 'test' }
        ]
    },
    {
        path: 'authors', redirectTo: 'authors/add', displayName: 'Yazarlar', icon: 'fa fa-cube', pathMatch:'full', childPages:
        [
            { path: 'authors/add', displayName: 'Yeni Yazar', component: DashboardComponent, icon: 'test' },
            { path: 'authors/update', displayName: 'Düzenle', component: DashboardComponent, icon: 'test' }
        ]
    }
]

const defaultRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch:'full'},
    { path: '**', component: PageNotFoundComponent }
]

export const routes: Routes = getRoutes(pageConfiguration).concat(defaultRoutes);
export const pages: Pages = getPages(pageConfiguration);

