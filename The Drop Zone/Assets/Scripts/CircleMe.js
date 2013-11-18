#pragma strict

var speed_multiplier = 3;
var distance_multiplier = 10;
var rotation_type = Vector3.up;
var translate_type = Vector3.forward;

function Start () {

	speed_multiplier = Random.Range(1, 10);

	switch (Mathf.Floor(Random.Range(0, 4))) {
	
		case 0:
			rotation_type = Vector3.up;
		break;
		case 1:
			rotation_type = Vector3.down;
		break;
		case 2:
			rotation_type = Vector3.left;
		break;
		case 3:
			rotation_type = Vector3.right;
		break;
	
	}
	
	switch (Mathf.Floor(Random.Range(0, 4))) {
	
		case 0:
			translate_type = Vector3.forward;
		break;
		case 1:
			translate_type = Vector3.back;
		break;
		case 2:
			translate_type = Vector3.left;
		break;
		case 3:
			translate_type = Vector3.right;
		break;
	
	}
	

}

function Update () {

	circle();

}

function circle() {

	transform.Translate(translate_type * Time.deltaTime * distance_multiplier * speed_multiplier);
	transform.Rotate(rotation_type * Time.deltaTime * 100 * speed_multiplier);
	rigidbody.AddForce(Vector3.down * 50);

}