<?php
namespace RS;
use Id1354fw\View\AbstractRequestHandler;
use \RS\Controller\Controller;

class AddCom extends AbstractRequestHandler{
    private $rid;
    private $message;
    private $commentSubmit;
    
    public function setRid($rid){
		$this->rid = $rid;
    }
    
	public function setMessage($message){
		$this->message = htmlentities($message, ENT_QUOTES);
    }
    
    public function setCommentSubmit($commentSubmit){
		$this->commentSubmit = $commentSubmit;
	}
	
	protected function doExecute(){		
		$controller = new Controller();
		$comments = $controller->addComment($this->rid, $this->session->get('uid'), $this->message);
		echo json_encode($comments);
	}
}
?>