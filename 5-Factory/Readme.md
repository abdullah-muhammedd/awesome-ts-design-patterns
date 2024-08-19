# The Problem

- In the book the problem come with the Object Ville pizza store
- What we had first is a simple code looks like that
    
    ```java
    Pizza orderPizza(String type) {
        Pizza pizza;
    
        if (type.equals("cheese")) {
            pizza = new CheesePizza();
        } else if (type.equals("greek")) {
            pizza = new GreekPizza();
        } else if (type.equals("pepperoni")) {
            pizza = new PepperoniPizza();
        } else {
            throw new IllegalArgumentException("Unknown pizza type: " + type);
        }
    
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    
        return pizza;
    }
    
    ```
    
- But we had a problem with adding new pizzas this if else will go and expand forever and that violates 2 of our design principles
    - Encapsulate what varies. and separate it from what remains constant.
    - OCP: Classes should be open  for extension, but closed for modification.
- So what we can do?
- Simply our developers thought that we can create something called Simple Factory. While is not a real design pattern but it is a simple approach that can take our creation code and separate it from the client code that uses the created object
    
    ```java
    public class SimplePizzaFactory {
    
        public Pizza createPizza(String type) {
            Pizza pizza = null;
    
            if (type.equals("cheese")) {
                pizza = new CheesePizza();
            } else if (type.equals("pepperoni")) {
                pizza = new PepperoniPizza();
            } else if (type.equals("clam")) {
                pizza = new ClamPizza();
            } else if (type.equals("veggie")) {
                pizza = new VeggiePizza();
            }
    
            return pizza;
        }
    }
    
    ```
    
- And it worked well actually it didn’t caused any problem
- But because we know that the only real thing in software engineering is the CHANGE, our small brand started Franchising after a couple of months.
- Creating new franchises in different places that means we now have different styles of pizza to create, (e.g. Chicago style which looks like a dish, classic New York style, California style where they may put pineapple on the pizza, and so on) so now we need a new way to manage all different styles of pizzas
- So how we can solve that ?


> 💡 Our goal is to create different pizza stores types according to which store is used a different pizza style will be served to the customers ⇒ Our factories will produce one product which is pizza but in different contexts



# Factory Method Pattern

> **From refactoring.guru :**
> 
> 
> **`Factory Method`** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
> 

> **From HFDP :**
> 
> 
> **`Factory Method`** defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses
> 

# **Recreate Object Ville Design**

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F261c8354-082f-4653-9e39-f6eb0d978d02%2Fimage.png?table=block&id=20a28907-ad5c-4bb0-8966-852755a85d66&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1340&userId=&cache=v2)

- The steps are as following
    - Make the pizza store class abstract (because we still have a shared behavior which is ordering the pizza if there is nothing shared we will just use interfaces)
    - Create an abstract method which is createPizza inside our abstract class
    - Create a new class for each pizza style (e.g. ChicagoPizzaStore , NewYorkPizzaStore, …etc)
    - Make these classes extend PizzaStore and override the createPizzaMethod
    - and boom we now have different styles of pizza can served according to the selected type of store
        
        ![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2Fc830d0ed-707e-4c7c-b875-423505d32b10%2Fimage.png?table=block&id=4b0a0614-420a-4b6c-be1e-ee72bcba3e58&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1540&userId=&cache=v2)
        

# The Problem cont.

- Our system is working very well but know with the continues expanding and with more and more franchises opened every month we have a new problem
- The quality control, we want to make sure that our franchises uses high quality ingredients but with different regions they may have to use different types of ingredients for example New Your store has access to fresh seafood, while Chicago has to depend on frozen seafood, so what exactly a good manager will do to fix the quality problems.
- Simply he will ship ingredients to his stores and according to the region they ingredients will be slightly different according to the location, the whether and many many more factors
- So the manager decided to create a regional factories that will ship products to all stores in each region.

# Abstract Factory Pattern

> **From refactoring.guru :**
> 
> 
> **`Abstract Factory`** is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
> 

> **From HFDP :**
> 
> 
> **`Abstract Factory`**  provides an interface for creating families of related or dependent objects  without specifying their concrete classes.
> 

# Adding the Ingredients factories to the Object Ville System

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2Fabd2e166-ceaf-4e25-990f-e16e57361609%2Fimage.png?table=block&id=661889db-7b66-4c6d-b499-59b2650e5490&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1440&userId=&cache=v2)

