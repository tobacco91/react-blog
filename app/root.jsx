import { Component } from 'react';
import { render } from 'react-dom';
import {Route,IndexRoute, Router, hashHistory} from 'react-router';
import PcIntroduce from './components/pc_introduce';
import PcList from './components/pc_list';
import PcDetails from './components/pc_details';
class Root extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={PcIntroduce}>
                    <IndexRoute component={PcList}></IndexRoute>
                    <Route path="details/:id" component={PcDetails} />
                </Route>
            </Router>
        );
    }
}
render(<Root />,document.querySelector('#app'));