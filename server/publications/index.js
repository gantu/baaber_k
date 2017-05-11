
import _users from './_users';

import _vendors from './_vendors';
import _images from './_images';
import _companyTypes from './company_types';
import _price_requests from './price_requests';
import _surveys from './_surveys';
import _answers from './_answers';
import _customers from './_customers';

export default function () {

  _users();

  _vendors();
  _images();
  _companyTypes();
  _price_requests();
  _surveys();
  _answers();
  _customers();
}
