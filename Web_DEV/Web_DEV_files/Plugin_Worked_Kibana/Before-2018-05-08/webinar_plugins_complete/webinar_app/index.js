export default function (kibana) {

  return new kibana.Plugin({
    uiExports: {
      app: {
        title: 'webinar_app',
        description: 'webinar_app demo',
        main: 'plugins/webinar_app/webinar_app',
        uses: [
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
