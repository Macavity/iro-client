import { DetailComponent } from './detail.component';
import { DetailIndexComponent } from './index.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'detail-index', component: DetailIndexComponent,
  children: [
    { path: '', component: DetailComponent }
  ]
};
