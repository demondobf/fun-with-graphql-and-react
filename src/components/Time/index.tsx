import { formatDateTime } from 'services/format/date';
import { Wrapper } from './styles';

interface TimeProps {
  dateTime: string;
}

const Time = ({ dateTime }: TimeProps) => {
  return <Wrapper dateTime={dateTime}>{formatDateTime(dateTime)}</Wrapper>;
};

export default Time;
