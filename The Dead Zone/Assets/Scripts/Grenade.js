#pragma strict

var timer = 2.0;
var explosionPrefab : GameObject;

function Start () {

Explode();

}

function Update () {

}

function Explode(){

	
	yield WaitForSeconds(timer);
	var explosion = Instantiate(explosionPrefab, transform.position, transform.rotation);//Creates a clone of the set projectile
	Destroy(gameObject);

}