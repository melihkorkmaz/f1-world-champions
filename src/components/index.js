/**
 * I Have components and containers. The differance between them is
 * redux connection. (mappins state or dispatchs)
 * I separete it to keep components pure and away from bussiness logic.
 * It also allow me to test components without concern about redux.
 */

// Components
export { default as Header } from './common/Header/header.component';
export { default as Drawer } from './common/Drawer/drawer.component';

// Containers
export { default as SeasonsList } from './season/SeasonsList/seasons-list.container';
export { default as SeasonDetails } from './season/SeasonDetails/season-details.container';

