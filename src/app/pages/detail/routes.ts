import { DetailComponent } from './detail.component';
import { DetailIndexComponent } from './index.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'detail', component: DetailComponent,
  children: [
    { path: '', component: DetailIndexComponent }
  ]
};
