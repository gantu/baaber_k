import {vendors} from '/lib/collections';
import  { Class }  from 'meteor/jagi:astronomy';

const Vendor = Class.create({
  name: 'Vendor',
  collection: vendors,
  fields: {
    companyName:{
      type: String
    },
    companyType:{
      type: String
    },
    companyDescription:{
      type: String,
      default:''
    },
    address:{
      type: String,
      default:''
    },
    city:{
      type: String,
      default:'bishkek'
    },
    phone:{
      type: String,
      default:''
    },
    email:{
      type:String,
      default:''
    },
    website:{
      type: String,
      default:''
    },
    facebook:{
      type: String,
      default:''
    },
    photos:{
      type:[String],
      default:function(){
        return [];
      }
    },
    owner:{
      type: [Object],
      default:function(){
          return [];
      }
    },
    additionalData:{
      type: Object,
      default: function(){
        return {};
      }
    }
  }

});

export default Vendor;
