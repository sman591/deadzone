#pragma strict

var count = 0;
var multiplier = 30;

function Start () {

}

function Update () {

	if (count < multiplier)
		transform.Rotate(Vector3.left * Time.deltaTime * 30);
	else
		transform.Rotate(Vector3.right * Time.deltaTime * 30);
	
	count++;
	
	if (count > multiplier * 2)
		count = 1;

}