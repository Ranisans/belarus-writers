import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar/Navbar';

interface PropsType {
  children: React.ReactNode;
}

const TemplateWrapper = ({ children }: PropsType) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
