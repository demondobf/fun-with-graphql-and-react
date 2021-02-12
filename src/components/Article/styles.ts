import styled from 'styled-components';

export const Wrapper = styled.article`
  padding: 1em;
  border: 1px solid #eaeaea;
  border-radius: 5px;

  transition: box-shadow 300ms ease;

  :hover {
    box-shadow: 0 0.9px 3.6px rgba(0, 0, 0, 0.017), 0 2.5px 10px rgba(0, 0, 0, 0.025),
      0 6px 24.1px rgba(0, 0, 0, 0.033), 0 20px 80px rgba(0, 0, 0, 0.05);
  }
`;
