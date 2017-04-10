import React from 'react';
// import DataComposer from '../composers/ColorsCollection.jsx';

export default React.createClass({

  render(){
    const {collection}=this.props;
    return (
    <table className="table">
      <caption><h2></h2></caption>
        <thead>
          <tr>
             <th>Название Компании</th>
             <th>Тип компании</th>
             
          </tr>
       </thead>
       <tbody>
        {collection.map(record => (
            <tr key={record._id}>
              <td >
                  <a href={`/admin/vendors/${record._id}`}>{record.companyName}</a>
              </td>
              <td>
                  {record.companyType}
              </td>
              
            </tr>
          ))}
      </tbody>
    </table>
    )
}
});
