"use client";

import { Layout } from "@/components/layout/layout";
import { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  );
}
