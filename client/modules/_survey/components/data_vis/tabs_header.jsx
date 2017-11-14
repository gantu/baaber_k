import React from 'react';
import Tab from './tabs';

export default React.createClass({

  handleClick(tab){
        this.props.changeTab(tab);
    },
    render(){
        return (
            <nav>
                <ul className="nav nav-tabs">
                  {this.props.tabList.map(function(tab, index) {
                      return (
                          <Tab
                              handleClick={this.handleClick.bind(this, index)}
                              key={tab.id}
                              url={tab.url}
                              name={tab.name}
                              isCurrent={(this.props.currentTab === index)}
                           />
                      );
                  }.bind(this))}
                </ul>
            </nav>
        );
    }
});