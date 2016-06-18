jest.unmock('../../../../web/static/js/controls/menuLink');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import MenuLink from '../../../../web/static/js/controls/menuLink';

describe('MenuLink', () => {
  it('displays the text in the link', () => {
    const link = TestUtils.renderIntoDocument(
      <MenuLink text="click me" />
    );

    let linkNode = ReactDOM.findDOMNode(link);
    expect(linkNode.textContent).toEqual('click me');
  });

  it('has menu closed initially', () => {
    const link = TestUtils.renderIntoDocument(
      <MenuLink text="click me" />
    );

    let linkNode = ReactDOM.findDOMNode(link);

    expect(isMenuOpen(linkNode)).toBeFalsy();
  });

  it('renders menu after click', () => {
    const link = TestUtils.renderIntoDocument(
      <MenuLink text="click me" />
    );

    let linkNode = ReactDOM.findDOMNode(link);

    TestUtils.Simulate.click(linkNode.getElementsByTagName('a')[0]);

    expect(isMenuOpen(linkNode)).toBeTruthy();
  });

  it('closes menu after window click', () => {
    const link = TestUtils.renderIntoDocument(
      <MenuLink text="click me" />
    );

    let linkNode = ReactDOM.findDOMNode(link);
    TestUtils.Simulate.click(linkNode.getElementsByTagName('a')[0]);

    jest.runAllTimers();

    window.dispatchEvent(new MouseEvent('click'));

    expect(isMenuOpen(link)).toBeFalsy();
  });

  function isMenuOpen(component) {
    const node = ReactDOM.findDOMNode(component);
    const menu = node.getElementsByClassName('menu-window');
    return menu.length == 1;
  }
});
