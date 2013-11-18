#pragma strict
var damage:float;
function Start () {
}
function Update () {
}
function OnCollisionEnter (collisionInfo : Collision){
        if(collisionInfo.gameObject.CompareTag ("Player")){
  
  collisionInfo.gameObject.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);  
    
   }
}