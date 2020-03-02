import { Logo } from "./assets";

export default function preload(): void {
  this.load.image(Logo.id, Logo.url);
}
