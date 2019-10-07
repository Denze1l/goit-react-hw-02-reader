import React, { Component } from 'react';
import Publications from '../Publication/Publication';
import PubList from '../publication.json';
import Counter from '../Counter/Counter';
import Controls from '../Buttons/Controls';
import Style from './style.module.css';

class Reader extends Component {
  state = {
    step: 1,
  };

  handelPlus = () => {
    const { step } = this.state;
    if (step < 12) this.setState({ step: step + 1 });
  };

  handelMinus = () => {
    const { step } = this.state;
    if (step > 1) this.setState({ step: step - 1 });
  };

  render() {
    const { step } = this.state;
    return (
      <div className={Style.reader}>
        <Controls handelPlus={this.handelPlus} handelMinus={this.handelMinus} />
        <Counter state={this.state} />
        <Publications step={step} items={PubList} />
      </div>
    );
  }
}

export default Reader;
