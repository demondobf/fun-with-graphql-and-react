import { Wrapper } from './styles';
import Link from 'components/Link';
import Time from 'components/Time';

interface ArticleProps {
  title: string;
  details: string;
  links: {
    article: string;
  };
  event_date_utc: string;
}

const Article = ({ title, details, links, event_date_utc: date }: ArticleProps) => {
  return (
    <Wrapper>
      <header>
        <h1>{title}</h1>
        <Time dateTime={date} />
      </header>
      <p>{details}</p>
      <Link href={links.article}>See details →</Link>
    </Wrapper>
  );
};

export default Article;
