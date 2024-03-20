import { ReactElement } from "react";

import "./sidebar.css";
import { Logo } from "../branding/logo";
import Link from "next/link";

export const Sidebar = (): ReactElement => {
  return (
    <>
      <div className="sidebar">
        <Link href="/dashboard">
          <Logo size={"lg"} />
        </Link>
      </div>
    </>
  );
};
