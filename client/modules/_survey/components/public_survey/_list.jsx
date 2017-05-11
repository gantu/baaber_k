import React from 'react';


export default React.createClass({
    
  
   render(){
    const {collection} = this.props;
                                 
    return(
    
    <div className="row">
    <div className="well">
    <h4>Благодарим!</h4>
    
<p>Уважаемый клиент здесь вы можете учавствовать в наших интересных опросах и оставлять ваши отзывы. Ваше мнение очень важно для нас.  </p>
    </div>

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
