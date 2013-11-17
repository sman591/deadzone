#pragma strict
 
/// <summary>
/// Creates wandering behaviour for a CharacterController.
/// </summary>
@script RequireComponent(CharacterController)
 
    var speed:float = 5;
    var directionChangeInterval:float = 1;
    var waitTime : float = 1;
    var maxHeadingChange:float = 30;
 
    var heading: float=0;
    var targetRotation: Vector3 ;
 
    function Awake (){
 
        // Set random initial rotation
		transform.eulerAngles = Vector3(0, Random.Range(0,360), 0);  // look in a random direction at start of frame.
 
        //StartCoroutine
		NewHeadingRoutine ();
    }
 
    function Update (){
		var controller : CharacterController = GetComponent(CharacterController);
 
        transform.eulerAngles = Vector3.Slerp(transform.eulerAngles, targetRotation, Time.deltaTime * directionChangeInterval);
        var forward = transform.TransformDirection(Vector3.forward);
        controller.SimpleMove(forward * speed);
    }
 
    /// <summary>
    /// Repeatedly calculates a new direction to move towards.
    /// Use this instead of MonoBehaviour.InvokeRepeating so that the interval can be changed at runtime.
    /// </summary>
	while (true){
		NewHeadingRoutine();
		yield WaitForSeconds(directionChangeInterval);
		Hold();
	}
 
    /// <summary>
    /// Calculates a new direction to move towards.
    /// </summary>
    function NewHeadingRoutine (){
        var floor = Mathf.Clamp(heading - maxHeadingChange, 0, 360);
        var ceil  = Mathf.Clamp(heading + maxHeadingChange, 0, 360);
        heading = Random.Range(floor, ceil);
        targetRotation = new Vector3(0, heading, 0);
    }
    
    function Hold (){
    var controller : CharacterController = GetComponent(CharacterController);
     transform.eulerAngles = Vector3.Slerp(transform.eulerAngles, targetRotation, Time.deltaTime * directionChangeInterval);
        var forward = transform.TransformDirection(Vector3.forward);
    controller.SimpleMove(forward * 0);
    yield WaitForSeconds(waitTime);
    }