import React, { useMemo } from 'react';
import Navigation from './navigation';

type TLayoutProps = {
  children?: React.ReactNode;
  contain?: boolean;
  title?: string;
};

function Layout({
  children,
  contain = true,
  title = 'Andres'
}: TLayoutProps) {

  const mainContent = useMemo(() => {
    return contain ? (
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    ) : (
      <React.Fragment>{children}</React.Fragment>
    );
  }, [contain, children]);

  return (
    <React.Fragment>
      <Navigation title={title} />
      {mainContent}
    </React.Fragment>
  );
}

export default Layout;
