import { gql } from '@apollo/client';

export type HistoryData = {
  histories: History[];
};

export type History = {
  id: string;
  title: string;
  details: string;
  links: {
    article: string;
  };
  event_date_utc: string;
};

const SPACEX_HISTORIES = gql`
  query {
    histories {
      id
      title
      details
      links {
        article
      }
      event_date_utc
    }
  }
`;

export default SPACEX_HISTORIES;
