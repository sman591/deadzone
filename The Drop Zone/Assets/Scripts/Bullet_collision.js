#pragma strict

var damage : float = 25;

function Start () {

}

function Update () {

}



function OnCollisionEnter(collisionInfo : Collision){
	if (collisionInfo.gameObject.CompareTag ("Player")){
		collisionInfo.gameObject.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
		Destroy (gameObject);
	}else{

		Destroy (gameObject);
	
	}
}


