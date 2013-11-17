#pragma strict

//This is a master control for the three scripts placed on the base, and barrel. 
//It accesses these scripts and changes their variables all from one easy location. 
//You will still need all three for this to work.


//Aiming variables

private var target : Transform;
var lookAtDistance = 15.0;
var attackRange = 10.0;
var moveSpeed = 5.0;
var damping = 6.0;

//Shooting variables

var projectile: Rigidbody;
var speed =100;
var fireRate=10;
var offSet = 0.0;
var offSetRate = 0.01;

function Start () {

var barrel = GetComponentInChildren.<TurretRotateBarrel>();
var shoot = GetComponentInChildren.<AI_Shoot>();
var base = GetComponentInChildren.<TurretRotateBase>();
target = GameObject.FindWithTag("Player").transform;

base.target = target;
barrel.target = target;
base.lookAtDistance = lookAtDistance;
barrel.lookAtDistance = lookAtDistance;
base.attackRange = attackRange;
barrel.attackRange = attackRange;
base.moveSpeed = moveSpeed;
barrel.moveSpeed = moveSpeed;
base.damping = damping;
barrel.damping = damping;

shoot.projectile = projectile;
shoot.speed = speed;
shoot.fireRate = fireRate;
shoot.offSet = offSet;
shoot.offSetRate = offSetRate;


}

function Update () {

}