#pragma strict

var booming = false;

function Start () {

}

function Update () {

	if (!booming)
		wait_for_boom();
	else
		BOOM();

}

function wait_for_boom() {

	if (Input.GetKeyDown(KeyCode.E)) {
		rigidbody.useGravity = true;
		booming = true;
	}

}

function BOOM() {
	transform.Translate(Vector3.up * Time.deltaTime * 90);
	transform.Rotate(Vector3.left * Time.deltaTime * 150);
}