import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';

class DataTable extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    showGroups: PropTypes.bool,
    beginSlice: PropTypes.number,
    endSlice: PropTypes.number
  };

  loadChart = (container) => {
    const chart = dc.dataTable(container);
    const helper = this.props.chartHelper(this, chart, false);
    helper.setContextProperties('dimension')
          .setProperties('columns', 'group', 'showGroups', 'beginSlice', 'endSlice');

    chart.render();
  };

  render() {
    return (
      <div className={this.props.className} ref={this.loadChart} />
    );
  }
}

export default Base(DataTable);
