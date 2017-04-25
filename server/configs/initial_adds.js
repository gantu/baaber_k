import {companyTypes} from '/lib/collections';

export default function () {
  if(!companyTypes.findOne()){
    var c_types=["Рестораны","Кофейни","Гостиницы"];
    var c_desc=["Лучшие рестораны города","Кофейни","Гостиницы"];
    for(let p=0; p<c_types.length; p++){
      companyTypes.insert( {companyTypeName:c_types[p],description:c_desc[p]} );
    }
  }

}
