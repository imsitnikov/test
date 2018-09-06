var express = require('express');
var fs = require('fs');
var cors = require('cors');

var app = express();
var publicPath = '/public';

var PORT = 3001;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min)) + min;
}

app.use(cors());

app.use(express.static(__dirname + publicPath));

app.get("/api/version", function(req, res){
  res.json({ version: '0.0.1' });
});

app.get("/api/etl", function(req, res) {
  const result = [];
  const rowsCount = getRandomInt(5, 30);
  for (var i = 0; i < rowsCount; i++) {
    result.push({
      name: 'Process #' + (i + 1),
      isWork: [true, false][getRandomInt(0, 1)],
      isError: [true, false][getRandomInt(0, 1)],
      lastStartDate: '2018-' + getRandomInt(1, 12) + '-' + getRandomInt(1, 25),
      lastErrorDate: '2018-' + getRandomInt(1, 12) + '-' + getRandomInt(1, 25),
      lastErrorMessage: ['Some error', 'WTF', 'ERROR CODE 24'][getRandomInt(0, 2)],
    });
  }
  res.json({ "data": result });
});

app.get("/api/hosts", function(req, res) {
  const result = [];
  const rowsCount = getRandomInt(3, 5);
  for (var i = 0; i < rowsCount; i++) {
    result.push({
      name: 'Host #' + (i + 1),
      cpu: Math.random().toFixed(2),
      memory: Math.random().toFixed(2),
      freeDiskSpace: getRandomInt(0, 128),
      fullDiskSpace: ['512', '256', '128'][getRandomInt(0, 2)],
    });
  }
  result.push({
    name: 'Host #' + (rowsCount + 1),
    cpu: 0.9,
    memory: 0.2,
    freeDiskSpace: getRandomInt(0, 128),
    fullDiskSpace: ['512', '256', '128'][getRandomInt(0, 2)],
  });
  res.json({ "data": result });
});

app.get("/api/services", function(req, res) {
  const result = [];
  const rowsCount = getRandomInt(5, 30);
  for (var i = 0; i < rowsCount; i++) {
    result.push({
      name: 'Service #' + (i + 1),
      tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'].slice(0, getRandomInt(1, 5)),
      status: ['Active', 'Paused', 'Inactive'][getRandomInt(0, 2)],
      releaseVersion: ['1.0.0', '1.1.0', '1.1.0-alpha'][getRandomInt(0, 2)],
    });
  }
  res.json({ "data": result });
});

app.get("/api*", function(req, res){
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.use(function(req, res) {
  var content = fs.readFileSync(__dirname + publicPath + '/index.html', 'utf8');
  res.send(content);
});

app.listen(PORT, function(err) {
  if (!err) {
    console.log('**********************************');
    console.log('****  Server is listening on  ****');
    console.log('****  http://localhost:3001/  ****');
    console.log('**********************************');
  }
});
