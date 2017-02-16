import {Posts} from '/lib/collections';
import {companyTypes} from '/lib/collections';

export default function () {
  if (!Posts.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      Posts.insert({title, content});
    }
  }
  if(!companyTypes.findOne()){
    var c_types=["Рестораны","Фотографы/Видеооператоры","Флористы","Пригласительные","Свадебные платья/Мужские костюмы, смокинги"];
    var c_desc=["Лучшие рестораны города","Профессиональные фотографы и видеомейкеры","Талантливые флористы","Красочные пригласительные","Шикарные платья для невест и элегантные костюмы для женихов"];
    for(let p=0; p<c_types.length; p++){
      companyTypes.insert( {companyTypeName:c_types[p],description:c_desc[p]} );
    }
  }

}
