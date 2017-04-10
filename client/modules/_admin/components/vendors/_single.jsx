import React from 'react';


import CompanyInfoView from './_company_info.jsx';
import UserInfoView from './_user_info.jsx';
import BranchInfoView from './_branch_info.jsx';
import Tabs from './tabs.jsx';

export default React.createClass({

    getInitialState(){
        var tabList = [
        {
            'id':0,
            'name': 'Информация о Компании',
            'url': '#',
            'content':
                <CompanyInfoView record={this.props.record}/>
        },
        {
            'id':2,
            'name': 'Филиалы',
            'url': '#',
            'content':
                <UserInfoView record={this.props.record} />
        },
        {
            'id':1,
            'name': 'Пользователи',
            'url': '#',
            'content':
                <BranchInfoView record={this.props.record} />
        }
        
    ];


    return {
      tabList: tabList,
      currentTab: 0
    };
  },

  changeTab(index) {
        this.setState({ currentTab: index });
  },
  render(){
        const {record} = this.props;
        return(
            <div>
                <Tabs
                    currentTab={this.state.currentTab}
                    tabList={this.state.tabList}
                    changeTab={this.changeTab}
                />
              <div className="content">
                {this.state.tabList[this.state.currentTab].content}
                </div>
            </div>
        );

  }

});