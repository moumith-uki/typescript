import { Geometric } from "./geomatric";
export declare class Circle extends Geometric {
    private radius;
    constructor(radius: number | undefined, color: string, filled: boolean);
    getRadius(): number;
    setRadius(radius: number): void;
    getArea(): number;
    getPerimeter(): number;
    getDiameter(): number;
    printCircle(): void;
}
//# sourceMappingURL=circle.d.ts.map