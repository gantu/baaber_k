import React from 'react';
// import DataComposer from '../composers/ColorsCollection.jsx';

export default class extends React.Component{

  render(){
    const {collection}=this.props;
    return (
    <table className="table">
      <caption><h2></h2></caption>
        <thead>
          <tr>
             <th>Название Компании</th>
             <th>Статус</th>
             <th>Дата Заявки</th>
          </tr>
       </thead>
       <tbody>
        {collection.map(record => (
            <tr key={record._id}>
              <td >
                  <a href={`/vendors/requests/${record._id}`}>{record.companyName}</a>
              </td>
              <td>
                  {record.status}
              </td>
              <td>
                  {record.createdAt.toString()}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    )
}
};
