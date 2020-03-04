// Player Class
class Player {
  // Create a constructor function
  constructor(name, weapons) {
    //  Name: Holds the name of the player. Pass into the constructor.
    this.name = name
    //  Health: Defaults to 10, do not pass into the constructor, just define and set to 10 in
    // the constructor
    this.health = 10
    //  Strength: Defaults to 2
    this.strength = 2
    //  Weapons: An array of weapons objects. Should be passed into the constructor.
    this.weapons = weapons
  }
  // Add a function to the Player prototype called "applyDamage".
  applyDamage(damage) {
    // The function takes as input an integer and subtracts that amount of points from the players health property.
    this.health -= damage
  }
  // Add a function to the Player prototype called “isAlive”.
  isAlive() {
    // This function checks if the players health value is greater than 0 and returns true if it is and false if it isn’t.
    if (this.health > 0) {
      return true
    } else {
      return false
    }
  }
  // Add a function to the Player prototype called “attackWith”.
  attackWith() {
    // This function should use a random number between 0 and 7, to select a weapon
    //from the weapons array property, at that index and returns that weapon.
    var random = Math.floor(Math.random() * 8)
    return this.weapons[random]
  }
}

// Weapon Class
class Weapon {
  constructor(name) {
    //  Name: Holds the name of the weapon. Passed into the constructor.
    this.name = name
    //  Damage: Defaults to a random number between 1 and 5, do not pass into the
    // constructor, just define in the constructor and set it.
    this.damage = Math.floor(Math.random() * 5 + 1)
  }
  // Add a function to the Weapon prototype called "attack".
  // The function takes as input a player instance, and an Enemy instance.
  attack(player, enemy) {
    // In a loop, while both the player and the Enemy are alive (use the isAlive methods), do
    // the following:
    while (player.isAlive() && enemy.isAlive()) {
      //  1. Calculate the actual damage by multiplying the strength of the player times the
      // damage value of the weapon.
      var actualDamage = player.strength * this.damage
      //  2. Call the applyDamage function of the Enemy object and pass it the actual
      // damage value you just calculated.
      enemy.applyDamage(actualDamage)
      //  3. Call the isAlive function of the Enemy object. If the Enemy is dead, exit. If the
      // Enemy is not dead, call the attack function of the Enemy and pass it the player object.
      if (enemy.isAlive()) {
        enemy.attack(player)
      } else {
        break
      }
    }
  }
}

//  Enemy Class
class Enemy {
  //  Create a constructor function or ES6 class for a Enemy object.
  constructor() {
    //  Name: Default to “Enemy”
    this.name = 'Enemy'
    //  Health: Default to 5
    this.health = 5
    //  Strength: Default to 2
    this.strength = 2
  }
  // Add a function to the Enemy prototype called "applyDamage".
  applyDamage(damage) {
    // The function takes as input an integer and subtracts that amount of points from the Enemys health property.
    this.health -= damage
  }
  // Add a function to the Enemy prototype called “isAlive”.
  isAlive() {
    // This function checks if the Enemys health value is greater than 0 and returns true if it is and false if it isn’t.
    if (this.health > 0) {
      return true
    } else {
      return false
    }
  }
  // Add a function to the Enemy prototype called “attack”.
  attack(player) {
    // This function takes as input a player and calls the applyDamage of the player, using the Enemys strength as the input.
    player.applyDamage(this.strength)
  }
}

//  BattleSimulation Class
class BattleSimulation {
  //  Create a constructor function or ES6 class for a BattleSimulation object.
  constructor() {
    //  Players: An Array to hold the players, Initialize it in the constructor to an empty array
    this.players = []
    //  Enemies: An Array to hold Enemy objects. Initialize it in the constructor to an empty array
    this.enemies = []
  }
  //  Add a function to the BattleSimulation class prototype called “createEnemies”.
  createEnemies() {
    // In this function, use a loop to create 20 Enemy instances and populate the Enemies array property.
    for (let i = 0; i < 20; i++) {
      var newEnemy = new Enemy()
      this.enemies[i] = newEnemy
    }
  }

  // Add a function to the BattleSimulation class prototype called “createPlayers”.
  createPlayers() {
    // Create eight Weapons objects.
    var weapon = ['Dagger', 'Staff', 'Warhammer', 'Bow', 'Hand Cannon', 'WristRocket', 'Magic Missile', 'Rock']
    // Create a variable called “weaponsCache” and add the 8 weapons you just created to it.
    var weaponsCache = []
    for (var i = 0; i < 8; i++) {
      var newWeapon = new Weapon(weapon[i])
      weaponsCache[i] = newWeapon
    }
    // Create 5 player instances and add them to the players array property.
    //making a name array
    var heroNames = ['Black Widow', 'Captain Marvel', 'Hulk', 'Captain America', 'Thor']
    var playerCounter = 0
    while (playerCounter < 5) {
      var newPlayer = new Player(heroNames[playerCounter], weaponsCache)
      this.players[playerCounter] = newPlayer
      playerCounter++
    }
  }

  // Add a function to the BattleSimulation class prototype called “run”.
  run() {
    // Display “Simulating Battle”
    console.log('Simulating Battle')

    // Call the “createEnemies” function to create the Enemies.
    this.createEnemies()

    // Call the “createPlayers” function to create the players.
    this.createPlayers()

    //active players or enemies
    var livingPlayerRoster = 5
    var livingEnemyRoster = 20

    // Until all the players are dead or all the enemies are dead:
    while (livingPlayerRoster > 0 && livingEnemyRoster > 0) {
      //  Select a random player from the player array
      var randomPlayer = Math.floor(Math.random() * 5)
      //  Select a random enemy from the enemies array
      var randomEnemy = Math.floor(Math.random() * 20)

      //  Call the attackWith Method on the player, to get a weapon to attack with.
      let randomPlayerWeapon = this.players[randomPlayer].attackWith()

      //  Call the attack method on the weapon and pass it the current player and current enemy.
      randomPlayerWeapon.attack(this.players[randomPlayer], this.enemies[randomEnemy])
      //if the enemy is dead subtract one from the roster
      if (!this.enemies[randomEnemy].isAlive()) {
        livingEnemyRoster--
      }
      //if the player is dead then subtract one from the roster
      if (!this.players[randomPlayer].isAlive()) {
        livingPlayerRoster--
      }
    }
    // list out all of the living heros
    console.log('\n')
    this.players.forEach(hero => {
      if (hero.isAlive()) {
        console.log(hero.name + ' is alive')
      }
    })
    // When the loop is completed, display a list of all players currently alive and if there
    // are more players left than enemies, display
    if (livingPlayerRoster > 0 && livingEnemyRoster == 0) {
      console.log('Congratulations, you have defeated Scarlet Byte')
    } else if (livingPlayerRoster == 0 && livingEnemyRoster > 0) {
      console.log('Sorry, Scarlet Byte has defeated you and conquered the free world.')
    }
  }
}

var goTime = new BattleSimulation()
goTime.run()
