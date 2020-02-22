import React from 'react';

export class Tabs extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <button type="button" className="btn btn-info">Month</button>
        <button type="button" className="btn btn-info">Week</button>
        <button type="button" className="btn btn-info">Day</button>
      </div>
    );
  }
}
