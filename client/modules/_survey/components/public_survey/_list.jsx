import React from 'react';


export default React.createClass({
    
  
   render(){
    const {collection} = this.props;
                                 
    return(
    
    <div className="row">
    <div className="well">
    <h4> Спасибо!</h4>
    <p>Ваше мнение очень важно для нас. Ниже вы найдете все опросы которые мы подготовили чтобы улучшить качество сервисов предостовляемыми нами.  Мы очень просим вас уделить нам время и принять участие в наших опросах.  </p>
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
