#pragma strict

var amountToHeal = 25;

function Start () {

}

function Update () {

// Slowly rotate the object around its X axis at 1 degree/second.
		transform.Rotate(Vector3.up * Time.deltaTime * 50);

}

function OnTriggerEnter(other : Collider){
	
	if (other.CompareTag ("Player")){
	Destroy (gameObject);
	other.gameObject.SendMessage("ApplyHealing", amountToHeal, SendMessageOptions.DontRequireReceiver); 

	}
}

