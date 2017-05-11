import  { Class }  from 'meteor/jagi:astronomy';
import { customer_info } from '/lib/collections';

const Customers = Class.create({
	name:'Customers',
	collection: customer_info,
	fields:{
		contact_details:{
			type:String,
			default:""
		},
		survey_name:{
			type:String
		},
		author:{
			type: String
		}
	}
});

export default Customers;