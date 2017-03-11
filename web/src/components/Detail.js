import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { loadUrl,loadNew } from '../modules/repoInfo';

import Noticia from './Detail/Noticia';
import Busqueda from './Detail/Busqueda';

import Trianglify from 'react-trianglify'

class Detail extends Component{
	constructor(props){
		super(props);
		this.state = {
			changed: 0
		}
		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		
	}

	handleFieldChange(e){
		this.props.loadUrl({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e){
		this.state.changed <= 0 ? this.setState({changed: 1}) : this.setState({changed: 0});
		this.props.loadNew(this.props.url);
	}

	componentWillMount(){
		console.log(this.props.location)
		console.log(this.props.location.query.url)
		if(this.props.location.query.url){
			const urlToSearch = this.props.location.query.url
			console.log("existe")
			this.props.loadUrl({
				url : urlToSearch
			});
			this.props.loadNew(urlToSearch)
		}
		
		
	}


	render(){

		const noticia = this.state.changed < 1 ? <Noticia/> : '';
		const detail = this.state.changed < 1 ? <Busqueda/> : '';
	
		if(this.state.changed >= 1 ){
			setTimeout(this.handleSubmit,200);
		}



		return(

			<div id="layout">
			<div style={{position: 'fixed', 'zIndex': -1}}>
					<Trianglify height={window.innerHeight} width={window.innerWidth}/>
				</div>
				<div className="col-xs-12" style={{    height: '50px',background: '#757a94', padding: '5px'}}>
				<div id="searchBarPage">

						<div id="urlBoxPage" >
							<input
							id="inputUrlPage"
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

				{noticia}
				{detail}

			</div>
		)
	}
}


const mapStateToProps = state => ({
	url: state.repoInfo.repoInfo.url,
});

const mapDispatchToProps = {
	loadUrl,
	loadNew
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);