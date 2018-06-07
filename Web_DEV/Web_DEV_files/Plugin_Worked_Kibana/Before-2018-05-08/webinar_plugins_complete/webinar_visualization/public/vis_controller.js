
class VisController {

  constructor(el, vis) {
    // https://www.elastic.co/guide/en/kibana/master/development-vis-object.html
    this.vis = vis;
    this.el = el;
    this.container = document.createElement('div');
    this.container.className = 'myvis-container-div';
    this.el.appendChild(this.container);
  }

  render(visData, status) {
    this.container.innerHTML = '';

    return new Promise(resolve => {

      const table = visData.tables[0];
      const metrics = [];
      let bucketAgg;

      table.columns.forEach((column, i) => {
        if (table.rows.length > 1 && i == 0) {
          bucketAgg = column.aggConfig;
          return;
        }
        table.rows.forEach(row => {
          const value = row[i];
          const title = bucketAgg ? `${row[0]} ${column.title}` : column.title;

          const metricDiv = document.createElement('div');
          metricDiv.className = 'myvis-metric-div';
          metricDiv.innerHTML = `<b>${title}</b>: ${value}`;
          metricDiv.setAttribute('style', `font-size: ${this.vis.params.fontSize}pt`);

          if (bucketAgg) {
            metricDiv.addEventListener('click', () => {
              const filter = bucketAgg.createFilter(row[0]);
              this.vis.API.queryFilter.addFilters(filter);
            });
          }

          this.container.appendChild(metricDiv);
        });
      });

      resolve('when done rendering');
    });
  }

  destroy() {
    this.el.innerHTML = '';
  }
};

export { VisController };
