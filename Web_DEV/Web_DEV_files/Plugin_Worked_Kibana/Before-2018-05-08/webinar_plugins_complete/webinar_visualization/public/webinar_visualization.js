import './webinar_visualization.less';
import optionsTemplate from './options_template.html';
import { VisController } from './vis_controller';

import { CATEGORY } from 'ui/vis/vis_category';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { VisSchemasProvider } from 'ui/vis/editors/default/schemas';

function TestVisProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);
  const Schemas = Private(VisSchemasProvider);

  // https://www.elastic.co/guide/en/kibana/master/development-visualization-factory.html#development-base-visualization-type
  return VisFactory.createBaseVisualization({
    name: 'webinar_visualization',
    title: 'Webinar Vis',
    icon: 'fa fa-gear',
    description: 'webinar_visualization test',
    category: CATEGORY.OTHER,
    visualization: VisController,
    visConfig: {
      defaults: {
        // add default parameters
        fontSize: 20
      },
    },
    // https://www.elastic.co/guide/en/kibana/master/development-vis-editors.html#development-default-editor
    editorConfig: {
      optionsTemplate: optionsTemplate,
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'metric',
          title: 'Value Name You Want',
          min: 1,
          aggFilter: ['!derivative', '!geo_centroid'],
          defaults: [
            {type: 'count', schema: 'metric'}
          ]
        }, {
          group: 'buckets',
          name: 'segment',
          title: 'Bucket Split',
          min: 0,
          max: 1,
          aggFilter: ['!geohash_grid', '!filter']
        }

      ]),
    }
  });
}

// register the provider with the visTypes registry
VisTypesRegistryProvider.register(TestVisProvider);
