var Prefab : GameObject;
var PrefabLimit : int = 5; // Max amount of Prefabs
private var PrefabCount : int; // Number of Prefabs in the game at a time
var waitTime: float = 100;
private var counter : float = 0;
var randomPosition : boolean = false;
var triggered : boolean = false; // set this to true if you want it to begin immediately
private var clone : GameObject;
private var position: Vector3;
// The position of where the Prefabs will spawn
function Start () {
	
	if(randomPosition == true){
		position = Vector3(Random.Range(-10.0, 10.0), 0, Random.Range(-10.0, 10.0));
	}else{
		position = transform.position;
	}
}

function Update () {

	if(triggered == true){
	counter++;
		if (PrefabCount >= PrefabLimit){
		// If the number of Prefabs in the game is greater than or equal to the max number of Prefabs
		}else if (counter >= waitTime && PrefabCount <= PrefabLimit){
			PrefabSpawn();
			counter = 0;
		}
 
	}
}
 
function PrefabSpawn() {
clone = Instantiate(Prefab, position, Quaternion.identity);
// Create the prefab using a random position
PrefabCount++;
// Raise the number of prefabs in the game in variable PrefabCount
}

