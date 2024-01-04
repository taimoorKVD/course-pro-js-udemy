

class DatabaseConnection {
    static connection;
    static env = "development";

    static {
        if(!this.env === "development") {
            this.connection = this.loadProductionConnection();
        } else {
            this.connection = this.loadDevelopmentConnection();
        }
    }

    static loadProductionConnection() {
        console.log('Hi from production!');
    }

    static loadDevelopmentConnection() {
        console.log('Hi from development!');
    }
}