


// The tag to search for (set this value in the inspector)
private var searchTag = "Respawn";
// The frequency with which to re-scane for new nearest target in seconds
private var scanFrequency = 1.0;
// The current target
private var respawn : Transform;
// Our game manager
private var gameState : GameObject;
// Our locomotion
static var control : CharacterMotor;
// Our weapons
private var gun : RaycastShoot;
private var melee : FPSMelee;
// The red hit state we place in front of camera
private var hitflash : FPSHitFlash;
// The character will spawn at spawnPoint's position when needed.  This could be changed via a script at runtime to implement, e.g. waypoints/savepoints.
var spawnPoint : Transform;
			
function Start() {
	// get the script for indicating we've been hit visually
	hitflash = GetComponent(FPSHitFlash);
	// lock cursor so we can look correctly
	Screen.lockCursor = true;
	// set up repeating scan for new targets:
	InvokeRepeating("ScanForTarget", 0, scanFrequency );
	// get our character control
	control = gameObject.GetComponent(CharacterMotor);
	// get our weapons
	gun = gameObject.Find("GunBarrel").GetComponent(RaycastShoot);
	melee = gameObject.Find("GunBarrel").GetComponent(FPSMelee);
	
}
	
function Update() {

		// input for unlocking the cursor
		if (Input.GetKeyDown ("escape")){
			Screen.lockCursor = false;
			}else{
			Screen.lockCursor = true;
			}

}

function Spawn () {
	
	// reset the character's position to the spawnPoint
	transform.position = spawnPoint.position;
	// allow them control again
	control.SetControllable(true);	
	// call the animation for no longer being hurt
	hitflash.FlashClear();
	// allow us to use our weapons again
	gun.canControl = true;
	melee.canControl = true;
}

function Unspawn() {
	// find the gamestate so we can check on our lives
	gameState = GameObject.Find("gamestate");
	var temp = gameState.GetComponent(gamestate);	
	// take away player control
	control.canControl = false;
	gun.canControl = false;
	melee.canControl = false;
	// set our respawn point
	spawnPoint = respawn;
	// find out how many lives we have
	temp.getLives();
	// if we're out, send us to the defeat scene
	if(temp.lives <= 0){
	yield DefeatMessage();
	Destroy (gameObject);	
	}
}

function ScanForTarget() {
// this should be called less often, because it could be an expensive
// process if there are lots of objects to check against
respawn = GetNearestTaggedObject();
 
}

function GetNearestTaggedObject() : Transform {
// and finally the actual process for finding the nearest object:
 
var nearestDistanceSqr = Mathf.Infinity;
var taggedGameObjects = GameObject.FindGameObjectsWithTag(searchTag);
var nearestObj : Transform = null;
 
// loop through each tagged object, remembering nearest one found
for (var obj : GameObject in taggedGameObjects) {
 
var objectPos = obj.transform.position;
var distanceSqr = (objectPos - transform.position).sqrMagnitude;
 
if (distanceSqr < nearestDistanceSqr) {
nearestObj = obj.transform;
nearestDistanceSqr = distanceSqr;
}
}
 
return nearestObj;
}

function DefeatMessage(){
	yield WaitForSeconds(.5);
	Application.LoadLevel("FPSBadResult");

}

function Hurt(){
// if you want something special to happen on hit, you could place it here and call this function.
}
