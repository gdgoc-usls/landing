declare module '@radix-ui/react-icons' {
  import * as React from 'react';

  // You can refine these types if you know the props the icons accept
  export type IconProps = React.SVGProps<SVGSVGElement>;

  export const ArrowRightIcon: React.FC<IconProps>;
  // Add other icons you use here in a similar manner
}
