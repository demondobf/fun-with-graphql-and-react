interface LinkProps {
  href: string;
  text?: string;
}

const Link = ({ href, text = 'See details →' }: LinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default Link;
