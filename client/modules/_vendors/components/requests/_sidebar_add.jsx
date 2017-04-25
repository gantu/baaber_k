import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className="box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title">Добро Пожаловать в BaaBer</h3>

        </div>
        <div className="box-body no-padding">

          <p>Ваш надежный инструмент в развитии вашего Бизнеса.</p>
          <h3>Как это работает</h3>
          <p><strong>Шаг 1:</strong> Оставляете заявку на подключение</p>
          <p><strong>Шаг 2:</strong> Наш специалист быстро подключает вас</p>
          <p><strong>Шаг 3:</strong> Создаете ваш опрос и опубликовываете</p>
          <p><strong>Шаг 4:</strong> Ваши клиенты отвечают на вопросы и оставляют отзывы</p>
          <p><strong>Шаг 5:</strong> Просматриваете результаты в виде удобных диаграмм</p>
          <p><strong>Шаг 6:</strong> Реагируете и повышаете качество </p>
          
        </div>
      </div>
    );
  }
}
