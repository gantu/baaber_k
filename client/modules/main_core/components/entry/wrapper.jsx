import React from 'react';
import Categories from '../categories/_collection.jsx';
import Vitrina from '../vitrina/_collection.jsx';
// import Container from '../../containers/colors/single.jsx';
import categoriesDataComposer from '../../composers/categories/collection.jsx';
import vitrinaDataComposer from '../../composers/vitrina/collection.jsx';

const CategoriesContainer = categoriesDataComposer(Categories);
const VitrinaContainer = vitrinaDataComposer(Vitrina);

export default class extends React.Component {

  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="jumbotron">
          <h2>Устраивайте <br/>мероприятие <br/>легко!</h2>
            <div className="row">
              
                <p><a href="#"><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> Conferences</a></p>
                <p><a href="#"><span className="glyphicon glyphicon-glass" aria-hidden="true"></span> Parties</a></p>
               
            </div>
        </div>
      </div>
    );
  }
}
