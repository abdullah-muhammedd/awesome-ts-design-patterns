# The Problem

- In the book the problem come with the blazingly fast growing StarBuzz ordering system
- First we have the system contains a base abstract class beverage and some subclasses each one have its cost() ⇒ [Which overrides the abstract class beverage cost method] and description
- The system looks like this

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F2f39c08f-4ac8-4a1c-896f-e4071ce47b43%2Fimage.png?table=block&id=3c204308-4341-4eb6-8a2a-d84efdd6ce3a&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1150&userId=&cache=v2)

- Then with the growing system requirements they decided to create a subclass from beverage for each new addition to the menu which lead to a classes explosion

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F289c69b7-bd7e-4206-b61e-dc6f36b10e68%2Fimage.png?table=block&id=291901e9-cf12-43c5-8f41-259992ce1aff&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1210&userId=&cache=v2)

- Now we are here to solve this problem
- The first approach our developers took is to create more properties inside the beverage class that indicates and tells about the additions, they also make beverage .cost() not abstract any more, it will calculate the cost of the additions

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2Fa6ccc9e5-5212-42f3-a301-1964ec10beed%2Fimage.png?table=block&id=e51a21b8-c11b-4064-8c1b-79f2a54224ef&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1210&userId=&cache=v2)

### Why this is a bad idea?

1. think about ice tea dose ice tea need anything of these, however it still inheriting all of them 
2. What will happen if we wanted to add a new addition, say different sizes for example we will alter the base existing beverage class will 99.99% lead to errors or bugs in the subclasses
3. What if prices changed for whatever reason we will need to update the base class cost method 
4. What if a customer wants a double mocha what will we do it is not even a new addition so how will we deal with that ? 


> 💡 **Our goal is to allow classes to be easily extended to incorporate new behavior without modifying existing code. What do we get if we accomplish this? Designs that are resilient to change and flexible enough to take on new functionality to meet changing requirements.**

# Decorator Pattern


💡 We need the decorator pattern when:

- **Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.**
- **Use the pattern when it’s awkward or not possible to extend an object’s behavior using inheritance.**

> **From refactoring.guru :**
> **`Decorator`** is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
> 

> **From HFDP :**
> **`The Decorator Pattern`** attaches additional  responsibilities to an object dynamically.  Decorators provide a fl exible alternative to  subclassing for extending functionality.
> 

# Decorator Pattern Components and rules

- Decorators have the same super type as the objects they decorate.
- You can use one or more decorators to wrap an object.
- Given that the decorator has the same super type as the object it decorates, we can pass around a decorated object in place of the original (wrapped) object.
- The decorator adds its own behavior either before and/or after delegating to the object it decorates to do the rest of the job.
- Objects can be decorated at any time, so we can decorate objects dynamically at runtime with as many decorators as we like.
- In its simplest form decorator pattern will be something like this

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F2774643d-7dca-447b-8f45-e7fe2aab637a%2Fimage.png?table=block&id=aa5b2979-267c-46d6-ae24-af81ffc111f9&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1150&userId=&cache=v2)

# **Fix StarBuzz Design**

![image.png](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2Fe2979ab6-92b5-49be-ae5b-9dcff5c5ba26%2Fimage.png?table=block&id=ba836bf8-0785-4b74-8134-faf0811e54a0&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1250&userId=&cache=v2)

# Decorators Everywhere Feat. JavaScript

### **JavaScript UI and DOM**

1. **`React Higher-Order Components (HOCs):`** In React, HOCs are a form of the Decorator Pattern. They take a component (Subject) and return a new component with additional functionality (Decorators). This allows for enhancing or modifying component behavior without changing the original component.

### **Node.js**

1. **`TypeORM Entity Decorators:`** TypeORM uses decorators to add metadata to classes and properties, mapping them to database tables and columns. Decorators like `@Entity` and `@Column` provide ORM functionality by decorating class definitions and their members.

### **TypeScript Built-in Decorators**

1. **`@Override:`** This decorator, used in TypeScript , indicates that a method is intended to override a method in a base class. It helps ensure that a method correctly overrides a method from a parent class, improving code safety and readability.
2. **`@ClassDecorator:`** Applied to classes, this decorator can be used to add metadata or extend functionality. For instance, a class decorator can be used to automatically register classes in a dependency injection container or add logging capabilities.
3. **`@MethodDecorator:`** Used for methods, this decorator can enhance or modify method behavior. For example, it can be used to measure execution time, add access control, or log method calls.
4. **`@PropertyDecorator:`** Applied to class properties, this decorator can add validation, default values, or other metadata. It's useful for enhancing property behavior without modifying the class structure.
5. **`@ParameterDecorator:`** This decorator is used to add metadata or processing logic to method parameters. It can be employed to validate or transform parameters before method execution.


> 💡 And Much Much More


# Using Typescript decorators in real scenarios

Custom decorators in TypeScript offer a powerful way to add or modify functionality at runtime. Here are some real-world scenarios where custom decorators are used, along with examples and benefits for various parts of a TypeScript application:

### 1. **Class Decorators**

**Scenario:** **Registering a Service in a Dependency Injection Container**

**Details:** A custom class decorator can automatically register classes in a dependency injection (DI) container. This is useful for managing service instances and their dependencies without manual registration.

- **Example:** `@Service` decorator marks classes for automatic DI registration.

```tsx
// Custom Class Decorator Example
const services = new Map<string, any>();

function Service(target: Function) {
    services.set(target.name, new target());
}

@Service
class UserService {
    // Service logic here
}

@Service
class AuthService {
    constructor(private userService: UserService) {
        // Auth logic here
    }
}

// Retrieve services
const userService = services.get('UserService');
const authService = services.get('AuthService');

```

