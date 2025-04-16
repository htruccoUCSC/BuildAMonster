class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.leftLegX = 230;
        this.leftLegY = 500;
        this.rightLegX = 375;
        this.rightLegY = 500;
        this.leftArmX = 210;
        this.leftArmY = 325;
        this.rightArmX = 380;
        this.rightArmY = 325;
        this.eyeX = 300;
        this.eyeY = 320;
        this.mouthX = 300; 
        this.mouthY = 375;
        this.leftHornX = 250;
        this.leftHornY = 260;
        this.rightHornX = 350;
        this.rightHornY = 260;
        this.sKey;
        this.fKey;
        this.aKey;
        this.dKey;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }
    
    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_yellowC.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_redC.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_redE.png");
        my.sprite.leftArm.angle = 30;
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_redE.png");
        my.sprite.rightArm.angle = -30;
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_green.png");
        my.sprite.mouthClosed = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouthSmile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");
        my.sprite.mouthSmile.visible = false;
        my.sprite.mouthFangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");
        my.sprite.mouthFangs.visible = false;
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_dark_horn_small.png");
        my.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        my.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        my.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (my.sKey.isDown) {
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthClosed.visible = false;
        } else if(my.fKey.isDown) {
            my.sprite.mouthFangs.visible = true;
            my.sprite.mouthClosed.visible = false;
        } else {
            my.sprite.mouthFangs.visible = false;
            my.sprite.mouthSmile.visible = false;
            my.sprite.mouthClosed.visible = true;
        }
        if(my.dKey.isDown && my.sprite.rightArm.x <= 800) {
            for (const i in my.sprite) {
                my.sprite[i].x += 2;
            }
        } 
        if(my.aKey.isDown && my.sprite.leftArm.x >= 0) {
            for (const i in my.sprite) {
                my.sprite[i].x -= 2;
            }
        }

    }

}