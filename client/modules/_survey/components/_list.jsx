import React from 'react';
import Modal from 'react-modal';
import Editor from './survey_editor/Editor.jsx';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default React.createClass({
    
    getInitialState(){
        return{
            modalIsOpen:false,
            data:null
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
    
    publishSurvey(_id,event){
        event.preventDefault();
        this.props.publishSurvey(_id);
    },
    unPublishSurvey(_id){
        this.props.unPublishSurvey(_id);
    },
    previewSurvey(record,event){
        event.preventDefault();
        this.setState({modalIsOpen:true,data:record});
    },
    
   render(){
    const {collection} = this.props;
                                 
    return(
    
    <div>
    <h3>Survey collection</h3>
     <table className="table">
      <caption><h2></h2></caption>
        <thead>
          <tr>
             <th>Название </th>
             <th>Статус</th>
             <th>Дата </th>
              <th>Collected Data</th>
             <th>Tool </th>
          </tr>
       </thead>
       <tbody>
        {collection.map(record => (
            <tr key={record._id}>
              <td >
                  {record.name}
              </td>
              <td>
                  { record.isPublished ? "Published" : "NotPublished" }
              </td>
              <td>
                  {record.createdAt.toString()}
              </td>
              <td>
                 <a href={`/survey/answer/draw/${record._id}`}> {record.answerCount}</a>
              </td>
              <td>
                  <a className="button" href={`/survey/edit/${record._id}`}><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
                  <a className="button" href="#" onClick={this.publishSurvey.bind(this,record._id)}><span className="glyphicon glyphicon-link" aria-hidden="true"></span></a>
                  <a className="button" href="#" onClick={() => {if(confirm('Unpublish Survey?')) {this.unPublishSurvey(record._id)};}}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
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
          contentLabel="Example Modal"
                >
            <Editor editing={false} survey={this.state.data} />
            </Modal>
            
  </div>
    
    );   
   } 
    
});
