import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, 'error');
    console.log(errorInfo, 'errorInfo');
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);

    this.setState({
      hasError: true,
      error,
    });
  }

  render() {
    const [hasError, children] = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
