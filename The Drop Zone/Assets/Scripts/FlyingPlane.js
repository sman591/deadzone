#pragma strict

var hover_count = 1;
var hover_multiplier = 1/3;
var hover_distance = 15;
var piloting = false;

function Start () {

}

function Update () {

	hover();
	
	//enslave_pilot();

	//if (piloting)
	//	fly();
		
	fly();

}

function hover() {
    
	var translate_direction = (hover_count/hover_distance%2 == 0 ? Vector3.right : Vector3.left);
	transform.Translate(translate_direction * Time.deltaTime * hover_multiplier);
	hover_count++;
	if (hover_count > hover_distance * 2)
		hover_count = 1;

}

function enslave_pilot() {

	if (Input.GetKeyDown(KeyCode.F))
		piloting = !piloting;
		
	yield;
	
}


function fly() {

	if (Input.GetKey(KeyCode.W))
		transform.Translate(Vector3.forward * Time.deltaTime * 15);
	if (Input.GetKey(KeyCode.S))
		transform.Translate(Vector3.back * Time.deltaTime * 15);
	if (Input.GetKey(KeyCode.A))
		transform.Rotate(Vector3.right * Time.deltaTime * 150);
	if (Input.GetKey(KeyCode.D))
		transform.Rotate(Vector3.left * Time.deltaTime * 150);
	if (Input.GetKey(KeyCode.Space))
		transform.Translate(Vector3.left * Time.deltaTime * 15);
	if (Input.GetKey(KeyCode.LeftShift))
		rigidbody.useGravity = true;
	if (Input.GetKey(KeyCode.UpArrow))
		transform.Rotate(Vector3.up * Time.deltaTime * 150);
	if (Input.GetKey(KeyCode.DownArrow))
		transform.Rotate(Vector3.down * Time.deltaTime * 150);
		
	if (Input.GetKeyUp(KeyCode.LeftShift)) {
		rigidbody.useGravity = false;
		rigidbody.velocity *= 0;
	}

}