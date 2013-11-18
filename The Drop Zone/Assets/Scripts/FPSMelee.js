#pragma strict

var damage = 100;
var slashPrefab : GameObject;	//Effect to place on hit enemies
var sparksPrefab : GameObject;	//Effect to place on hit environment
var impactPrefab : GameObject;	//Should include a collider or explosive force to apply at the hit location
var canControl : boolean = true; // Set this false from another script to disable attacking

private var hit : RaycastHit;

function Start () {

}

function Update () {
	if (canControl == true){
		if (Input.GetKeyDown("v")){
		Melee();
		}
	}
}


function Melee() {
		var direction = transform.forward;
		var fwd = transform.TransformDirection (Vector3.forward);
		yield WaitForSeconds(.4);
		if (Physics.Raycast (transform.position, fwd, hit, 2)){
		// prepare rotation to instantiate blood or sparks
        var rot = Quaternion.FromToRotation(Vector3.up, hit.normal);
        if (impactPrefab) Instantiate(impactPrefab, hit.point, rot); // explosive force
		 	if (hit.transform.tag == "Enemy"){ // if enemy hit...
            	if (slashPrefab) Instantiate(slashPrefab, hit.point, rot); // make it bleed...
            hit.transform.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver); // and consume its health
        } else { // otherwise emit sparks at the hit point
            if (sparksPrefab) Instantiate(sparksPrefab, hit.point, rot);
        }
	}
}