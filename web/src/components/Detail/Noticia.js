import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { loadUrl } from '../../modules/repoInfo';


import Trianglify from 'react-trianglify'

class Noticias extends Component{
	constructor(props){
		super(props);
		this.handleFieldChange = this.handleFieldChange.bind(this);
	}

	handleFieldChange(e){
		this.props.loadUrl({
			[e.target.name]: e.target.value
		});
	}

	render(){
		return(

			<div className="col-xs-12 col-sm-6 noPadding" id="noticiaBox">
				<p>Noticia</p>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	url: state.repoInfo.url,
});

const mapDispatchToProps = {
	loadUrl,
}

export default connect(mapStateToProps, mapDispatchToProps)(Noticias);