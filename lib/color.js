import {_colors} from '/lib/collections';
import  { Class }  from 'meteor/jagi:astronomy';

const _color = Class.create({
  name: '_color',
  collection: _colors,
  fields: {
    title : String,
    content : String,
    // permissions: {
    //   type: 'array',
    //   default: function() {
    //     return [];
    //   }
    // },
    // 'phones': {
    //   type: 'array',
    //   nested: 'Phone',
    //   default: function() {
    //     return [];
    //   }
    // },
    // ownerId: 'string',
    // ownerNice: 'string',
  },

  // behaviors: {
  //   timestamp: {
  //     hasCreatedField: true,
  //     createdFieldName: 'createdAt',
  //     hasUpdatedField: true,
  //     updatedFieldName: 'updatedAt'
  //   },
  //   slug: {
  //     fieldName: 'name',
  //     methodName: null,
  //     slugFieldName: 'slug',
  //     canUpdate: true,
  //     unique: true,
  //     separator: '-'
  //   },
  // },

});

export default _color;
