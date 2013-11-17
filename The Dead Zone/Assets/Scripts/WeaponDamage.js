#pragma strict
var damage:float;
function Start () {
}
function Update () {
}
function OnCollisionEnter (collisionInfo : Collision){
if(collisionInfo.gameObject.CompareTag ("Enemy")){ 
  	collisionInfo.gameObject.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
  
	}else if (collisionInfo.gameObject.CompareTag ("Player")){ 
	
	}

}



