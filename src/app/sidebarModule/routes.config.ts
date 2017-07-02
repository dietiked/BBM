export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'fa fa-home', class: '' },
    { path: '/commodities', title: 'Rohstoffe',  icon:'fa fa-truck', class: '' }
];