import React from 'react';
import './Header.css';
import { Tabs } from 'antd';
import { MailFilled, TwitterCircleFilled } from '@ant-design/icons';
import tblr from './images/tblr-logo.png';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

export const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        height="180px"
        src="https://img1.pnghut.com/10/14/23/gBKVq6muNP/logo-text-snake-medicine-symbol.jpg"
      />
      <div className="header-details">
        <div className="navbar">
          <div className="border-extend" />
          <Tabs defaultActiveKey="Illustration">
            <TabPane tab={<Link to="/">Illustration</Link>} key="Illustration" />
            <TabPane tab={<Link to="/concept">Concept</Link>} key="Concept" />
          </Tabs>
        </div>
        <div className="socials">
          <a href="https://iris-of-the-lambs.tumblr.com/">
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
