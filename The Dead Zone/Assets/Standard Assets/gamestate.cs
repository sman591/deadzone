/*
	Unity 3D: Game State Manager Script Source for State Manager
       
    Copyright 2012 FIZIX Digital Agency
    http://www.fizixstudios.com
       
	For more information see the tutorial at:
    http://www.fizixstudios.com/labs/do/view/id/unity-game-state-manager
       
       
    Notes:
        This script is a C# game state manager for Unity 3D; you should review the gamestart.cs 
        script to help understand how to implement game states.
*/



using UnityEngine;
using System.Collections;

public class gamestate : MonoBehaviour {
	
	// Declare properties
	private static gamestate instance;
	private string activeLevel;			// Active level
	public int maxHP;					// Max HP
	public int hp;						// Current HP
	public int score; 					// Score
	public int lives; 					// Lives
	
	
	// ---------------------------------------------------------------------------------------------------
	// gamestate()
	// --------------------------------------------------------------------------------------------------- 
	// Creates an instance of gamestate as a gameobject if an instance does not exist
	// ---------------------------------------------------------------------------------------------------
	public static gamestate Instance
	{
		get
		{
			if(instance == null)
			{
				instance = new GameObject("gamestate").AddComponent<gamestate> ();
			}
 
			return instance;
		}
	}	
	
	// Sets the instance to null when the application quits
	public void OnApplicationQuit()
	{
		instance = null;
	}
	// ---------------------------------------------------------------------------------------------------
	
	
	// ---------------------------------------------------------------------------------------------------
	// startState()
	// --------------------------------------------------------------------------------------------------- 
	// Creates a new game state
	// ---------------------------------------------------------------------------------------------------
	public void startState()
	{
		print ("Creating a new game state");
		
		// Set default properties:
		activeLevel = "Level 1";
		maxHP = 100;
		hp = maxHP;
		lives = 5;
		score = 0;


				
		// Load level 1
		
	}
	
	
	
	// ---------------------------------------------------------------------------------------------------
	// getLevel()
	// --------------------------------------------------------------------------------------------------- 
	// Returns the currently active level
	// ---------------------------------------------------------------------------------------------------
	public string getLevel()
	{
		return activeLevel;
	}
	
	
	// ---------------------------------------------------------------------------------------------------
	// setLevel()
	// --------------------------------------------------------------------------------------------------- 
	// Sets the currently active level to a new value
	// ---------------------------------------------------------------------------------------------------
	public void setLevel(string newLevel)
	{
		// Set activeLevel to newLevel
		activeLevel = newLevel;
	}

	
	// ---------------------------------------------------------------------------------------------------
	// getHP()
	// --------------------------------------------------------------------------------------------------- 
	// Returns the characters hp
	// ---------------------------------------------------------------------------------------------------
	public int getHP()
	{
		return hp;
	}
	
	// ---------------------------------------------------------------------------------------------------
	// getScore()
	// --------------------------------------------------------------------------------------------------- 
	// Returns the characters score
	// ---------------------------------------------------------------------------------------------------
	public int getScore()
	{
		return score;
	}
	
	// ---------------------------------------------------------------------------------------------------
	// getLives()
	// --------------------------------------------------------------------------------------------------- 
	// Returns the characters lives
	// ---------------------------------------------------------------------------------------------------
	
	public int getLives()
	{
		return lives;
	}
}