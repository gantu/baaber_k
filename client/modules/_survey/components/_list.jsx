import React from 'react';
import Modal from 'react-modal';
import Editor from './survey_editor/Editor.jsx';
import PublishOptions from './publish_options.jsx';

const customStyles = {
 content: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        bottom: 'auto',
        height:'80%',
        minHeight: '10rem',
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '20rem',
        width: '80%',
        maxWidth: '60rem'
      }
};

export default React.createClass({
    
	getInitialState(){
        return{
            modalIsOpen:false,
            modalContent:null
        };
    },
    
    openModal() {
    	this.setState({modalIsOpen: true});
  	},

  	afterOpenModal() {
    	// references are now sync'd and can be accessed.
    	//this.refs.subtitle.style.color = '#f00';
  	},

  	closeModal() {
    	this.setState({modalIsOpen: false});
  	},
    
  	deleteSurvey(_id){
        //event.preventDefault();
  		this.props.deleteSurvey(_id);
  	},
    
	showPublishSurvey(_id,status,event){
    	event.preventDefault();
    	this.setState({modalIsOpen:true,modalContent:<PublishOptions _id={_id} saveAction={this.publishSurvey} status={status} />})
	},

	publishSurvey(_id,event){
		event.preventDefault();
		this.props.publishSurvey(_id);
	},
	unPublishSurvey(_id){
    	this.props.unPublishSurvey(_id);
	},

	previewSurvey(record,event){
    	event.preventDefault();

    	this.setState({modalIsOpen:true,modalContent:<Editor editing={false} survey={record}/>});
	},

	render(){
		const {collection} = this.props;
                             
		return(

			<div>
				<h3>Все опросы</h3>
				<table className="table table-striped table-hover">
					<caption><h2></h2></caption>
				    <thead>
				    	<tr>
				        	<th>Название </th>
				         	<th>Статус</th>
				         	<th>Изменен</th>
				         	<th>Анализ</th>
				         	<th>Редактировать</th>
				         	<th>Опубликовать</th>
				         	<th>Отменить</th>
				         	<th>Предпросмотр</th>
				      	</tr>
				   </thead>
				   <tbody>
				    	{collection.map(record => (
				        	<tr key={record._id}>
				          		<td className="text-center">
				              		{record.name}
				          		</td>
				          		<td className="text-center">
				              		{ record.isPublished ? "Опубликован" : "Неопубликован" }
				          		</td>
				          		<td className="text-center">
				              		{record.lastModified.toISOString().slice(0, 10)}
				          		</td>
					          	<td className="text-center">
					            	<a href={`/survey/answer/draw/${record._id}`}> {record.answerCount}</a>
					          	</td>
					          	<td className="text-center">
					          		<a className="button" href={`/survey/edit/${record._id}`}><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
					          	</td>
					          	<td className="text-center">
					            	<a className="button" href="#" onClick={this.showPublishSurvey.bind(this,record._id,record.isPublished)}><span className="glyphicon glyphicon-link" aria-hidden="true"></span></a>
					          	</td>
					          	<td className="text-center">
					           		<a className="button" href="#" onClick={() => {if(confirm('Unpublish Survey?')) {this.unPublishSurvey(record._id)};}}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
					          	</td>
					          	<td className="text-center">  	
					            	<a className="button" href="#" onClick={this.previewSurvey.bind(this,record)}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
					          	</td>
					        </tr>
				      	))}
				  </tbody>
				</table>

			    <Modal
			      isOpen={this.state.modalIsOpen}
			      onAfterOpen={this.afterOpenModal}
			      onRequestClose={this.closeModal}
			      style={customStyles}
			      contentLabel="Example Modal">
			      	  <button type="button" className="btn btn-danger" onClick={this.closeModal}>Close</button>
			    	 
			    	 <div className="container-fluid">
			    	 	{this.state.modalContent}
			    	 </div>
			    </Modal>
			        
			</div>

		);   
	} 
});