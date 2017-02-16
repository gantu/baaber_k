import posts from './posts';
import _users from './_users';
import _colors from './_colors';
import _vendors from './_vendors';
import _images from './_images';
import _companyTypes from './company_types';
import _price_requests from './price_requests';

export default function () {
  posts();
  _users();
  _colors();
  _vendors();
  _images();
  _companyTypes();
  _price_requests();
}
