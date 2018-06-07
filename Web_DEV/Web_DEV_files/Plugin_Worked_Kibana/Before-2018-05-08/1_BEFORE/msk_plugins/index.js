export default function (kibana) {

  return new kibana.Plugin({
    uiExports: {
      app: {
        title: 'Show Visualize (test)',
        description: 'This is a sample plugin to test using existing kibana visualizations',
        main: 'plugins/msk_plugins/test_vis_app',
        uses: [  // these are needed if you need to show exiting kibana visualizations
          'visTypes',
          'visResponseHandlers',
          'visRequestHandlers',
          'visEditorTypes',
          'savedObjectTypes',
          'spyModes',
          'fieldFormats',
        ],
        injectVars: (server) => {
          return server.plugins.kibana.injectVars(server);
        }
      }
    }
  });
}
