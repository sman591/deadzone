#pragma strict

private var ZERO_VECTOR =  Vector3(0,0,0);
//private var  TEXT_FIELD_LEFT:float = 0.0;
//private var  TEXT_FIELD_TOP:float = 0.0;
private var  TEXT_FIELD_WIDTH:float = 70.0;
private var  TEXT_FIELD_HEIGHT:float = 20.0;
private var victoryField;




function Start () {
	victoryField = null;

}

function Update () {

}

function OnTriggerEnter (collider : Collider){

	killCollider(collider);
	victoryField = "You Lose.";


}


function killCollider(collider: Collider){
	Destroy(collider.gameObject);
	
}


function OnGUI(){
	if (victoryField != null){
		var position = Rect(Screen.width / 2 - TEXT_FIELD_WIDTH / 2, Screen.height / 2 - TEXT_FIELD_HEIGHT / 2, TEXT_FIELD_WIDTH, TEXT_FIELD_HEIGHT);
			
	GUI.BeginGroup(position);
		GUI.TextField(Rect(0,0, TEXT_FIELD_WIDTH, TEXT_FIELD_HEIGHT),victoryField);
	GUI.EndGroup();
	
	
	}
	
}