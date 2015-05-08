<?php

$app = require_once __DIR__ . '/bootstrap.php';

$app->get('/', function () use ($app) {
    return 'Hello, Silex!';
});

return $app;
