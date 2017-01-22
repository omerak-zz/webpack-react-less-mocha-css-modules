import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import router from './router';

import 'ui/less/main.less';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentRoute: { component: 'div' }
    };

    this.routeChange = this.routeChange.bind(this);
  }

  componentDidMount() {
    router(this.routeChange);
  }

  routeChange(route) {
    this.setState({ currentRoute: route }, () => {
      this.forceUpdate();
    });
  }

  renderComponent(component, props) {
    return component && React.createElement(component, props);
  }

  render() {
    const { component, props } = this.state.currentRoute;

    return (
      <div className="appWrapper">
        <ReactCSSTransitionGroup
          transitionName="anim-route"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <div>
            {this.renderComponent(component, props)}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
