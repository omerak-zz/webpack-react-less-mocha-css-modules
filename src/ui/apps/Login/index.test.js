import domMock from 'test/dom-mock'

import jsdom from 'mocha-jsdom';
import assert from 'assert';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Login from './index';

import styles from './style';


domMock('<html><body></body></html>');

describe('Testing component', function() {
  jsdom({ skipWindowCheck: true });
  const _Login = TestUtils.renderIntoDocument(<Login />);

  it('should contain text: Login', function() {
    const button = TestUtils.findRenderedDOMComponentWithTag(_Login, 'button');
    assert.equal(button.textContent, 'Login');
  });

  it('should contain text: Somegimito', function() {
    const title = TestUtils.findRenderedDOMComponentWithClass(_Login, styles.title);
    assert.equal(title.textContent, 'Somegimito');
  });

  it('should be exist', function() {
    const title = TestUtils.findRenderedDOMComponentWithClass(_Login, styles.subSummary);
    assert.equal(typeof title, 'object');
  });
});
