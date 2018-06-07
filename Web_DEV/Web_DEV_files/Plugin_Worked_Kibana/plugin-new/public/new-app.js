require('ui/autoload/all');
require('ui/routes').enable();
require('ui/chrome');
import './test_vis_app.less'; /// CSS part /* Need for edit */
import './new-app-controller.js';

const app = require('ui/modules').get('apps/kibana_sample_plugin', []);

require('ui/routes').when('/', {
  template: require('./new-app.html'),
  reloadOnSearch: false,
});
