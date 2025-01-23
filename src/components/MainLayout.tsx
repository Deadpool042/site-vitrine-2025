import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  className?: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="max-w-[1440px] min-h-full p-6 space-y-6 flex flex-col items-center mx-auto">
      {children}
    </main>
  );
}

export default MainLayout;
