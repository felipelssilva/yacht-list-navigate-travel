
import createHistory from 'history/createBrowserHistory';
import { getLocale } from "./components/Util/ReactRouterQueyryUtils";

const locale = `${getLocale()}`;
export default  createHistory({ basename: locale.pathname });
