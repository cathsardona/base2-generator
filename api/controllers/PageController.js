module.exports = {
  
  generator: function(req, res) {
    var typeName = getTypeName(req.query.type);
    if (typeName) {
      res.view('generator', {
        type: getTypeName(req.query.type)
      });
    } else {
      res.notFound();
    }
  }

};

function getTypeName(type) {
  switch (type) {
    case 'firstPresentment':
      return 'First Presentment';
      break;
    case 'chargeback':
      return 'Chargeback';
      break;
    case 'representment':
      return 'Representment';
      break;
    default:
      return false;
      break;
  };
};