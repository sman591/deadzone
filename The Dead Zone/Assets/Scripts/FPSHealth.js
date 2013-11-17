#pragma strict

var health = 100;
var playerRagdoll : Transform; // whatever you want to spawn when the player dies
var control : FPSUtilities; // this script handles locking the mouse, and respawning
var maxHealth = 100;
var graphic : GameObject;
var lives = 5;
var hitDelay : float = 0.5;
private var nextHitAllowed : float;
private var hurt = 0;
private var lastHealth = 100;
private var gameState : GameObject;
var hitflash : FPSHitFlash; // this script activate the red flash when player is hit

function Start () {
	hitflash = GetComponent(FPSHitFlash);
	control = GetComponent(FPSUtilities);
	graphic = GameObject.Find("PlayerFPS");
	gameState = GameObject.Find("gamestate");
		if(gameState){	
			var temp = gameState.GetComponent(gamestate);	
	temp.getHP();
	temp.hp = health;
	temp.getLives();
	temp.lives = lives;
	}

lastHealth = health;

}

function Update () {	

checkHealthStatus();

if(health < lastHealth && health >= 0){
	control.Hurt();
	lastHealth = health;

	}

}

function checkHealthStatus() {

	gameState = GameObject.Find("gamestate");
	var temp = gameState.GetComponent(gamestate);
	temp.getHP();
	temp.hp = health;
	
	if (health < 0){
	control.Unspawn();
	graphic.SetActive(false);
	collider.enabled = false;
	health = 0;
	hitflash.FlashDead();
	spawnRagdoll();			  	
	}
	

}

function spawnRagdoll() {

	if(playerRagdoll){
		var clone = Instantiate(playerRagdoll, transform.position, transform.rotation);
		clone.transform.position = transform.position;

    	clone.rotation = transform.rotation;

    	clone.gameObject.SetActive(true);
	
	}
	die();

}

function OnControllerColliderHit (hit : ControllerColliderHit){
	
	if(hit.collider.CompareTag ("DamagePlayer")){
	// try to get the enemy script GenericDamage:
	var localDamage: GenericDamage = hit.gameObject.GetComponent(GenericDamage);

	// if found, decrement the player health
		if (localDamage && Time.time > nextHitAllowed){
		hurt = localDamage.damage;
		health -= hurt;
		nextHitAllowed = Time.time + hitDelay;
		}
	}
}
	
//kill player if they fall below the level or touch any other instant death hazard
function OnTriggerEnter(other : Collider){
	
	if (other.CompareTag ("Death")){
	gameState = GameObject.Find("gamestate");
		if(gamestate){
			var temp = gameState.GetComponent(gamestate);
				if(temp){
					if(temp.lives > 0){
						temp.lives -= 1;
						}
					}
				}
				hitflash.FlashDead();
				var fader = GameObject.Find("ScreenFader").GetComponent(ScreenFader);
				if (fader){
					fader.FadeToBlack();
				}
				graphic.SetActive(false);
				control.Unspawn();
				health = 0;
				yield WaitForSeconds(3);
				health = maxHealth;
				graphic.SetActive(true);
				control.Spawn();
				}
				
	if (other.CompareTag ("Finish")){
		control.control.canControl = false;
		var anim = GetComponent(FPSAnimation);
		if(anim){
			anim.GunDown();
		}
	}	
}

function die(){

	//control.Unspawn();
	gameState = GameObject.Find("gamestate");
		if(gamestate){
			var temp = gameState.GetComponent(gamestate);
				if(temp){
					if(temp.lives > 0){
						temp.lives -= 1;
						}
					}
				}
	yield WaitForSeconds(.5);
	collider.enabled = true;
	graphic.SetActive(true);
	control.Spawn();
	health = maxHealth;
	lastHealth = health;

}

function ApplyHealing(amountToHeal : float){
	
	health += amountToHeal;
}

function ApplyDamage(damage : float){
	hitflash.FlashRed();
	health -= damage;
}
