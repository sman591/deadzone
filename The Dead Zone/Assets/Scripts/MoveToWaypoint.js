#pragma strict

var waypoints : Transform[];

private var currentWaypoint : Transform;
 
private var currentIndex : int;

//private var Animator : anim;

//private var CapsuleCollider : col;

var moveSpeed : float = 10.0;
 
var minDistance : float = 2.0;

function Start ():void{

	//anim = GetComponent(Animator);					  
	//col = GetComponent(CapsuleCollider);
	
	currentWaypoint = waypoints[0];
	
	currentIndex = 0;

}

function Update () {

		//float h : Input.GetAxis("Horizontal");				// setup h variable as our horizontal input axis
		//float v : Input.GetAxis("Vertical");				// setup v variables as our vertical input axis
		//anim.SetFloat("Speed", v);							// set our animator's float parameter 'Speed' equal to the vertical input axis				
		//anim.SetFloat("Direction", h); 						// set our animator's float parameter 'Direction' equal to the horizontal input axis		
		//anim.speed = animSpeed;								// set the speed of our animator to the public variable 'animSpeed'

   MoveTowardWaypoint();

   if(Vector3.Distance(currentWaypoint.transform.position, transform.position) < minDistance){

      ++currentIndex;

      if(currentIndex > waypoints.Length -1) currentIndex = 0;

         currentWaypoint = waypoints[currentIndex];

      }

}



function MoveTowardWaypoint() : void {


   var direction : Vector3 = currentWaypoint.transform.position- transform.position;


   var moveVector : Vector3 = direction.normalized * moveSpeed * Time.deltaTime;


//transform.Translate(Vector3(0,0) * Time.deltaTime);
   transform.position += moveVector;


   transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(direction), 4 * Time.deltaTime);


}


			
