import { Shape } from "./Shape";

export class Circle implements Shape {
   private color: string;
   private x: number;
   private y: number;
   private radius: number;

   constructor(color: string) {
      this.color = color;
   }

   setX(x: number): void {
      this.x = x;
   }

   setY(y: number): void {
      this.y = y;
   }

   setRadius(radius: number): void {
      this.radius = radius;
   }

   draw(): void {
      console.log(`Circle: Draw() [Color : ${this.color}, x : ${this.x}, y : ${this.y}, radius : ${this.radius}`);
   }
}