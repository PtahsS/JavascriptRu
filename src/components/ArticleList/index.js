import React, {PureComponent} from 'react'
import './style.css'
import Article from '../Article'

export default class Articlelist extends PureComponent {
	render(){
		console.log('---', 2)
	const articleElements = this.props.articles.map((article, index)=>
		<li key={article.id} className="article-list__li">
			<Article article={article} defaultOpen = {index===0} />
		</li>
	)
	return(
		
			<ul>
				{articleElements}
			</ul>
		)
	}
}