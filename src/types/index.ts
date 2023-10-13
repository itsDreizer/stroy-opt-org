import { PropsWithChildren } from "react";

export interface IButtonProps extends PropsWithChildren {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export interface DefaultProps extends PropsWithChildren {
  className?: string;
  ref?: React.MutableRefObject<null>;
}

export interface IRoute {
  path: string;
  element: React.JSX.Element;
}
