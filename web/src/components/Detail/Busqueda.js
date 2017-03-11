import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import FontAwesome from 'react-fontawesome';

import { loadUrl,
	loadNew,
	loadLikes,
	loadDislikes,
	loadFb,
	loadTwitter,
	loadLenguageAnalysis,
	loadVeracity,
	like,
	loadrelated,
	dislike } from '../../modules/repoInfo';


import Trianglify from 'react-trianglify'

class Busqueda extends Component{
	constructor(props){
		super(props);
		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.handleLike = this.handleLike.bind(this);
		this.handleDisLike = this.handleDisLike.bind(this);
		this.renderRelated = this.renderRelated.bind(this);
	}

	handleFieldChange(e){
		this.props.loadUrl({
			[e.target.name]: e.target.value
		});
	}

	componentWillMount(){
		this.props.loadLikes(this.props.url);
		this.props.loadDislikes(this.props.url);
		this.props.loadFb(this.props.url);
		this.props.loadTwitter(this.props.url);
		this.props.loadLenguageAnalysis(this.props.url);
		this.props.loadVeracity(this.props.url);
		this.props.loadrelated(this.props.url);
	}

	handleLike(){
		this.props.like(this.props.url)
	}

	handleDisLike(){
		this.props.dislike(this.props.url)
	}

	renderRelated(related){
		var toRender = [];
		console.log(related)
		var auxname = '';
for (var i = 0; i < related.length; i++) {
	console.log(related[i])
	auxname = related[i].name;
  toRender.push(<p><a href={related[i].url} key={i}>-{auxname} </a></p>);
}
			console.log(toRender)
			return toRender;
	}

	calculateMean(sentiments){

		let negative = 0

		var sum = sentiments.reduce((sum, sentiments)=>{
					if( sentiments.score*1 < 0.8 ) return negative++
			}, 0);

		   const total = negative / sentiments.length
		  
		return total;
	}


	render(){

		//console.log(this.props)
		const noticia = this.props.noticia;

		//console.log(this.props)

		var veracity = this.props.veracity.accuracy*100;
		const accuracy = veracity.toFixed(2);

		var mean = 0;
		if(this.props.sentiments){
			var mean = this.calculateMean(this.props.sentiments);
		}
		
		console.log(this.props.related)

		const related = this.props.related.news ? this.renderRelated(this.props.related.news) : '';
		console.log(related)

		return(
			
			<div className="col-xs-12 col-sm-6 noPadding text-center" id="filterBox">
			<p>Veracidad:</p>
			<div id="barOfResume">
			<div id="barOfResumePayload" style={{ width: accuracy+'%' }}> {accuracy}</div>
			</div>

			<h3><span className="soso">Título</span> {noticia.title} </h3>
				<h4><span className="soso">Medio</span> {noticia.source} </h4>
				<h4><span className="soso">Autor</span> {noticia.author} </h4>
				<div className="col-xs-12 infoBoxItemFirst">
					<div className="botonFa" onClick={this.handleLike}>
						<FontAwesome name='smile-o' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}} />
						<p>{this.props.likes.likes ? this.props.likes.likes : 0 }</p>
					</div>
					<div className="botonFa" onClick={this.handleDisLike}>
						<FontAwesome name='frown-o' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}} />
						<p>{this.props.disLikes.dislikes ? this.props.disLikes.dislikes : 0}</p>
					</div>
				</div>
				<div className="col-xs-12 infoBoxItem">
					<FontAwesome name='twitter' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					{this.props.twitter.tweets ? this.props.twitter.tweets : 0 } veces retwitteado.
					<div id="barraTwitter" style={{
					    width: this.props.twitter.tweets*2,
    height: '5px',
    background: '#f8f9fb',
    position: 'absolute',
maxWidth: '100%'}}><div></div></div>
				</div>
				<div className="col-xs-12 infoBoxItem">
					<FontAwesome name='facebook-official' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					<br></br>
					<FontAwesome name='commenting' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					Comentado {this.props.fb.comment_count} veces.
										<div id="barraFBComents" style={{
					    width: this.props.fb.comment_count*2,
    height: '5px',
    background: '#f8f9fb',
    position: 'absolute',
maxWidth: '100%'}}><div></div></div>
					<br></br>
					<FontAwesome name='thumbs-up' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					Compartido {this.props.fb.share_count} veces.
												<div id="barraFBShares" style={{
					    width: this.props.fb.share_count*2,
    height: '5px',
    background: '#f8f9fb',
    position: 'absolute',
maxWidth: '100%'}}><div></div></div>
				</div>
				<div className="col-xs-12 infoBoxItem">
					<FontAwesome name='language' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					{mean < 0.5 ? 'Se trata de un texto negativo' : 'Se trata de un texto positivo'}
					 
				</div>

				<div className="col-xs-12 infoBoxItem">
					<h2>Noticias Relacionadas</h2>
					 {related}
				</div>

			</div>
		)
	}
}


const mapStateToProps = state => ({
	url: state.repoInfo.repoInfo.url,
	noticia: state.repoInfo.noticias,
	likes: state.repoInfo.likes,
	disLikes: state.repoInfo.disLikes,
	fb: state.repoInfo.fb,
	twitter: state.repoInfo.twitter,
	lenguaje: state.repoInfo.lenguaje,
	veracity: state.repoInfo.veracity,
	sentiments: state.repoInfo.lenguaje.sentiments,
	related: state.repoInfo.related
});

const mapDispatchToProps = {
	loadUrl,
	loadNew,
	loadLikes,
	loadDislikes,
	loadFb,
	loadTwitter,
	loadLenguageAnalysis,
	loadVeracity,
	like,
	dislike,
	loadrelated
}

export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);