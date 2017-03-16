import React from 'react';
import Survey from './survey_editor/Editor.jsx';

export default React.createClass({
    
    
    getInitialState(){
        var example =   {
  "id": "hJVYUldjnf",
  "name": "Music blind test",
  "description": "A sample survey for react-surveys",
  "author": "Hugo Caille <hugo.caille@isen-lille.fr>",
  "questions": [
    {
      "id": 1,
      "name": "Stop the world cause i wanna get off with you",
      "required": false,
      "type": "text"
    },
    {
      "id": 2,
      "name": "Interstate 8",
      "description": "Find the band singing this",
      "required": true,
      "type": "select",
      "options": [
        {
          "id": 1,
          "name": "Moderat"
        },
        {
          "id": 2,
          "name": "Modest Mouse"
        },
        {
          "id": 3,
          "name": "Parquet Courts"
        }
      ]
    },
    {
      "id": 3,
      "name": "How you'll rate Tame Impala's Lonerism",
      "type": "radio",
      "options": [
        {
          "id": 1,
          "name": "1"
        },
        {
          "id": 2,
          "name": "2"
        },
        {
          "id": 3,
          "name": "3"
        },
        {
          "id": 4,
          "name": "4"
        },
        {
          "id": 5,
          "name": "5"
        },
      ]
    },
    {
      "id": 4,
      "name": "Select artists that you like",
      "type": "checkbox",
      "options": [
        {
          "id": 1,
          "name": "Moderat"
        },
        {
          "id": 2,
          "name": "Radiohead"
        },
        {
          "id": 3,
          "name": "The Arctic Monkeys"
        },
        {
          "id": 4,
          "name": "Modest Mouse"
        }
      ]
    }
  ]
};
        return{
          example:example, 
        };
    },
	render(){
		return(
	       <Survey survey={this.state.example} editing={false} />		
		);
	}
});
