#pragma strict

var itemToThrow : Rigidbody;
var speed = 1.0;
var canControl : boolean = true; // Set this false from another script to disable attacking
var ammo = 3;

function Start () {

}

function Update(){
	if (canControl == true && itemToThrow && ammo > 0){
		if (Input.GetButtonDown("Fire2")){
		Throw();
		ammo -= 1;
		}
	}
}

function Throw(){

	var clone = Instantiate(itemToThrow, Vector3(transform.position.x, transform.position.y, transform.position.z), transform.rotation);//Creates a clone of the set projectile
    clone.velocity = transform.forward * speed;
        
    //Destroy (clone.gameObject,2);//Destroys the clone after 2 seconds

}

function AddGrenadeAmmo(grenadeAmmo : float){
	ammo += grenadeAmmo;
	Debug.Log("Got a grenade");
}

function OnGUI () {
		GUI.Label (Rect (450, 250, 100, 20), "Grenades:" + ammo);
	}