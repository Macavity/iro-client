export { DetailComponent } from './detail.component';
export { DetailIndexComponent } from './index.component';

console.log('`DetailComponent` bundle loaded asynchronously');
// Must be exported for WebpackAsyncRoute
export * from './routes';
