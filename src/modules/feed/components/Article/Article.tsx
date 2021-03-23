import Link from 'modules/common/components/Link';
import Time from 'modules/common/components/Time';
import { Wrapper } from './Article.styles';

interface ArticleProps {
  title: string;
  details: string;
  links: Links;
  date: string;
}

interface Links {
  article: string;
}

const Article = ({ title, details, links, date }: ArticleProps) => {
  return (
    <Wrapper>
      <header>
        <h1>{title}</h1>
        <Time date={date} />
      </header>

      <p>{details}</p>
      <Link href={links.article} />
    </Wrapper>
  );
};

export default Article;
