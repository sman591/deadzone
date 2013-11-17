#pragma strict

var damage = 10;
var bloodPrefab : GameObject;	//Effect to place on hit enemies
var sparksPrefab : GameObject;	//Effect to place on hit environment
var impactPrefab : GameObject;	//Should include a collider or explosive force to apply at the hit location
var muzzleShot : GameObject;	 // This should be a gameobject containing "BlasterMuzzle" script. This is for instantiating a muzzle flash from your weapon model.
var canControl : boolean = true; // Set this false from another script to disable attacking
private var hit : RaycastHit;


function Start () {

muzzleShot = GameObject.Find("MuzzleGenerator");
}



function Update(){
	if (canControl == true){
		if (Input.GetButtonDown("Fire1")){
		Shoot();
		}
	}
}



function Shoot(){
    //if (shotSound) audio.PlayOneShot(shotSound); // play the shot sound
    var direction = transform.forward;
    var muzzle = muzzleShot.GetComponent(BlasterMuzzle);
    	// flash the muzzle burst because we are shooting
    	if (muzzle){
    	muzzle.Blast();
    	}
    var hit: RaycastHit;
        if (Physics.Raycast(transform.position, transform.forward, hit)){
        // prepare rotation to instantiate blood or sparks
        var rot = Quaternion.FromToRotation(Vector3.up, hit.normal);
        if (impactPrefab) Instantiate(impactPrefab, hit.point, rot); // add explosive force
        if (hit.transform.tag == "Enemy"){ // if enemy hit...
            if (bloodPrefab) Instantiate(bloodPrefab, hit.point, rot); // make it bleed...
            hit.transform.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver); // and consume its health
        } else { // otherwise emit sparks at the hit point
            if (sparksPrefab) Instantiate(sparksPrefab, hit.point, rot);
        }
    }
    
}
    
