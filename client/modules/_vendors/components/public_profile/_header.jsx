import React from 'react';
import Modal from 'react-modal';

import PriceRequest from '../../../communicate/components/price_requests/_form.jsx';
import PriceRequestComposer from '../../../communicate/composers/price_requests/request.jsx';
const Container = PriceRequestComposer(PriceRequest);


const customStyles = {
  content : {
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



export default React.createClass({

  getInitialState() {
    return { modalIsOpen: false };
  },

  openModal() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal() {
    // references are now sync'd and can be accessed.

  },

  closeModal() {
    this.setState({modalIsOpen: false});
  },

  render(){
    const {record}=this.props;

    return(
      <div className="row">
        <div className="col-md-9">
         <h2>{record.companyName}<br></br><small>{record.address}, {record.city}</small></h2>
        </div>
        <div className="col-md-3">
          <div className="list-group">
            <button className="list-group-item list-group-item-info" onClick={this.openModal}>Запросить цены</button>
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <Container closeModal={this.closeModal} vendorId={record._id} />
        </Modal>
      </div>

    )
  }
});
