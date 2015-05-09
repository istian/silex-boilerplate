<?php namespace Application\Controllers;

class DefaultController extends BaseController {

    public function indexAction() {
        return $this->render('Default/index');
    }

}