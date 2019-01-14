<?php

namespace RS;
use Id1354fw\View\AbstractRequestHandler;
use RS\Controller\Controller;
class GetComsRid extends AbstractRequestHandler{
    private $rid;
    private $seeCom;
	
	public function setRid($rid){
		$this->rid = $rid;
    }
    
    public function setSeeCom($seeCom){
		$this->seeCom = $seeCom;
	}
	
	protected function doExecute(){		
		$controller = new Controller();
		
		$comments = $controller->showComments($this->rid);
		
		echo json_encode($comments);
	}
}

?>
