import { Component } from 'react';
const commonStyle = require('../../build/css/pc_comment.css');
export default class PcComment extends Component {
    render() {
        const comments = this.state.message;
        const list = comments.length ? comments.map((item,index) => {
            return (
                <div key={index} class={commonStyle.box}>
                    <p class={commonStyle.name}></p>
                    <p class={commonStyle.time}></p>
                    <p class={commonStyle.message}></p>
                </div>
            );
        })
        : '没有留言';
        return(
            <div>
                <div class={commonStyle.list}>
                    {list}
                </div>
                <div class={commonStyle.review}>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <textarea ref="text" placeholder="留言" />
                        <button type="submit"></button>
                    </form>
                </div>
            </div>
        );
    }
}