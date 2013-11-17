#pragma strict

var vertical : boolean = false;
var horizontal : boolean = false;
var drop : boolean = false;

//var amplitude: float = 5; // platform excursion (+/- 5 units, in this case)
//var speed: float = 0.2; // movements per second
//var direction: Vector3 = Vector3.forward; // direction relative to the platform
//private var p0: Vector3;

var offTex = Texture;
var verticalTex = Texture;
var horizontalTex = Texture;
var dropTex = Texture;

var distance = 5.0;
private var pointB : Vector3;
//var pointB : Transform;
private var pointA : Vector3;
private var touched : boolean = false;
var speed = 1.0;



function Start () {
	pointA = transform.position;
	pointB = transform.position;
	
	if(vertical == true){
	horizontal = false;
	drop = false;
	
	}if(horizontal == true){
	vertical = false;
	
	}if(drop == true){
	horizontal = false;
	vertical = false;
	}
	
	if(vertical == true){
	pointB.y += distance;
	}
	if(horizontal == true){
	pointB.x += distance;
	}
	while (true) {
		var i = Mathf.PingPong(Time.time * speed, 1);
		transform.position = Vector3.Lerp(pointA, pointB, i);
		yield;
		
	}
	

}

function Update () {

if (transform.position == pointB){
	
	Wait();
	
	}
	

}

function OnTriggerEnter(other : Collider){
	if (other.CompareTag ("Player")){
		if(vertical == true){
		
		}else if(horizontal == true){
		
		}else if(drop == true){
		touched = true;
		Drop();
		
		}
	}

}

function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) {
var i = 0.0;
var rate = 1.0/time;
while (i < 1.0) {
i += Time.deltaTime * rate;
thisTransform.position = Vector3.Lerp(startPos, endPos, i);
yield;
}

}

function Wait(){

yield WaitForSeconds(2);

}

function Drop(){
	
}




	

