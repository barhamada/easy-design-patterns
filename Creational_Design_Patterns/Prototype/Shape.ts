export abstract class Shape {

   private id: string;
   protected type: string;

   abstract draw(): void;

   getType(): string {
      return this.type;
   }

   getId(): string {
      return this.id;
   }

   setId(id: string): void {
      this.id = id;
   }

   clone(): Object {
      const clone: any = {};
      for(const key in this) clone[key] = this[key];
      return clone;
   }
}
