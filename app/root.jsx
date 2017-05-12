import { Component } from 'react';
import { render } from 'react-dom';
import PcIntroduce from './components/pc_introduce';
class Root extends Component {
    render() {
        return (
            <PcIntroduce />
        );
    }
}
render(<Root />,document.querySelector('#app'));