import { PropsWithChildren, ReactElement } from "react";
import { Sidebar } from "./sidebar";
import "./layout.css";
import { SearchBar } from "./searchBar";
import { AppContainer } from "./appContainer";
//import { BreadCrumbList } from "../navigation/breadcrumbs/breadCrumbList";

export const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <div className="layout">
        <Sidebar />
        {/* <SearchBar /> */}
        {/* <BreadCrumbList /> */}
        <AppContainer>{children}</AppContainer>
      </div>
    </>
  );
};