- Based on the blueprint UML diagram The steps to add the ingredient factories are as following
    - Create your products interfaces and concrete implemintations
    - Create the abstract factory ⇒ IngreidientsFactory
    - Create the concrete factories ⇒ ChicagoIngredientsFactory and NewYorkIngredientFactory
    - The concrete factories will use the products (aka ingredients) based on the region for example in Chicago we will use Mozzarella Cheese and in New York we will use Parmesan
    - Now the pizza classes which are our clients will rely on the factories to prepare the ingredients for them without knowing what exactly the source of these ingredients actually the pizza and the store do not care at all all I know that when I request a cheese I get a cheese it doesn’t manner if it’s poisoned (aka blue cheese) or not

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F5efd4afb-c002-4a77-af5c-49f618197bd1%2Fimage.png?table=block&id=aed6f61f-ad2a-4c0b-9c82-f56c46aad12f&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1150&userId=&cache=v2)

# How to recreate or track this implementation

### 1) Create Ingredients Interfaces

- **Create interfaces that represent the different pizza ingredients:**
    - **`Dough`** - Interface for dough types with a `getDoughType` method.
    - **`Sauce`** - Interface for sauces with a `getSauceType` method.
    - **`Cheese`** - Interface for cheeses with a `getCheeseType` method.
    - **`Pepperoni`** - Interface for pepperoni with a `getPepperoniType` method.
    - **`Clams`** - Interface for clams with a `getClamType` method.
    - **`Veggies`** - Interface for veggies, including a `getVeggieType` method that returns an array of `VeggieType`.

### 2) Create Concrete Ingredients

- **Implement the interfaces created in step 1 for specific ingredients:**
    - **`ChicagoDough`** - Implements `Dough`, e.g., with type `Thick Crust`.
    - **`ChicagoSauce`** - Implements `Sauce`, e.g., with type `Marinara`.
    - **`ChicagoCheese`** - Implements `Cheese`, e.g., with type `Parmesan`.
    - **`ChicagoPepperoni`** - Implements `Pepperoni`, e.g., with specific type.
    - **`ChicagoClams`** - Implements `Clams`, e.g., with type `Frozen Clams`.
    - **`ChicagoVeggies`** - Implements `Veggies`, e.g., with types `[Mushroom, Onion]`.
    - (Optional) Add more ingredients like New York Ingredients

### 3) Create `PizzaIngredientFactory` Interface

- **Create an interface for the ingredient factory:**
    - **`PizzaIngredientFactory`** - Declares methods like `createDough`, `createSauce`, `createCheese`, `createVeggies`, `createPepperoni`, and `createClam`.

### 4) Create Concrete Ingredient Factories

- **Implement the `PizzaIngredientFactory` interface for specific factories:**
    - **`ChicagoIngredientsFactory`** - Implements `PizzaIngredientFactory` and creates Chicago-style ingredients by returning concrete ingredient instances like `ChicagoDough`, `ChicagoSauce`, etc.
    - (Optional) Add more factories for different styles, e.g., `NewYorkIngredientsFactory`.

### 5) Create the Pizza Abstract Class

- **Create an abstract class for pizzas that will define the structure of all pizzas:**
    - **`Pizza`** - Abstract class with properties like `dough`, `sauce`, `cheese`, `veggies`, `pepperoni`, and `clam`. Includes methods like `prepare`, `bake`, `cut`, `box`, and `toString`.

### 6) Create Concrete Pizzas

- **Create specific pizza classes that extend the `Pizza` abstract class:**
    - **`ChicagoCheesePizza`** - Concrete class extending `Pizza`, using ingredients from `ChicagoIngredientsFactory`.
    - (Optional) Add more pizzas, like `ChicagoVeggiePizza`, `NewYorkCheesePizza`, etc.

### 7) Create the `PizzaStore` Abstract Class

- **Create an abstract class for the pizza store:**
    - **`PizzaStore`** - Abstract class with the method `orderPizza(type: string)` and an abstract method `createPizza(type: string): Pizza`.

### 8) Create Concrete Stores

- **Implement the `PizzaStore` abstract class to create specific stores:**
    - **`ChicagoPizzaStore`** - Implements `PizzaStore` and defines the `createPizza` method to create Chicago-style pizzas using `ChicagoIngredientsFactory`.
    - (Optional) Add more stores, like `NewYorkPizzaStore`, to create pizzas of different styles using corresponding factories.

# How this is related to dependency inversion principle

### Dependency Inversion Principle (DIP)

- **Definition:**
    - High-level modules should not depend on low-level modules; both should depend on abstractions.
    - Abstractions should not depend on details; details should depend on abstractions.
    - Goal: Decouple software modules for better maintainability and flexibility.

### How Factory Method Applies DIP

- **Factory Method:**
    - High-level classes depend on an abstract factory interface.
    - Concrete object creation is delegated to subclasses.
    - High-level modules remain unaffected by changes in low-level details.

### How Abstract Factory Applies DIP

