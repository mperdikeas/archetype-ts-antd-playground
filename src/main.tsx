import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Radio } from 'antd';

class App extends React.Component {
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <>
        <a href='https://stackoverflow.com/q/62677671/274677'>https://stackoverflow.com/q/62677671/274677</a>
        <div>
          <Radio.Group value={1}>
            <Radio style={radioStyle} value={1}>
              Option A
            </Radio>
            <Radio style={radioStyle} value={2}>
              Option B
            </Radio>
            <Radio style={radioStyle} value={3}>
              Option C
            </Radio>
          </Radio.Group>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
