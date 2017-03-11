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
	dislike } from '../../modules/repoInfo';


import Trianglify from 'react-trianglify'

class Busqueda extends Component{
	constructor(props){
		super(props);
		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.handleLike = this.handleLike.bind(this);
		this.handleDisLike = this.handleDisLike.bind(this);
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
	}

	handleLike(){
		this.props.like(this.props.url)
	}

	handleDisLike(){
		this.props.dislike(this.props.url)
	}

	render(){

		//console.log(this.props)
		const noticia = this.props.noticia;

		console.log(this.props)

		var veracity = this.props.veracity.accuracy*100;
		const accuracy = veracity.toFixed(2);

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
						<p>{this.props.likes.likes}</p>
					</div>
					<div className="botonFa" onClick={this.handleDisLike}>
						<FontAwesome name='frown-o' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}} />
						<p>{this.props.disLikes.dislikes}</p>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 infoBoxItem">
					<FontAwesome name='twitter' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					{this.props.twitter.tweets} veces retwitteado.
				</div>
				<div className="col-xs-12 col-sm-6 infoBoxItem">
					<FontAwesome name='facebook-official' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					<br></br>
					<FontAwesome name='commenting' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					comment_count {this.props.fb.comment_count}
					<br></br>
					<FontAwesome name='thumbs-up' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					share_count {this.props.fb.share_count}
				</div>
				<div className="col-xs-12 infoBoxItem">
					<FontAwesome name='language' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#ffffff' }} />
					 
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
	veracity: state.repoInfo.veracity
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
	dislike
}

export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);