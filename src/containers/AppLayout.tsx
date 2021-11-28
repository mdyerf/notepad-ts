import React from "react";
import AppBars from "../components/AppBars";
import Toast from "../components/Toast";

type LayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: LayoutProps) {
  return (
    <>
      <AppBars />
      <div style={{ marginTop: 63 }}>{children}</div>
      <Toast />
    </>
  );
}

export default AppLayout;
