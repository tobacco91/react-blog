import { Component } from 'react';
import PcComment from './pc_comment';
const detailStyle = require('../../build/css/pc_details.css');
export default class PcDetails extends Component {
    constructor() {
        super();
        this.state = {
                title: 'cxy1',
                content: 'ccc111111111111111111111111111111111111',
                date: '2016-01-30',
                id: this.props.params.id
        }
    }
    render() {
        return (
            <div class={detailStyle.main}>
                <header class={detailStyle.header}>
                    <h1 class={detailStyle.title}>{this.state.title}</h1>
                    <p>{this.state.date}</p>
                </header>
                <container>
                    {this.state.content}
                </container>
                <PcComment />
            </div>
        );
    }
}