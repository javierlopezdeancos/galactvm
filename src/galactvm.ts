import "phaser";
import preload from "./preload";
import main from "./main";

export default class Scene extends Phaser.Scene {
  preload() {
    preload.apply(this);
  }

  create() {
    main.apply(this);
  }
}

window.onload = (): void => {
  const config = {
    type: Phaser.AUTO,
    backgroundColor: "#125555",
    width: 800,
    height: 600,
    scene: Scene
  };

  const galactvm = new Phaser.Game(config);
};
