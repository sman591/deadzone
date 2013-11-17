#pragma strict

var grenadeAmmo : float = 1;

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider){
        if(other.gameObject.CompareTag ("Player")){
  
  other.gameObject.BroadcastMessage("AddGrenadeAmmo", grenadeAmmo, SendMessageOptions.DontRequireReceiver);
  
  Debug.Log("sent a grenade"); 
  Destroy (gameObject);
  Debug.Log("destroyed grenade");  
    
   }
}

