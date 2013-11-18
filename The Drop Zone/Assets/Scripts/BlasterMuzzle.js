#pragma strict

var flash : Rigidbody;

function Start () {

}

function Update () {

}

function Blast () {
	if (flash){
	
	var clone = Instantiate(flash, transform.position, transform.rotation); // Create a muzzleflash at this location
	clone.velocity= transform.TransformDirection(Vector3(0,0,.1));
	Destroy (clone.gameObject,.2);
	}
}