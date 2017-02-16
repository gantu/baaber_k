import React  from 'react';

export default ({collection}) => (
  <div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Sender</th>
          <th>Event type</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {collection.map(record => (
        <tr key={record._id}>
          <td><a href={`/price_request/${record._id}`}>{record.sender.email}</a></td>
          <td>{record.eventType}</td>
          <td>{record.status}</td>
          <td>{record.createdAt.toString()}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
);
