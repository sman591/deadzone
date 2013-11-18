	var distance;
    static var target : Transform;
    var lookAtDistance = 15.0;
    var attackRange = 10.0;
    var moveSpeed = 5.0;
    var damping = 6.0;
    var transform_modifier = 1;
    private var isItAttacking = false;
    //var Barrel : AI_Shoot;
        
    function Start () {
    target = GameObject.FindWithTag("Player").transform;
    }
    
    function Update ()
    {
    	if(target == null){
    		target = GameObject.FindWithTag("Respawn").transform;
    	}
    
    	//hover();
    
    	if(target !== null){
    		distance = Vector3.Distance(target.position, transform.position);
     
   			if(distance < lookAtDistance){
    		isItAttacking = false;
    		lookAt ();
    		}
    	if(distance > lookAtDistance){
   
    		}
    	if(distance < attackRange){
    		attack ();
    		}
    	if(isItAttacking){

    		}
    	}
    }
     
     
    function lookAt ()
    {
       
     var rotation = Quaternion.LookRotation(target.position - transform.position);
     rotation.x = 0;
     //rotation.y =0;
     rotation.z = 0;
     transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
 
    
     //var rotation = Quaternion.LookRotation(target.position - transform.position);
     //transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
    }
    
    function hover() {
    
    	var translate_direction = (transform_modifier/40%2 == 0 ? Vector3.up : Vector3.down);
    	transform.Translate(translate_direction * Time.deltaTime);
    	transform_modifier++;
    	if (transform_modifier > 80)
    		transform_modifier = 1;
    
    }
     
    function attack ()
    {
    isItAttacking = true;  
    //Barrel.Shooting = true;
    }
    

