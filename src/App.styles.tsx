import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.6;
  overflow-x: hidden;
`;
