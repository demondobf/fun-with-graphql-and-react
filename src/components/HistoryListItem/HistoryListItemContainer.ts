import styled from 'styled-components/macro';

const HistoryListItemContainer = styled.article`
  padding: 1em;
  border: 1px solid #eaeaea;
  border-radius: 5px;

  transition: box-shadow 300ms ease;

  :hover,
  :focus {
    box-shadow: 0 0 20px -5px hsla(0, 0%, 0%, 0.2);
  }
`;

export default HistoryListItemContainer;
