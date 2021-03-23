import SpacexClient from 'services/api/spacex/client';
import Histories from 'modules/feed/components/Histories';

const App = () => (
  <SpacexClient>
    <Histories />
  </SpacexClient>
);

export default App;
