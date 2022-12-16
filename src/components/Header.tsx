import React from 'react';
import './Header.css';
import { Tabs } from 'antd';
import { MailFilled, TwitterCircleFilled } from '@ant-design/icons';
import tblr from './images/tblr-logo.png';
import { Link, useLocation } from 'react-router-dom';

const { TabPane } = Tabs;

export const Header = () => {
  let location = useLocation();
  console.log(location.pathname)
  
  return (
    <div className="header">
      {/* <img
        className="logo"
        height="180px"
        src="https://img1.pnghut.com/10/14/23/gBKVq6muNP/logo-text-snake-medicine-symbol.jpg"
      /> */}
      <h1 className="logo">RISLAMB</h1>
      <div className="header-details">
        <div className="navbar">
          <div className="border-extend" />
          <Tabs defaultActiveKey={location.pathname}>
            <TabPane tab={<Link to="/">Illustration</Link>} key="/" />
            <TabPane tab={<Link to="/concept">Concept</Link>} key="/concept" />
          </Tabs>
        </div>
        <div className="socials">
          <a className="tblr-icon" href="https://iris-of-the-lambs.tumblr.com/">
            <img src={tblr} />
          </a>
          <a href="https://twitter.com/ris_lamb">
            <TwitterCircleFilled />
          </a>
          <a href="mailto:rislamb42@gmail.com">
            <MailFilled />
          </a>
        </div>
      </div>
    </div>
  );
};
