import React from 'react';


export default React.createClass({
    
  
   render(){
    const {collection} = this.props;
                                 
    return(
    
    <div>
    <h3>Survey collection</h3>
    <ul>
        {collection.map(record => (
            <li key={record._id}>
              <a href={`/survey/public/${record._id}`}>{record.name}</a>
            </li>
          ))}
   </ul>
  </div>
    );   
   } 
    
});
