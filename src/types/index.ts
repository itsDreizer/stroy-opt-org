import { PropsWithChildren, PropsWithRef } from "react";

export interface IButtonProps extends PropsWithChildren {
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  isLink?: boolean;
  href?: string;
  color: string;
}

export interface DefaultProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties | undefined;
}

export interface IRoute {
  path: string;
  element: React.JSX.Element;
}
