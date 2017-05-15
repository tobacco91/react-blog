import { Component } from 'react';
import { Link } from 'react-router';
const listStyle = require('../../build/css/pc_right.css');
export default class PcList extends Component {
    constructor() {
        super();
        this.state = {
            list : [{
                title: 'cxy1',
                content: 'ccc111111111111111111111111111111111111',
                id: 1
            },
            {
                title: 'cxy2',
                content: 'ccc111111111111111111111111111111111111',
                id: 2
            },
            {
                title: 'cxy3',
                content: 'ccc111111111111111111111111111111111111',
                id: 3
            }]
        }
    }
    // componentDidMount() {

    // }
    render() {
        const block = this.state.list.map((item,index) => {
            return (
                <div class={listStyle.block} key={index}>
                    <Link to={`details/${item.id}`}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <hr />
                    </Link>
                </div>   
            );
        }) 
        return (
            <div class={listStyle.list}>
                {block}
            </div>
        );
    }
}