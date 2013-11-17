    var distance;
    var target : GameObject;
    var lookAtDistance = 15.0;
    var attackRange = 10.0;
    var moveSpeed = 5.0;
    var damping = 6.0;
    
    private var jumpback : boolean = false;
    //var controller : CharacterController = GetComponent(CharacterController);
    private var isItAttacking = false;
     
    function Start (){
    
    target = GameObject.FindGameObjectWithTag("Player");
    
    }
    
    
    function Update ()
    {
    distance = Vector3.Distance(target.transform.position, transform.position);
     
    if(distance < lookAtDistance)
    {
    isItAttacking = false;
    renderer.material.color = Color.yellow;
    lookAt ();
    }
    if(distance > lookAtDistance)
    {
    renderer.material.color = Color.green;
    }
    if(distance < attackRange)
    {
    attack ();
    }
    if(isItAttacking)
    {
    renderer.material.color = Color.red;
    }
    }
     
     
    function lookAt ()
    {
    var rotation = Quaternion.LookRotation(target.transform.position - transform.position);
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
    }
     
    function attack ()
    {
    isItAttacking = true;
    renderer.material.color = Color.red;
    
    //controller.SimpleMove(Vector3.forward * moveSpeed *Time.deltaTime); 
    transform.Translate(Vector3.forward * moveSpeed *Time.deltaTime);
    }
    
    function OnCollisionEnter(collisionInfo : Collision){
    	if(collisionInfo.gameObject.CompareTag ("Player")){
    		jumpback = true;
   		 	var health = GetComponentInChildren(GenericHealth);
    		health.health = 0;
    	}
    
    }
    
    function FixedUpdate() {
    
    if(jumpback == true){
    	rigidbody.AddRelativeForce (Vector3.back * 4);
    	jumpback = false;
    	}
    }
    