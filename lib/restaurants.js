import  { Class }  from 'meteor/jagi:astronomy';

const Restaurant =Class.create({
  name:'Restaurant',
  fields:{
    capacity:{
      type: Number,
      default: 0
    },
    cousine:{
      type: [String],
      default: function(){
        return [];
      }
    },
    audiosystem:{
      type: String,
      default:'no'
    },
    onlinetranslation:{
      type: String,
      default:'no'
    },
    screen:{
      type: String,
      default:'no'
    },
  }
});

export default Restaurant;
