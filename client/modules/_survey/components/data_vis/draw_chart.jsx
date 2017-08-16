import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Pie,PieChart } from 'recharts';


export default React.createClass({

    render(){
        const {data} = this.props;
        if(data._id.type === "radio"){

            return(
                <div className="row">
                    <h2>{data._id.question}</h2>
                    <div className="row-md-6">
                            <BarChart width={400} height={300} data={data.answers} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                    </div>
                    <div className="row-md-3">
                        {data.answers.map(record => (
                            <p><strong>{record.name}</strong> : {record.value}</p>
                        ))}
                    </div>
                </div>
        );
        }else if(data._id.type === "select"){
            return(
                <div className="row">
                    <h2>{data._id.question}</h2>
                    <div className="row-md-6">
                        <PieChart width={400} height={400}>
                            <Pie isAnimationActive={false} data={data.answers} cx={200} cy={200} outerRadius={130} fill="#0000A0" label/>
                            <Tooltip/>
                        </PieChart>
                    </div>
                    <div className="row-md-3">
                        {data.answers.map(record => (
                            <p><strong>{record.name}</strong>: {record.value}</p>
                        ))}
                    </div>
                </div>
        );
        }else if(data._id.type === "checkbox"){
            return(
                    <div className="row">
                        <h2>{data._id.question}</h2>
                        <div className="row-md-6">
                            <BarChart width={400} height={300} data={data.answers} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </div>
                        <div className="row-md-3">
                            {data.answers.map(record => (
                                <p><strong>{record.name}</strong> : {record.value}</p>
                            ))}
                        </div>
                    </div>
            );
        }else{
            return(<div>
                <h2>{data._id.question}</h2>
                <ul className="list-group">
                    {data.answers.map(record => (
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
