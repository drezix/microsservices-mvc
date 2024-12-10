const path = require('path');

const getHomePage = (req, res) => {
  // Corrige o caminho absoluto para o arquivo
  res.sendFile(path.join(__dirname, '../views/index.html'));
};

const { transformName } = require('../models/dataModel');

const processName = (req, res) => {
  const { name } = req.params;
  const transformedName = transformName(name);
  res.json({ originalName: name, transformedName });
};

module.exports = { getHomePage, processName };
