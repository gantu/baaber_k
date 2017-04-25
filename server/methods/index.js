
import _users from './_users';

import _vendors from './_vendors';
import _communicate from './communicate';
import _surveys from './_surveys';
import _answers from './_answers';

export default function () {

  _users();

  _vendors();
  _communicate();
  _surveys();
  _answers();
}
