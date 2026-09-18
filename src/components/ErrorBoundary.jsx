import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Unrecoverable application error', { message: error.message, componentStack: info.componentStack });
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="flex min-h-screen items-center justify-center bg-navy-950 px-6 text-center">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold text-offwhite">Something went wrong</h1>
          <p className="mt-4 text-offwhite/75">Please reload the page. If the problem continues, contact SASTRAVA directly.</p>
          <button type="button" onClick={() => window.location.reload()} className="mt-8 min-h-11 rounded-xl bg-gold-DEFAULT px-5 font-semibold text-navy-950">
            Reload page
          </button>
        </div>
      </main>
    );
  }
}
