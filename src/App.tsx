import { ReactFCEmptyProps } from './types/react-fc-empty-props.type.ts';

import Host from './Host.tsx';
import './App.scss';
import { AppProvider } from './App.provider.tsx';

const App: ReactFCEmptyProps = () => (
  <AppProvider>
    <Host></Host>
  </AppProvider>
);

export default App;
