import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { loadUrl } from '../modules/repoInfo';

import Trianglify from 'react-trianglify'

class Landing extends Component{
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
				<div>
				<a href="https://www.w3schools.com"><img src="/img/fa-github.svg" alt="github" id="gitIcon"></img></a>
				</div>
	
				<div className="col-xs-12 col-sm-8 col-sm-push-2 text-center" style={{color: '#646464', minHeight: '60vh',
				    top: '10vh',
				        paddingTop: '5vh'}}>
				<h1>Comprueba la veracidad de una noticia por su url</h1>

				<div id="searchBar">

						<div id="urlBox" style={{    width: '95%'}} >
							<input
							id="inputUrl"
							type='url'
							name='url'
							value={this.props.url}
							placeholder='url de la noticia'
							onChange={ this.handleFieldChange } />
						</div>

						

						<Link to="detail">
							<div id="submitBox" className="text-center" onClick={ this.handleSubmit }>
							<span className="glyphicon glyphicon-search"></span>
						</div>
						</Link> 


					</div>

				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	url: state.repoInfo.repoInfo.url,
});

const mapDispatchToProps = {
	loadUrl,
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);