interface LinkProps {
  children: React.ReactChild;
  href: string;
}

const Link = ({ children, href }: LinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
