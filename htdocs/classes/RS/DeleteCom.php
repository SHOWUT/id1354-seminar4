<?php
namespace RS;
use Id1354fw\View\AbstractRequestHandler;
use RS\Integration\CommentDAO;
use \RS\Controller\Controller;

class DeleteCom extends AbstractRequestHandler{
	private $cid;
	
	public function setCid($cid){
		$this->cid = $cid;
	}
	
	protected function doExecute(){		
		$controller = new Controller();
		$controller->deleteComment($this->cid);
	}
}
?>