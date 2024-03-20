import { ReactElement } from "react";
import "./logo.css";
import Image from "next/image";

const LogoSize = {
  lg: "lg",
  "2xl": "2xl",
  "4xl": "4xl",
} as const;

export type LogoSize = (typeof LogoSize)[keyof typeof LogoSize];

export interface LogoProps {
  size?: LogoSize;
}

export const Logo = (props: LogoProps): ReactElement => {
  const { size = LogoSize.lg } = props;
  return (
    <div className={`logo text-${size}`}>
      <Image src="/logo.svg" width={100} height={100} alt="Samyco" />
    </div>
  );
};
