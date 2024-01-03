class Cat {
    static species = "Felis catus";

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class CatMood extends Cat {
    static mood = "happy";
}