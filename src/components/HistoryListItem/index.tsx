import { History } from 'services/graphql/spacex-histories';
import { formatDateTime } from 'services/format/date';

import HistoryListItemContainer from './HistoryListItemContainer';

const HistoryListItem = (props: Omit<History, 'id'>) => {
  const {
    title,
    details,
    links: { article },
    event_date_utc: date,
  } = props;

  return (
    <HistoryListItemContainer>
      <h1>{title}</h1>
      <time dateTime={date}>{formatDateTime(date)}</time>
      <p>{details}</p>
      <a href={article} target="_blank" rel="noopener noreferrer">
        See details →
      </a>
    </HistoryListItemContainer>
  );
};

export default HistoryListItem;
