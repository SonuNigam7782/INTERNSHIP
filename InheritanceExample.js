
// Inheritance 
class Parent {
    void showParent() {
        System.out.println("This is Parent class method");
    }
}

class Child extends Parent {
    void showChild() {
        System.out.println("This is Child class method");
    }
}

// Polymorphism Example
class Vehicle {
    void run() {
        System.out.println("Vehicle is running");
    }
}

class Bike extends Vehicle {
    @Override
    void run() {
        System.out.println("Bike is running safely");
    }
}

// Main Test Class
public class MainPractice {
    public static void main(String[] args) {

        System.out.println("Inheritance Demo");
        Child c = new Child();
        c.showParent();
        c.showChild();

        System.out.println("\n Polymorphism Demo");
        Vehicle v = new Bike(); // Parent reference, Child object
        v.run();
    }
}
