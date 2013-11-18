
var health = 10;
var points = 10;
var deathObject : Transform;
private var gameState : GameObject;

function Start () {

lastHealth = health;

}

function Update () {

checkHealthStatus();

}

function checkHealthStatus() {

	gameState = GameObject.Find("gamestate");
	var temp = gameState.GetComponent(gamestate);
	
	if (health <= 0){
	Destroy(gameObject);
	temp.score += points;
	spawnRagdoll();			  	
	}
	

}

function spawnRagdoll() {

	if(deathObject){
		var clone = Instantiate(deathObject, transform.position, transform.rotation);
		clone.transform.position = transform.position;
	
   	 	clone.rotation = transform.rotation;

    	clone.gameObject.SetActive(true);
    }

}

function ApplyDamage(damage : float){
	
	health -= damage;
}



