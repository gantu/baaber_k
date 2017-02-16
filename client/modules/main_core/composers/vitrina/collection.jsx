import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const collectionComposer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('_vendors.list').ready()) {
    const collection = Collections.vendors.find().fetch();
    var list=[];
    var i;
    for(i=0; i<collection.length; i++){
      Meteor.subscribe('_vendors.images',collection[i]._id);
      var _images=Collections.Images.findOne({owner:collection[i]._id});

      list.push({
        _id: collection[i]._id,
        companyName: collection[i].companyName,
        images:_images
      });
    }
    if(list.length!==0){
        onData(null, {list});
    }else{
      onData();
    }

  }
};

export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps()
  )(component);
