import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { loadUrl,
	loadNew,
	loadLikes,
	loadDislikes,
	loadFb,
	loadTwitter,
	loadLenguageAnalysis } from '../../modules/repoInfo';


import Trianglify from 'react-trianglify'

class Busqueda extends Component{
	constructor(props){
		super(props);
		this.handleFieldChange = this.handleFieldChange.bind(this);
	}

	handleFieldChange(e){
		this.props.loadUrl({
			[e.target.name]: e.target.value
		});
	}

	componentWillMount(){
		//this.props.loadLikes(this.props.url);
		//this.props.loadDislikes(this.props.url);
		this.props.loadFb(this.props.url);
		this.props.loadTwitter(this.props.url);
		this.props.loadLenguageAnalysis(this.props.url);
	}

	render(){

		console.log(this.props)

		return(

			<div className="col-xs-12 col-sm-6 noPadding" id="filterBox">
				<p>Busqueda</p>
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
	lenguaje: state.repoInfo.lenguaje
});

const mapDispatchToProps = {
	loadUrl,
	loadNew,
	loadLikes,
	loadDislikes,
	loadFb,
	loadTwitter,
	loadLenguageAnalysis
}

export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);