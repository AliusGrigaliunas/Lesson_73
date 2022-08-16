"use strict";
console.group('1. Implementuokite figūrų abstrakciją ir polimorfizmą naudojant abstrakčią klasę');
{
    class Shape2D {
    }
    class Rectangle extends Shape2D {
        height;
        width;
        constructor(heigth, width) {
            super();
            this.height = heigth;
            this.width = width;
        }
        getPerimeter() {
            return 2 * (this.height + this.width);
        }
        getArea() {
            return this.height * this.width;
        }
    }
    class Circle extends Shape2D {
        radius;
        diameter;
        constructor(radius, diameter) {
            super();
            this.radius = radius;
            this.diameter = diameter;
        }
        getArea() {
            return Math.PI * Math.pow(this.radius, 2);
        }
        getPerimeter() {
            return this.diameter * Math.PI;
        }
    }
    console.log('1.1. Sukurkite abstrakčią klasę Shape2D, kuri turėtų 2 abstrakčius metodus. Abu šie metodai neturi parametrų ir grąžina skaičių: "getPerimeter" ir "getArea"');
    console.log('1.2. Sukurkite Rectangle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');
    console.log('1.3. Sukurkite Circle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');
    console.groupCollapsed('1.4. Sukurkite "Shape2D" tipo masyvą, kuriame būtų 2 apskritimai ir 2 keturkampiai. Atspausdinkite visų figūrų plotus ir perimetrus naudodami "Shape2D" klasės abstrakčius metodus');
    {
        const RectangleExample = [
            new Rectangle(15, 15),
            new Rectangle(6, 6),
        ];
        const CircleExample = [
            new Circle(5, 10),
            new Circle(7, 5),
        ];
        RectangleExample.forEach((value) => console.log(`Rectangles: Area:${value.getArea()}, Perimeter:${value.getPerimeter()}`));
        CircleExample.forEach((value) => console.log(`Circle: Area:${value.getArea()}, Circumference:${value.getPerimeter()}`));
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Implementuokite figūrų abstrakciją ir polimorfizmą naudojant interface\'ą');
{
    console.log('2.1. Sukurkite abstrakčią klasę Shape2D, kuri turėtų 2 abstrakčius metodus. Abu šie metodai neturi parametrų ir grąžina skaičių: "getPerimeter" ir "getArea"');
    console.log('2.2. Sukurkite Rectangle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');
    console.log('2.3. Sukurkite Circle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');
    console.groupCollapsed('2.4. Sukurkite "Shape2D" tipo masyvą, kuriame būtų 2 apskritimai ir 2 keturkampiai. Atspausdinkite visų figūrų plotus ir perimetrus naudodami "Shape2D" klasės abstrakčius metodus');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map