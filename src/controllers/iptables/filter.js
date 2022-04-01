var Filter = require('../../models/iptables/filter');

exports.render = async function (req, res) {
  var defaultComponent = new Filter(req, res);

  await defaultComponent.initialize();
  
  var Filterlist = await defaultComponent.getFilterList();

  res.render('tmpl/nat-filter.html', { items: Filterlist});
}
