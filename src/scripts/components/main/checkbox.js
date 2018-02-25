import React from 'react';
/*
 * A scrollable list of layers
 * @class LayerList
 * @extends React.Component
 */
export class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  handleChange(e) {
    var boo = !this.state.checked;
    this.setState({
      checked: boo
    });
    this.props.onCheck(boo);
  }
  render() {
    return (
      <div className='checkbox'>
        <input
          type="checkbox"
          id={this.props.id}
          title={this.props.title}
          name={this.props.name}
          checked={this.state.checked}
          className={this.props.classNames}
          onChange={this.handleChange.bind(this)}
        />
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>
      </div>
    );
  }
};
Checkbox.defaultProps = {
  checked: true
};
