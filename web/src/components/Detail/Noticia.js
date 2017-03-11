import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { loadUrl, loadNew } from '../../modules/repoInfo';


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

	componentDidMount(){
		this.props.loadNew(this.props.url);
	}

	render(){

		var text  = "<div><span> </span><p>La Europa que avanza por partes, con una locomotora m&#xE1;s r&#xE1;pida y una cola m&#xE1;s rezagada, amenaza con convertirse en la nueva se&#xF1;a de identidad de la UE <em>postbrexit</em>. Temerosos de que este concepto sirva para castigar a Estados que desaf&#xED;an a la mayor&#xED;a, los socios del Este se oponen con fuerza a <a href=\"http://elpais.com/tag/europa_dos_velocidades/a\" target=\"_blank\">las velocidades m&#xFA;ltiples</a>. &#x201C;La diferencia de velocidades en el desarrollo abrir&#xED;a la puerta a construir clubes de &#xE9;lites y a dividir la Uni&#xF3;n Europea&#x201D;, ha alertado rotunda la primera ministra polaca, <a href=\"http://internacional.elpais.com/internacional/2015/10/25/actualidad/1445806394_501138.html\" target=\"_blank\">Beata Szydlo</a>, al t&#xE9;rmino del encuentro de la UE a 27 Estados (sin Reino Unido) celebrado este viernes en Bruselas. La gobernante polaca interpreta el debate como un intento de los miembros <em>pata negra</em> de la UE de &#x201C;imponer soluciones&#x201D; a los &#xFA;ltimos en sumarse al proyecto.</p><span> </span> <a target=\"_blank\"></a> <span> </span><p>Con m&#xE1;s o menos matices, esta visi&#xF3;n es compartida por todo el bloque del Este, frente a la opci&#xF3;n m&#xE1;s pragm&#xE1;tica del oeste de Europa para seguir adelante. &#x201C;El esp&#xED;ritu de esta UE a varias velocidades es abierto e inclusivo; hay que aceptar que algunos pa&#xED;ses pueden avanzar m&#xE1;s r&#xE1;pidamente que otros&#x201D;, contrapuso la canciller alemana, <a href=\"http://elpais.com/tag/angela_merkel/a\" target=\"_blank\">Angela Merkel</a>, en una comparecencia posterior a la reuni&#xF3;n de jefes de Estado y de Gobierno.</p><span> </span><p>Los l&#xED;deres de las instituciones en Bruselas tratan de evitar ese eje Este/Oeste. &#x201C;Veo con sorpresa que esto parece una nueva l&#xED;nea divisoria, un nuevo tel&#xF3;n de acero entre el Este y el Oeste. El punto de partida debe ser avanzar juntos como uni&#xF3;n. Despu&#xE9;s, si algunos quieren hacer m&#xE1;s, pueden hacerlo&#x201D;, expuso el presidente de la Comisi&#xF3;n Europea, Jean-Claude Juncker, tratando de quitar hierro a la disyuntiva. Tanto &#xE9;l como el presidente del Consejo, <a href=\"http://internacional.elpais.com/internacional/2017/03/09/actualidad/1489090204_378971.html\" target=\"_blank\">Donald Tusk</a>, insisten en que la uni&#xF3;n a varias velocidades ya existe (en proyectos como el euro o Schengen) y, por tanto, el futuro no tiene por qu&#xE9; ser diferente. &quot;Si quieres ir r&#xE1;pido, ve solo; si quieres ir m&#xE1;s lejos, vamos juntos&quot;, ilustr&#xF3; Tusk, m&#xE1;s sensible a las cuitas de los nuevos miembros de la UE.</p><span> </span><p>Aun as&#xED;, los socios son conscientes de que el alejamiento -en algunas materias- de los socios del Este es peligroso. Para intentar resta&#xF1;ar las heridas, tres de los fundadores de la UE (los pa&#xED;ses integrados en Benelux) han convocado una especie de <a href=\"http://internacional.elpais.com/internacional/2016/05/08/actualidad/1462721307_354188.html\" target=\"_blank\">minicumbre con el bloque del Este</a>. Se celebrar&#xE1; antes de verano.</p><span> </span><h3>Grupos de poder</h3><span> </span><p>Los clubes de Estados dentro de una UE cada vez m&#xE1;s diversa han ganado peso en los &#xFA;ltimos a&#xF1;os. Y aunque el eje francoalem&#xE1;n sigue marcando el tono en asuntos clave, el proyecto comunitario se ha atomizado en diferentes grupos. El de Visegrado, que aglutina a Polonia, Hungr&#xED;a, Rep&#xFA;blica Checa y Eslovaquia, ha adquirido un gran protagonismo, en buena medida como voz cr&#xED;tica a las pol&#xED;ticas de reparto de refugiados entre los socios comunitarios.</p><span> </span><p>Los viejos Estados miembros quieren evitar que ese alejamiento se consagre en un momento en que toca redefinir el futuro tras la salida de Reino Unido. Para tratar de tender puentes, los Gobiernos de Holanda, B&#xE9;lgica y Luxemburgo han lanzado una invitaci&#xF3;n formal al di&#xE1;logo a los miembros de Visegrado. La cita ser&#xE1; en La Haya antes de verano.</p><span> </span><p>&#x201C;Como Benelux, queremos trabajar duro para desempe&#xF1;ar un papel positivo en el debate sobre el futuro de la UE&#x201D;, ha argumentado el primer ministro holand&#xE9;s, Mark Rutte, que ha comparecido junto a sus hom&#xF3;logos belga, Charles Michel, y luxemburgu&#xE9;s, Xavier Bettel. Este mismo n&#xFA;cleo duro de pa&#xED;ses peque&#xF1;os pero fundadores ha invitado a los b&#xE1;lticos (Estonia, Letonia y Lituania) para final de a&#xF1;o.</p><span> </span><p>Sobre la mesa estar&#xE1;n los principales asuntos que marcar&#xE1;n el futuro de la UE, incluida la migraci&#xF3;n, seg&#xFA;n las fuentes consultadas. La primera pretensi&#xF3;n era celebrar el encuentro en breve, antes de que la UE se haga su foto de aniversario (el pr&#xF3;ximo 25 de marzo se celebran los 60 a&#xF1;os del Tratado de Roma, el texto fundacional de la UE). Finalmente ser&#xE1; &#x201C;antes de verano&#x201D;, seg&#xFA;n fuentes diplom&#xE1;ticas.</p><span> </span></div>";
		console.log(this.props.noticia)
		const noticia = this.props.noticia;
		return(

			<div className="col-xs-12 col-sm-6 noPadding text-center" id="noticiaBox">
				<h1>{noticia.title}</h1>
				<h2 style={{'color': '#b1abab',
    			'fontSize': '1.5em'}}>{noticia.description}</h2>
				<img className="imageNew" src={noticia.image}></img>
				<br></br>
			<div className="htmlNew" dangerouslySetInnerHTML={{ __html: noticia.content }} ></div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	url: state.repoInfo.repoInfo.url,
	noticia: state.repoInfo.noticias
});

const mapDispatchToProps = {
	loadUrl,
	loadNew
}

export default connect(mapStateToProps, mapDispatchToProps)(Noticias);