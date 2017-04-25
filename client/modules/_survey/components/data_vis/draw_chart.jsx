import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Pie,PieChart } from 'recharts';


export default React.createClass({
    
    render(){
        const {data} = this.props;
    
        if(data.type === "radio"){
            return(
                <div className="row">
                    <h2>{data.q}</h2>
                    <div className="col-md-9">
                        <PieChart width={800} height={400}>
                            <Pie isAnimationActive={false} data={data.a} cx={200} cy={200} outerRadius={130} fill="#008000" label/>
                            <Tooltip/>
                        </PieChart> 
                    </div>
                    <div className="col-md-3">
                        {data.a.map(record => (
                            <p><strong>{record.name}</strong> : {record.value}</p>
                        ))}
                    </div>
                </div>
        );
        }else if(data.type === "select"){
            return(
                <div className="row">
                    <h2>{data.q}</h2>
                    <div className="col-md-9">          
                        <PieChart width={800} height={400}>
                            <Pie isAnimationActive={false} data={data.a} cx={200} cy={200} outerRadius={130} fill="#0000A0" label/>
                            <Tooltip/>
                        </PieChart> 
                    </div>
                    <div className="col-md-3">
                        {data.a.map(record => (
                            <p><strong>{record.name}</strong>: {record.value}</p>
                        ))}
                    </div>
                </div>
        );            
        }else if(data.type === "checkbox"){
            return(
                    <div className="row">
                        <h2>{data.q}</h2>
                        <div className="col-md-9">  
                            <BarChart width={600} height={300} data={data.a} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </div>
                        <div className="col-md-3">
                            {data.a.map(record => (
                                <p><strong>{record.name}</strong> : {record.value}</p>
                            ))}
                        </div>
                    </div>
            );
        }else{
            
            return(<div>
                <h2>{data.q}</h2>
                <ul className="list-group">
                    {data.a.map(record => (
                        <li className="list-group-item">
                            {record.name}
                        </li>
                    ))}
                </ul>
                    <hr />
                </div>
            );
        }
            

    }
});