import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  className?: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return <main className="space-y-16">{children}</main>;
}

export default MainLayout;
