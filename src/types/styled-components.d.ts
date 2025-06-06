import 'styled-components';
import type { Theme } from '../theme/theme';
import type { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// Add CSS prop support for React components
declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
