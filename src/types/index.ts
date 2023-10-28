import { PropsWithChildren, PropsWithRef } from "react";

export interface IButtonProps extends PropsWithChildren {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export interface DefaultProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties | undefined;
}

export interface IRoute {
  path: string;
  element: React.JSX.Element;
}
