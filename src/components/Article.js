import React, {Component, PureComponent} from 'react'

export default class Article extends PureComponent{
	constructor(props){
		super(props)
		this.state={isOpen:props.defaultOpen}
	}
	/*shouldComponentUpdate(nextProps, nextState){
		return this.state.isOpen !=nextState.isOpen
	}*/
	componentWillMount(){
		console.log('---','mounting')
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.defaultOpen !==this.props.defaultOpen) this.setState({
			isOpen:nextProps.defaultOpen})
	}
	componentWillUpdate(){
		console.log('---','will update')
	}
	render(){
		const {article}=this.props;
		const body=this.state.isOpen && <section>{article.text}</section>
		return(
			<div className="mx-auto">
				<div className="card-header">
					<h2 >{article.title}
						<button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">{this.state.isOpen ? 'close': 'open'}</button>
					</h2>
				</div>
				<div className="card-body">
					<h6 className="sybtitle text-muted">
						creation date:{(new Date(article.date)).toDateString()}
					</h6>
					{body}
				</div>
			</div>
			
		)
	}
	handleClick=()=>{
		this.setState({isOpen:!this.state.isOpen})
	}
}