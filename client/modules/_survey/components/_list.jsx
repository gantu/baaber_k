import React from 'react';


export default ({collection}) => (
  <div>
    <h3>Survey collection</h3>
    <ul>
      {collection.map(record => (
        <li key={record._id}>
          <a href={`/survey/edit/${record._id}`}>{record.name}</a>
        </li>
      ))}
    </ul>
  </div>
);