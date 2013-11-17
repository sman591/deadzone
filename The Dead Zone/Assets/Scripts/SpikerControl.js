

var distance;
var damage : float;
var target : Transform;
var attackRange = 2.5;
var TwoD : boolean = true;
var JumpSpeed = 50;
private var attacking : boolean = false;

function Start () {

target = GameObject.FindWithTag("Player").transform;

var setDamage = GetComponentInChildren.<GenericDamage>();

setDamage.damage = damage;

}

function Update () {

if(TwoD == true){
	transform.position.z = 0.0;
	}
	
distance = Vector3.Distance(target.position, transform.position);

if(distance < attackRange && attacking == false)
    {
    	Attack ();
    }
}

function Attack(){

	var anim : Animator = GetComponent(Animator);
	anim.SetBool("Attack",true);
	attacking = true;
	Jump();	
	attacking = false;
	yield WaitForSeconds(.5);	
	attacking = false;
	yield WaitForSeconds(5);
	anim.SetBool("Attack",false);
	}

function Jump(){
 	
 	var targetX : float = target.position.x;
 	var transformX : float = transform.position.x;
 	
 	if(attacking == true){ 	
 	rigidbody.AddForce(Vector3.up *JumpSpeed*2);
 		if (TwoD == true && targetX < transformX){
 		rigidbody.AddForce(Vector3.left *JumpSpeed);
 		}else if (TwoD == true && targetX > transformX){
 		rigidbody.AddForce(Vector3.right *JumpSpeed); 			
 		}
	}

}