- **Abstract Factory:**
    - Provides an interface for creating families of related objects.
    - High-level modules depend on the abstract factory interface, not specific implementations.
    - Ensures that high-level modules are insulated from changes in low-level details.

### What "Inversion" Means

- **Inversion:**
    - Traditional dependency flow is inverted.
    - High-level modules depend on abstractions rather than concrete low-level modules.
    - Reduces coupling, increases flexibility and testability.
    
  
    > 💡 Think DIP ⇒ From the bottom up
    
   
    

### How Dependency Injection Extends from DIP

- **Dependency Injection (DI):**
    - Implements DIP by injecting dependencies from external sources.
    - Encourages the use of interfaces or abstract classes.
    - Enhances modularity, maintainability, and testability by easily swapping out implementations.

# Real World Examples with MERN Stack

## **Factory Method Pattern**

### **React.js**

**Real-World Scenario: Dynamic Form Component Creation**

**Description:** In a React application, you might need to dynamically generate different types of form components based on user input or application state. The Factory Method pattern can be used to abstract the creation of these form components.

### **Example: Functional Components and Factory Method**

```tsx
import React from 'react';

// Define the form component type
type FormComponentType = 'text' | 'checkbox';

// Factory function to create form components
const createFormComponent = (type: FormComponentType): React.FC => {
  switch (type) {
    case 'text':
      return () => <input type="text" />;
    case 'checkbox':
      return () => <input type="checkbox" />;
    default:
      return () => <div>Unknown form type</div>;
  }
};

const App: React.FC = () => {
  const TextForm = createFormComponent('text');
  const CheckboxForm = createFormComponent('checkbox');

  return (
    <div>
      <TextForm />
      <CheckboxForm />
    </div>
  );
};

export default App;

```

### **Benefits**

- **Flexibility:** Easily add new form types by modifying the `createFormComponent` function without altering existing components.
- **Encapsulation:** Encapsulates the logic for creating form components, keeping it separate from the rendering logic.
- **Maintainability:** Provides a clean way to manage different form component types, enhancing code clarity.

## **Abstract Factory Pattern**

### **Node.js with TypeScript**

**Real-World Scenario: Multi-Database Support**

**Description:** In a Node.js application, supporting multiple types of databases can be handled using the Abstract Factory pattern to create database connections uniformly.

### **Example: Abstract Factory for Database Connections**

```tsx
// Abstract factory for database connections
interface DatabaseFactory {
  createConnection(): string;
}

// Concrete factories for specific databases
class MongoDBFactory implements DatabaseFactory {
  createConnection(): string {
    return 'MongoDB Connection';
  }
}

class PostgreSQLFactory implements DatabaseFactory {
  createConnection(): string {
    return 'PostgreSQL Connection';
  }
}

// Client code
const getDatabaseConnection = (dbType: 'mongo' | 'postgres'): string => {
  let factory: DatabaseFactory;
  switch (dbType) {
    case 'mongo':
      factory = new MongoDBFactory();
      break;
    case 'postgres':
      factory = new PostgreSQLFactory();
      break;
    default:
      throw new Error('Unknown database type');
  }
  return factory.createConnection();
};

console.log(getDatabaseConnection('mongo')); // Output: MongoDB Connection
console.log(getDatabaseConnection('postgres')); // Output: PostgreSQL Connection

```

### **Benefits**

- **Unified Interface:** Provides a common method for creating database connections, abstracting away specific details of each database.
- **Scalability:** Easily extendable to include support for additional databases by creating new factory classes.
- **Separation of Concerns:** Separates database creation logic from business logic, enhancing code organization and maintainability.

### **Example: Abstract Factory for API Clients**

```tsx
// Abstract factory for API clients
interface ApiClientFactory {
  createClient(): string;
}

// Concrete factories for different API clients
class GoogleApiClientFactory implements ApiClientFactory {
  createClient(): string {
    return 'Google API Client';
  }
}

class FacebookApiClientFactory implements ApiClientFactory {
  createClient(): string {
    return 'Facebook API Client';
  }
}

// Client code
const getApiClient = (provider: 'google' | 'facebook'): string => {
  let factory: ApiClientFactory;
  switch (provider) {
    case 'google':
      factory = new GoogleApiClientFactory();
      break;
    case 'facebook':
      factory = new FacebookApiClientFactory();
      break;
    default:
      throw new Error('Unknown provider');
  }
  return factory.createClient();
};

console.log(getApiClient('google')); // Output: Google API Client
console.log(getApiClient('facebook')); // Output: Facebook API Client

```

### **Benefits**

- **Consistency:** Ensures a uniform interface for interacting with different API clients.
- **Flexibility:** Easily add new API clients by implementing new concrete factory classes.
- **Decoupling:** Decouples the client creation logic from the application logic, enhancing modularity and maintainability.