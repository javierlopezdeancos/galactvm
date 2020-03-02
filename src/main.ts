import { Logo } from "./assets";

export default function main(): void {
  const logo = this.add.image(400, 70, Logo.id);

  this.tweens.add({
    targets: logo,
    y: 350,
    duration: 1500,
    ease: "Sine.inOut",
    yoyo: true,
    repeat: -1
  });
}
