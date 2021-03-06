import { resolve } from 'path';
import analyzeRoute from './server/routes/analyze';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'analyze-api-ui-plugin',
    uiExports: { // Kibana 왼편에 ui exporting 할때 쓰임
      app: { // 표시되는 text
        title: 'Analyze UI',
        description: 'UI for elasticsearch analyze API',
        main: 'plugins/analyze-api-ui-plugin/app'
      },
      
      translations: [
        resolve(__dirname, './translations/es.json')
      ],
      hacks: [
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
    
    init(server, options) {
      // Add server routes and initalize the plugin here
      analyzeRoute(server);
    }

  });
};
