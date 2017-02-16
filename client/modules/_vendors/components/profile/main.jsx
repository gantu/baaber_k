import React from 'react';
//import RestaurantForm from './restaurant_form';
import Tabs from './Tabs';
import profileDataComposer from '../../composers/profile/profileData.jsx';
import profileImageComposer from '../../composers/profile/profileImage.jsx';
import GeneralInformationComponent from './general_form';
import ProfileImageComponent from './photo_upload';


const GeneralInformation = profileDataComposer(GeneralInformationComponent);
const ProfileImage = profileImageComposer(ProfileImageComponent);

export default React.createClass({

  getInitialState(){
    var tabList = [
    {
        'id':0,
        'name': 'Информация о Компании',
        'url': '#',
        'content':
            <GeneralInformation />
    },
    {
        'id':1,
        'name': 'Фото',
        'url': '#',
        'content':
            <ProfileImage />
    }
  ];
  

    return {
      tabList: tabList,
      currentTab: 0
    };
  },


/*  uploadProfilePhoto(files){
    this.props.uploadProfilePhoto(files,this.props.record._id);
  },*/

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
