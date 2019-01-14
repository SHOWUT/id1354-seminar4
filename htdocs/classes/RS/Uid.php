<?php
namespace RS;
use Id1354fw\View\AbstractRequestHandler;
use RS\Controller\Controller;

class Uid extends AbstractRequestHandler {
    protected function doExecute() {
        if($this->session->get('uid') != null){
			$uid = $this->session->get('uid');
			echo json_encode($uid);
		}
	}
}
?>