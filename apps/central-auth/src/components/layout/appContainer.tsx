import { PropsWithChildren, ReactElement } from "react";
import "./appContainer.css";

export const AppContainer = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <div className="app-container">{children}</div>
    </>
  );
};
