#pragma strict

var circleRadius : float = 50.0;
var circleCenter : Vector3;
var moveSpeed : float = 20.0;
var minDistance : float = 1.0;
var rotationSpeed : float = 2.0;
var currentTargetPosition : Vector3;
var waitTime : float = 1.0;
private var waitTimer : float;
 
enum State {Waiting, Moving}
private var currentState : State;

function Start () {

	waitTimer = 0.0;
   circleCenter = transform.position;
   FindNewTargetPosition();  
   currentState = State.Moving;

}

function Update () {

switch(currentState)
   {
      case State.Waiting:
         Wait();
         break;
      case State.Moving:  
         MoveTowardTarget();
         break;
   }

}

function FindNewTargetPosition () : void
{
   currentTargetPosition = circleCenter + (OnUnitCircle() * circleRadius);
}

function MoveTowardTarget() : void
{
 
   var direction : Vector3 = currentTargetPosition - transform.position;
   direction.y = 0;
 
   transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(direction), rotationSpeed * Time.deltaTime);
 
   if(direction.magnitude > minDistance + 10)
   {
      var moveVector : Vector3 = direction.normalized * moveSpeed * Time.deltaTime;
      transform.position += moveVector;
   }
   else
   {
      FindNewTargetPosition();
      currentState = State.Waiting;
 
   }
 
}

function Wait() : void
{
   waitTimer += Time.deltaTime;
   if(waitTimer > waitTime)
   {
      waitTimer = 0.0;
      currentState = State.Moving;
   }
}

function OnDrawGizmos()
{
    Gizmos.color = Color.white;
    Gizmos.DrawWireSphere (circleCenter, circleRadius);
    Gizmos.DrawCube(currentTargetPosition, Vector3(4, 4, 4));
}

static function OnUnitCircle () : Vector3
{
   var angleInRadians : float = Random.Range(0, 2*Mathf.PI);
   var x : float = Mathf.Cos(angleInRadians);
   var z : float = Mathf.Sin(angleInRadians);
   return Vector3(x, 0, z);
}