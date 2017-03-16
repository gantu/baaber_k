import {vendorRequests, vendors, Images} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Restaurant from '/lib/restaurants';
import Vendor  from '/lib/vendors';
import vendorRequest from '/lib/vendor_requests';

export default function () {

  Meteor.methods({
    '_vendors.addVendorRequest'(data) {
      check(data,{
        companyName : String,
        companyType: String,
        email : String,
        phone : String
      });
      let emailExists = vendorRequests.findOne({email:data.email});
      if(!emailExists){
        data.createdAt = new Date();
        data.status = "new";
        data.token="";
        vendorRequests.insert(data);
      }else{
        throw new Meteor.Error( 'already-applied', 'Вы уже запрашивали приглашение! Пожалуйста, подождите, мы свяжемся с вами в ближайшее время!');
      }
    },

    '_vendors.approveVendorRequest'(_id){
      check(_id,String);
      var invited=vendorRequest.findOne(_id);

      if(invited.status==="new"){
          invited.status="pending";
          invited.token=Random.hexString( 15 );
          invited.approvedAt=new Date();
          invited.save();
          SSR.compileTemplate( 'inviteEmail', Assets.getText( 'email/templates/invite.html' ) );
          Email.send({
            to: invited.email,
            from: "info@toipoi.kg",
            subject: "You are invited",
            html: SSR.render( 'inviteEmail', {
              url: "http://192.168.43.38:3000/vendors/signup/" + invited.token
            })
          });

      }else{
        throw new Meteor.Error( 'already-invited', 'Sorry, it looks like you\'ve already invited! Hang tight :)' );
      }
    },

    '_vendors.registerVendor'(email,password,_token){
        check(email,String);
        check(password,String);
        check(_token,String);
        var invited=vendorRequest.findOne({token:_token,email:email});
        if(invited){
          var user = {email:email,password:password,roles:['manager']};
          let id=Accounts.createUser({
            email:email,
            password:password,
            profile:{
              name: invited.companyName
            }
          });

          if (user.roles.length > 0) {
            Roles.addUsersToRoles(id, user.roles, 'manager-group');
          }
          var v=new Vendor();
          v.companyName = invited.companyName;
          v.email = invited.email;
          v.phone = invited.phone;
          v.companyType = invited.companyType;
          v.owner.push({id:id});

          if(invited.companyType === "Рестораны"){
            var r=new Restaurant();
            v.additionalData=r;

          }else{
            v.additionalData={};

          }

          v.save();
          invited.status="registered";
          invited.token="";
          invited.save();

        }else{
            throw new Meteor.Error('_vendors.REGISTER_VENDOR_ERROR',"no email with such token");
        }
    },

    '_vendors.saveProfileInfo'(data,_id){
      check(data,{
        companyName : String,
        companyDescription: String,
        address:String,
        city:String,
        email : String,
        phone : String,
        website:String,
        facebook:String
      });
      check(_id,String);

      const vendor = Vendor.findOne(_id);
      function getByValue(arr, value) {

      for (var i=0, iLen=arr.length; i<iLen; i++) {
            if (arr[i].id == value) return arr[i];
        }
      }
      const oneOfOwners = getByValue(vendor.owner,this.userId);
      if(oneOfOwners){
        vendor.companyName = data.companyName;
        vendor.companyDescription = data.companyDescription;
        vendor.address = data.address;
        vendor.email = data.email;
        vendor.city = data.city;
        vendor.phone = data.phone;
        vendor.website = data.website;
        vendor.facebook = data.facebook;
        vendor.save();
      }else{
        throw new Meteor.Error('_vendors.SAVE_PROFILE_INFO',"invalid credentials.");
      }
    },

    '_vendors.uploadProfilePhoto'(data,_id){
      check(data,String);
      check(_id,String);
      let _vendor=Vendor.findOne(_id);
      //if(_restaurant.get('email'))
      Images.update({'_id':data},{$set:{'owner':_id}});
      vendors.update({"_id":_id},{$push:{"photos":data}});
    },

    '_vendors.deleteProfilePhoto'(image_id,record_id){
      check(image_id,String);
      check(record_id,String);
      let role = Roles.userIsInRole(this.userId, ['manager'],'manager-group');
      var vendor = Vendor.findOne({_id:record_id});
      if(vendor.owner === this.userId && role){
        Images.remove({_id:image_id});
      }else{
        throw new Meteor.Error('_vendors.SAVE_PROFILE_INFO',"Permission Denied!")
      }

    }
  });
};
