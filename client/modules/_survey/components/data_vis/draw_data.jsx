import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import DrawChart from './draw_chart.jsx';

export default React.createClass({
    getInitialState(){
        return {
            data:[
      {name: 'Мампар', uv: 4000},
      {name: 'Манты', uv: 3000},
      {name: 'Шорпо', uv: 2000},
      {name: 'Лагман', uv: 2780}      ]
        }
    },
    render(){
        const {returnObject}=this.props;
        return(
            <ul>
                
               {returnObject.map(record => (
                        
                    <li key={record._id}>
                        
                        <DrawChart data={record} />
                    </li>
                    
                
                    ))}
                   
            </ul>
        );
      
    }
    
    
});