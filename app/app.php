<?php

$app = require_once __DIR__ . '/bootstrap.php';

// use Todo\Controllers\TodoController;

/*$app['todo.controller'] = $app->share(function() use ($app) {
  return new TodoController($app);
});

$app->get('/', 'todo.controller::index');*/


// $app->get('/', 'Todo\\Controllers\\TodoController::index');
// $app->get('/show/{name}', 'Todo\\Controllers\\TodoController::show');

return $app;
