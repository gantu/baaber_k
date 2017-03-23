import {Mongo} from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');
export const Comments = new Mongo.Collection('comments');
export const _colors = new Mongo.Collection('_colors') ;
export const vendorRequests = new Mongo.Collection('vendorRequests');
export const companyTypes = new Mongo.Collection('companyTypes');
export const vendors = new Mongo.Collection('vendors');
export const price_requests = new Mongo.Collection('price_requests');
export const surveys = new Mongo.Collection('surveys');
export const answers =  new Mongo.Collection('answers');

export const Images = new FS.Collection("images", {
    stores: [
      new FS.Store.FileSystem("images"),
      new FS.Store.FileSystem("thumbs", {
        beforeWrite: function(fileObj) {
          // We return an object, which will change the
          // filename extension and type for this store only.
          return {
            extension: 'png',
            type: 'image/png'
          };
        },
        transformWrite: function(fileObj, readStream, writeStream) {
          // Transform the image into a 10x10px PNG thumbnail
          gm(readStream).resize(200,200).stream('PNG').pipe(writeStream);
          // The new file size will be automatically detected and set for this store
        }
      })
    ],
    filter: {
      allow: {
        contentTypes: ['image/*'] //allow only images in this FS.Collection
      }
    }
});

Images.allow({
    insert: function(userId, file) { return true; },
    update: function(userId, files, fields, modifier) {
        return true;
    },
    remove: function(userId, file) { return userId && file.owner === userId; },
    download:function(){return true;}
});
