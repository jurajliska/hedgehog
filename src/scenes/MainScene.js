
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainScene extends Phaser.Scene {

	constructor() {
		super("MainScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// RightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// hedgehog
		/** @type {Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body }} */
		const hedgehog = this.add.image(160, 428, "hedgehog");
		hedgehog.scaleX = 1.2;
		hedgehog.scaleY = 1.2;
		this.physics.add.existing(hedgehog, false);
		hedgehog.body.moves = false;
		hedgehog.body.setSize(184, 212, false);

		// dark_ground_blob
		const dark_ground_blob = this.add.image(162, 530, "blob");
		dark_ground_blob.scaleX = 0.75;
		dark_ground_blob.scaleY = 0.75;
		dark_ground_blob.tintTopLeft = 2513986;
		dark_ground_blob.tintTopRight = 2513986;
		dark_ground_blob.tintBottomLeft = 2513986;
		dark_ground_blob.tintBottomRight = 2513986;

		// dark_ground_blob_1
		const dark_ground_blob_1 = this.add.image(494, 515, "blob");
		dark_ground_blob_1.scaleX = 0.75;
		dark_ground_blob_1.scaleY = 0.75;
		dark_ground_blob_1.tintTopLeft = 2513986;
		dark_ground_blob_1.tintTopRight = 2513986;
		dark_ground_blob_1.tintBottomLeft = 2513986;
		dark_ground_blob_1.tintBottomRight = 2513986;

		// dark_ground_blob_2
		const dark_ground_blob_2 = this.add.image(850, 533, "blob");
		dark_ground_blob_2.scaleX = 0.75;
		dark_ground_blob_2.scaleY = 0.75;
		dark_ground_blob_2.tintTopLeft = 2513986;
		dark_ground_blob_2.tintTopRight = 2513986;
		dark_ground_blob_2.tintBottomLeft = 2513986;
		dark_ground_blob_2.tintBottomRight = 2513986;

		// dark_ground_blob_3
		const dark_ground_blob_3 = this.add.image(1186, 520, "blob");
		dark_ground_blob_3.scaleX = 0.75;
		dark_ground_blob_3.scaleY = 0.75;
		dark_ground_blob_3.tintTopLeft = 2513986;
		dark_ground_blob_3.tintTopRight = 2513986;
		dark_ground_blob_3.tintBottomLeft = 2513986;
		dark_ground_blob_3.tintBottomRight = 2513986;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(648, 665, 128, 128);
		rectangle_1.scaleX = 11.691219811262439;
		rectangle_1.scaleY = 0.9105260062780908;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 2745406;

		// ground_blob
		const ground_blob = this.add.image(184, 554, "blob");
		ground_blob.scaleX = 0.5;
		ground_blob.scaleY = 0.5;
		ground_blob.tintTopLeft = 4759093;
		ground_blob.tintTopRight = 4759093;
		ground_blob.tintBottomLeft = 4759093;
		ground_blob.tintBottomRight = 4759093;

		// ground_blob_2
		const ground_blob_2 = this.add.image(1002, 567, "blob");
		ground_blob_2.scaleX = 0.5;
		ground_blob_2.scaleY = 0.5;
		ground_blob_2.tintTopLeft = 4759093;
		ground_blob_2.tintTopRight = 4759093;
		ground_blob_2.tintBottomLeft = 4759093;
		ground_blob_2.tintBottomRight = 4759093;

		// ground_blob_1
		const ground_blob_1 = this.add.image(609, 583, "blob");
		ground_blob_1.scaleX = 0.5;
		ground_blob_1.scaleY = 0.5;
		ground_blob_1.tintTopLeft = 4759093;
		ground_blob_1.tintTopRight = 4759093;
		ground_blob_1.tintBottomLeft = 4759093;
		ground_blob_1.tintBottomRight = 4759093;

		// apple
		/** @type {Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body }} */
		const apple = this.add.image(594, -20, "apple");
		this.physics.add.existing(apple, false);
		apple.body.maxVelocity.x = 100000000;
		apple.body.setSize(100, 119, false);

		// text_1
		const text_1 = this.add.text(22, 16, "", {});
		text_1.text = "Score:";
		text_1.setStyle({ "fontSize": "32px" });

		// text_2
		const text_2 = this.add.text(156, 16, "", {});
		text_2.text = "0";
		text_2.setStyle({ "fontSize": "32px" });

		// collider
		const collider = this.physics.add.overlap(hedgehog, apple, this.collide);

		this.hedgehog = hedgehog;
		this.dark_ground_blob = dark_ground_blob;
		this.dark_ground_blob_1 = dark_ground_blob_1;
		this.dark_ground_blob_2 = dark_ground_blob_2;
		this.dark_ground_blob_3 = dark_ground_blob_3;
		this.ground_blob = ground_blob;
		this.apple = apple;
		this.text_1 = text_1;
		this.text_2 = text_2;
		this.rightKey = rightKey;
		this.collider = collider;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body }} */
	hedgehog;
	/** @type {Phaser.GameObjects.Image} */
	dark_ground_blob;
	/** @type {Phaser.GameObjects.Image} */
	dark_ground_blob_1;
	/** @type {Phaser.GameObjects.Image} */
	dark_ground_blob_2;
	/** @type {Phaser.GameObjects.Image} */
	dark_ground_blob_3;
	/** @type {Phaser.GameObjects.Image} */
	ground_blob;
	/** @type {Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body }} */
	apple;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Text} */
	text_2;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Physics.Arcade.Collider} */
	collider;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const bushes = [this.dark_ground_blob, this.dark_ground_blob_1, this.dark_ground_blob_2, this.dark_ground_blob_3];

		const positions = [];

		bushes.forEach(b => {
			positions.push({x: b.x, y: b.y});
		})

		const first_position = positions[0];

		this.hedgehog.x = first_position.x;
		this.hedgehog.y = first_position.y;

		this.apple.x = first_position.x;
		this.apple.y = 0;

		let current_position_index = 0;

		this.rightKey.on("down", () => {
			current_position_index = current_position_index + 1;
			if(current_position_index > positions.length - 1){
				current_position_index = 0;
			}

			const new_hedgehog_position = positions[current_position_index];
			this.hedgehog.x = new_hedgehog_position.x;
			this.hedgehog.y = new_hedgehog_position.y;
		})

		this.positions = positions;

		// const clouds = [this.blob, this.blob_1, this.blob_2];
		// clouds.forEach(cloud => {
		// 	cloud.setInteractive();
		// 	cloud.on("pointerdown", () => {
		// 		const t = this.tweens.add({
		// 			targets: [cloud],
		// 			x: {from: cloud.x, to: cloud.x + 2000},
		// 			duration: 200,
		// 			easing: "bounce",
		// 			yoyo: false,
		// 			paused: true
		// 		})
		// 		t.play();
		// 	})
		// })

		// this.ground_blob.setInteractive()
		// this.ground_blob.on("pointerdown", () => {
		// 	clouds.forEach(cloud => {
		// 		if(cloud.x > 1280) {
		// 			cloud.setPosition(cloud.x - 2000, cloud.y);
		// 		}
		// 	})
		// })
	}

	collide = (a, b) => {
		this.text_2.text = Number(this.text_2.text) + 1;
		const random_index = Phaser.Math.Between(0, 3);
		const random_position = this.positions[random_index];
		b.x = random_position.x;
		b.y = 0;
		b.body.setVelocityY(0);
	};

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