### 2. **Method Decorators**

**Scenario:** **Measuring Execution Time**

**Details:** A method decorator can be used to measure and log the execution time of methods, which is useful for performance monitoring and debugging.

- **Example:** `@MeasureTime` decorator logs the time taken by a method to execute.

```tsx
// Custom Method Decorator Example
function MeasureTime(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`${key} took ${end - start} ms`);
        return result;
    };

    return descriptor;
}

class DataProcessor {
    @MeasureTime
    processData(data: any) {
        // Simulate processing
        return data;
    }
}

const processor = new DataProcessor();
processor.processData('some data');

```

### 3. **Property Decorators**

**Scenario:** **Auto-Transforming Data**

**Details:** A property decorator can automatically transform data when it is set. This is useful for ensuring data consistency and formatting.

- **Example:** `@ToUpperCase` decorator converts string properties to uppercase when set.

```tsx
// Custom Property Decorator Example
function ToUpperCase(target: any, propertyKey: string) {
    let value: string;

    const getter = () => value;
    const setter = (newValue: string) => {
        value = newValue.toUpperCase();
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class User {
    @ToUpperCase
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User('john doe');
console.log(user.name); // Output: JOHN DOE

```

### 4. **Parameter Decorators**

**Scenario:** **Validation of Input Parameters**

**Details:** A parameter decorator can validate input parameters for methods. This is useful for enforcing rules and ensuring data integrity before executing methods.

- **Example:** `@NonEmpty` decorator checks that parameters are not empty.

```tsx
// Custom Parameter Decorator Example
function NonEmpty(target: any, propertyKey: string, parameterIndex: number) {
    const existingValidators: any[] = Reflect.getMetadata('validators', target, propertyKey) || [];
    existingValidators.push({ index: parameterIndex, validator: (value: any) => value !== '' });
    Reflect.defineMetadata('validators', existingValidators, target, propertyKey);
}

class DataService {
    validateInput(@NonEmpty input: string) {
        const validators = Reflect.getMetadata('validators', this, 'validateInput') || [];
        validators.forEach(({ index, validator }) => {
            if (!validator(arguments[index])) {
                throw new Error('Validation failed');
            }
        });
        // Validation logic here
    }
}

const service = new DataService();
service.validateInput(''); // Throws error

```

### **Benefits of Using Custom Decorators**

1. **Enhanced Functionality:** Custom decorators can add or modify behavior in a reusable and declarative way.
2. **Separation of Concerns:** They help keep the core logic clean by encapsulating additional features separately.
3. **Improved Maintainability:** Enhancements are applied through decorators, making code easier to maintain and extend.
4. **Declarative Code:** Custom decorators provide a way to describe additional behavior in a clear and readable manner.

# Real World Examples with MERN Stack

## **React.js**

### **Real-World Scenario: Role-Based Access Control**

**Description:** In a React application, you might want to restrict access to certain components based on user roles (e.g., admin, user). You can achieve this using context and conditional rendering without decorators.

### **Example: Using Context API and Hooks**

```jsx
import React, { createContext, useContext, ReactNode } from 'react';

// Define context for user roles
const UserRoleContext = createContext('user');

// Hook to use user role
const useUserRole = () => {
    return useContext(UserRoleContext);
};

// Role-based component rendering
const AdminPanel = () => {
    const userRole = useUserRole();
    if (userRole !== 'admin') return null;

    return <div>Admin Panel</div>;
};

const App = () => {
    return (
        <UserRoleContext.Provider value='admin'>
            <AdminPanel />
        </UserRoleContext.Provider>
    );
};

```

### **Benefits**

- **Declarative Access Control:** Role-based rendering is declarative and leverages React's built-in features for managing state and context.
- **Flexibility:** Easily switch roles or contexts without altering the component logic.
- **Integration:** Seamlessly integrates with other React features like hooks and context.

## **Node.js**

### **Real-World Scenario: Logging and Monitoring**

**Description:** In a Node.js backend, logging and monitoring can be enhanced by using middleware to apply logging functionality to specific routes or services.

### **Example: Using Middleware for Logging**

```jsx
const express = require('express');
const app = express();

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

// Service method
const getUser = (id) => {
    console.log(`Getting user with ID: ${id}`);
    // Simulated database access
    return { id, name: 'John Doe' };
};

// Route handler
app.get('/user/:id', (req, res) => {
    const user = getUser(req.params.id);
    res.send(user);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

```

### **Benefits**

- **Automatic Request Logging:** Middleware automatically logs incoming requests, providing valuable insights into API usage.
- **Minimal Code Changes:** Adding logging involves minimal changes to existing routes and handlers.
- **Scalability:** Easily extend or modify middleware to handle additional logging or monitoring requirements.

### **Example: Using Function Wrapping for Logging**

```jsx
const express = require('express');
const app = express();

// Function to wrap and log method calls
const withLogging = (fn) => {
    return (...args) => {
        console.log(`Calling function with arguments: ${JSON.stringify(args)}`);
        const result = fn(...args);
        console.log(`Function returned: ${JSON.stringify(result)}`);
        return result;
    };
};

// Service method
const getUser = withLogging((id) => {
    // Simulated database access
    return { id, name: 'John Doe' };
});

// Route handler
app.get('/user/:id', (req, res) => {
    const user = getUser(req.params.id);
    res.send(user);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

```

### **Benefits**

- **Enhanced Observability:** Automatically logs method calls and results, improving debugging and monitoring capabilities.
- **Consistent Logging:** Ensures that logging is consistently applied to methods, reducing boilerplate code.
- **Separation of Concerns:** Keeps logging logic separate from business logic, enhancing maintainability.