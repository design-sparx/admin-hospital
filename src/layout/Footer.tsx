import React from 'react';

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4 border-top text-center">
        © {new Date().getFullYear()}&nbsp;
        <a target="_blank" rel="noreferrer" href="https://github.com/kelvins-lab">kelvins-lab</a>.&nbsp;
        <span>Designed with ❤ by</span>&nbsp;
        <a target="_blank" rel="noreferrer" href="https://lnk.bio/kelvink96">Kelvin</a>.&nbsp;
        <span>All rights reserved</span>
      </footer>
    </div>
  );
};

export default Footer;
