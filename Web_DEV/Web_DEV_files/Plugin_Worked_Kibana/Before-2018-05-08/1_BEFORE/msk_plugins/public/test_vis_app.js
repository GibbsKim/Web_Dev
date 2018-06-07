require('ui/autoload/all');
require('ui/routes').enable();
require('ui/chrome');
import './test_vis_app.less';
import './test_vis_app_controller.js';

const app = require('ui/modules').get('apps/msk_plugins', []);

require('ui/routes').when('/', {
  template: require('./test_vis_app.html'),
  reloadOnSearch: false,
});
