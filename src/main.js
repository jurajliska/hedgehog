import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";
import MainScene from "./scenes/MainScene.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#0099db",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				gravity: {
					y: 98
				}
			}
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("MainScene", MainScene);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}