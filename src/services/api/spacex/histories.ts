import { gql } from '@apollo/client';

export type HistoriesData = {
  histories: History[];
};

export type History = {
  id: string;
  title: string;
  details: string;
  links: {
    article: string;
  };
  date: string;
};

export const GET_SPACEX_HISTORIES = gql`
  query {
    histories {
      id
      title
      details
      links {
        article
      }
      date: event_date_utc
    }
  }
`;
