import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { loadUrl } from '../modules/repoInfo';

import Noticia from './Detail/Noticia';
import Busqueda from './Detail/Busqueda';

import Trianglify from 'react-trianglify'

class Detail extends Component{
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

			<div id="layout">
			<div style={{position: 'fixed', 'zIndex': -1}}>
					<Trianglify height={window.innerHeight} width={window.innerWidth}/>
				</div>
				<Noticia />
				<Busqueda />
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);