import Home from './pages/Home.svelte';
import AnotherPage from './pages/AnotherPage.svelte';
import NotFound from './pages/NotFound.svelte';

export default {
  '/': Home,
  '/another-page': AnotherPage,
  '*': NotFound,
}
