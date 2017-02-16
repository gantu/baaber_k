import posts from './posts';
import _users from './_users';
import _colors from './_colors';
import _vendors from './_vendors';
import _communicate from './communicate';

export default function () {
  posts();
  _users();
  _colors();
  _vendors();
  _communicate();
}
