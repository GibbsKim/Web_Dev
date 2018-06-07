export default function (kibana) {

  return new kibana.Plugin({
    // https://www.elastic.co/guide/en/kibana/master/development-uiexports.html
    uiExports: {
      visTypes: [
        'plugins/webinar_visualization/webinar_visualization'
      ]
    }
  });
}
