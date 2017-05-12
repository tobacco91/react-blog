import { Component } from 'react';
const leftStyle = require('../../build/css/pc_left.css');
export default class PcIntroduce extends Component {
    constructor() {
        super();
        this.state = {
            person : {
				avatarUrl: '/images/touxiang.png',
				title: 'cxy',
				construct: 'ccc111111111111111111111111111111111111'
			}
        } 
    }
    // componentDidMount() {
    //     let method = {
    //         method : 'GET'
    //     }
    //     let url = '';
    //     fetch(url, method)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(json => {
	// 		console.log(json)
    //         this.setState({person: json})
    //     })
    // }
    render() {
		return(
			<div class={leftStyle.left}>
				<div class={leftStyle.cover}>
					<div class={leftStyle.avatar}>
						<img src={this.state.person.avatarUrl} alt="头像" /> 	
					</div>
					<h1>{this.state.person.title}</h1>
					<p>{this.state.person.construct}</p>
					<a class="git">
						<i class="iconfont icon-github"></i>
					</a>
				</div>
			</div>
		);
        
    }
}