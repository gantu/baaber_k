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
      <div>
      <div className="jumbotron">
        <h1>BaaBer -- это!</h1>
        <p className="lead">современная система обратной связи с клиентами и удобный инструмент для проведения онлайн-опросов
</p>
        <p><a className="btn btn-lg btn-success" href="/vendors/requests/add" role="button">Подключить</a></p>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <h2>Как это работает</h2>
          <h3>Все очень просто:</h3>
          <p><strong>Шаг 1:</strong> Оставляете заявку на подключение</p>
          <p><strong>Шаг 2:</strong> Наш специалист быстро подключает вас</p>
          <p><strong>Шаг 3:</strong> Создаете ваш опрос и опубликовываете</p>
          <p><strong>Шаг 4:</strong> Ваши клиенты отвечают на вопросы и оставляют отзывы</p>
          <p><strong>Шаг 5:</strong> Просматриваете результаты в виде удобных диаграмм</p>
          <p><strong>Шаг 6:</strong> Реагируете и повышаете качество </p>
          
        </div>
        <div className="col-lg-4">



          <h2>Насколько это важно?</h2>
          <ul>
            <li>По статистике, более 70% людей, перед покупкой проверяют отзывы о компании в сети</li>
            <li>Если Вы не контролируете репутацию, то теряете минимум 30% клиентов</li>
            <li>70% доверяют при покупке мнению незнакомым людям</li>
            <li>53% оставляют отзывы по поводу оказанных услуг и приобретенных товаров</li>
          </ul>
          
        </div>
        <div className="col-lg-4">
          <h2>В чем польза для бизнеса</h2>
          <ul>
            <li>Узнайте, что думают о вас клиенты</li>
            <li>Собирайте нужные данные, и анализируйте </li>
            <li>Принимайте решения основанные на фактах</li>
            <li>Постоянно улучшайте качество услуги  </li>
          </ul>
          
          
        </div>
      </div>
    </div>   
    );
  }
}
