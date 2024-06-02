import { PropsWithChildren, ReactElement } from "react";
import { Sidebar } from "./sidebar";
import "./layout.css";
import { SearchBar } from "./searchBar";
import { AppContainer } from "./appContainer";
import { UserMenu } from "../ui/userMenu";
//import { BreadCrumbList } from "../navigation/breadcrumbs/breadCrumbList";

export const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:pt-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="relative ml-auto flex-1 md:grow-0">
            <UserMenu />
          </div>
        </header>
      </div>
      <AppContainer>{children}</AppContainer>
    </div>
  );
};
