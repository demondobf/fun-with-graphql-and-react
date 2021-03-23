import { formatDate } from 'services/format/date';
import { StyledTime } from './Time.styles';

interface TimeProps {
  date: string;
}

const Time = ({ date }: TimeProps) => {
  return <StyledTime dateTime={date}>{formatDate(date)}</StyledTime>;
};

export default Time;
