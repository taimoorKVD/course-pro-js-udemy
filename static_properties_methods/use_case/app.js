class Cat {
    static species = "Felis catus";

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    static choice(arr) {
        const randIdx = Math.floor(Math.random() * arr.length);
        return arr[randIdx];
    }

    static registerStray() {
        const names = ["Muffin", "Sleepy", "Biscuit", "Candy"],
            name = Cat.choice(names);
        return new Cat(name, "Unknown");
    }
}