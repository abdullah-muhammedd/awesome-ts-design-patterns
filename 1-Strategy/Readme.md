# The Problem

- First: We had the SimUDuck app which is a simulation for a bond of ducks.
- The SimUDuck system id designed as a super class `Duck` and many duck classes that inherits from it.

![Untitled](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2Ff9821236-fb3d-4e14-9ac7-181a6ddd97e6%2FUntitled.png?table=block&id=d707ccdc-e934-4a4e-a5a1-186f128b1901&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1150&userId=&cache=v2)

- But we now need to make ducks fly.
- As a first solution John added a fly method to the duck class, so that he easily makes all ducks fly.

![Untitled](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F5397c863-08aa-49d2-b66b-5b0b4c86a6cf%2FUntitled.png?table=block&id=b93bdd67-edf0-4476-902b-bf720cb88dd8&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1140&userId=&cache=v2)

- But that made them surprisingly see a flying rubber duck.
- So he made another bad decision.
- He tried to create an interface which is called flyable, and he decided that only some ducks will implement this interface and actually fly.

![Untitled](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F9e7d4b1f-4da7-49bb-8568-7b922f9026bb%2FUntitled.png?table=block&id=d5973680-8d23-4c1e-a21f-fd8637c6b514&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1400&userId=&cache=v2)

- Although it looks promising at the beginning, but he forget about a very important aspect which is reusability, now each duck class will implement the fly behavior which is in most cases it is the same, that means many duplicate lines of code across the application which means that when we need to change this behavior we will need to change every line of code again and again and again
- So how can the poor Jon solve this mess.

# Strategy Pattern

<aside>
💡 We need the strategy pattern when:
    - A `localized` update to the code caused a `nonlocal side effect` (flying rubber ducks)!
    - Every other solution related to interfaces causes the `loss` of reusability.
</aside>

> **From refactoring.guru :** 
**`Strategy`** is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.
> 

> **From HFDP :**
> **`The Strategy Pattern`** defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
> 

# Steps to fix the SimUDuck Design

1. Strategy pattern is really about three things 
    1. **Define the parts of your system that varies and separate them from the parts that remain constant.**
    2. **Favor Composition over inheritance** 
    3. **Program to an interface not to an implementation (Polymorphism, Polymorphic references)**
    
    <aside>
    💡 Programming to an interface means Programming to a Super Type
    </aside>
    
2. So according to the point number (1) what varies in our system is the fly and the quack behaviors other than that remains constant. 
3. What we will do is separating the behaviors into a new set of classes (family of algorithms) that implements a common interface (Super Type)
    
    ![Untitled](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F8d82fd86-f596-4383-b8cc-7e4b780283c2%2FUntitled.png?table=block&id=36b42aca-1ab9-4e6b-9bf0-c9d11f205e13&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1340&userId=&cache=v2)
    
4.   Now any duck class will simply use with these behaviors and  (`flyBehaviour` and `quackBehaviour`)  and delegate the actual action to them 
5. In addition we can set these behaviors at runtime using regular setters 
    
    ![Untitled](https://fluttering-turkey-fba.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7556c6be-038c-4f7c-afa6-a36298e5183c%2F77a36671-a8e3-4e60-852f-3d07dddc823a%2FUntitled.png?table=block&id=e9df262b-3165-4c73-84fd-2c27f7ad5dc4&spaceId=7556c6be-038c-4f7c-afa6-a36298e5183c&width=1440&userId=&cache=v2)
    

<aside>
💡 There is a slight problem here 
the constructor of each duck class sets the behavior itself like

```jsx
public MallardDuck() {
quackBehavior = new Quack();
flyBehavior = new FlyWithWings();
}
```

Which violates the principle ⇒ **Program to an interface not to an implementation (Polymorphism, Polymorphic references)**

The book mentioned it will be solved along the book but I can say it can easily solved by applying dependency inversion principle (dependency injection)
But also I’m sure I will discover other ways to solve that during my HFDP journey
</aside>

# What the strategy pattern gave us more than solving our small problem

1. The duck class and its subclasses are now decoupled from the behavior class so making change to the behavior classes will not require us to change the duck classes
2. Any new behavior class that follow the fly or quack behaviors can easily added by creating a new class 
3. Any new behavior type that is completely different from the quack and fly behaviors can easily added with minimum change to the old duck classes
    
    <aside>
    💡 The points 2 & 3 are coming from the fact that the duck classes are completely decoupled from the behaviors classes
    
    </aside>
    
4. Any class that is not a duck can easily use our behaviors classes (e.g. the duck call device)

# Real World examples with MERN Stack

## React.js

### Real-World Scenario: Sorting a List of Items

Imagine you're building an e-commerce application where users can sort products based on different criteria, such as price, rating, or name. Each sorting criteria represents a different algorithm for arranging the items. Instead of hardcoding these sorting methods directly into the component, you can use the Strategy pattern to define a family of sorting algorithms and make them interchangeable.

### Example

1. **Define Strategy Interface**: Create an interface that represents the sorting strategy.

```tsx
interface ISortingStrategy {
  sort(items: Product[]): Product[];
}

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
}

```

1. **Implement Concrete Strategies**: Implement different sorting strategies.

```tsx
class SortByPriceAscending implements ISortingStrategy {
  sort(items: Product[]): Product[] {
    return items.slice().sort((a, b) => a.price - b.price);
  }
}

class SortByPriceDescending implements ISortingStrategy {
  sort(items: Product[]): Product[] {
    return items.slice().sort((a, b) => b.price - a.price);
  }
}

class SortByRating implements ISortingStrategy {
  sort(items: Product[]): Product[] {
    return items.slice().sort((a, b) => b.rating - a.rating);
  }
}

class SortByName implements ISortingStrategy {
  sort(items: Product[]): Product[] {
    return items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
}

```

1. **Use Strategy in Component**: Use the sorting strategies in a component that displays the list of products.

```tsx
import React, { useState } from 'react';

type ProductListProps = {
  products: Product[];
  sortingStrategy: ISortingStrategy;
};

const ProductList: React.FC<ProductListProps> = ({ products, sortingStrategy }) => {
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSort = () => {
    setSortedProducts(sortingStrategy.sort(products));
  };

  return (
    <div>
      <button onClick={handleSort}>Sort</button>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>{product.name} - ${product.price} - {product.rating} stars</li>
        ))}
      </ul>
    </div>
  );
};

// Usage example
const products: Product[] = [
  { id: 1, name: 'Product A', price: 30, rating: 4.5 },
  { id: 2, name: 'Product B', price: 20, rating: 4.0 },
  { id: 3, name: 'Product C', price: 50, rating: 5.0 },
];

// Choose the strategy based on user selection or other logic
const sortingStrategy = new SortByPriceAscending();

const App = () => (
  <ProductList products={products} sortingStrategy={sortingStrategy} />
);

```

### Benefits

- **Interchangeability**: You can easily switch between different sorting strategies without changing the component's logic.
- **Separation of Concerns**: The sorting logic is separated from the component that renders the products, making the code cleaner and easier to maintain.
- **Scalability**: New sorting strategies can be added without modifying existing code, adhering to the Open/Closed Principle.

## Node.js

A common scenario in a Node.js TypeScript application where the Strategy pattern can be applied is in managing different authentication methods. For instance, an application might need to support multiple authentication strategies, such as JWT (JSON Web Token), OAuth, and API keys. The Strategy pattern allows you to encapsulate these different authentication mechanisms and use them interchangeably.

### Real-World Scenario: Authentication

Suppose you're building a RESTful API that needs to authenticate users using different methods based on the route or service being accessed. Some endpoints may require JWT for authentication, while others might use API keys or OAuth tokens.

### Example

1. **Define Strategy Interface**: Create an interface for the authentication strategy.

```tsx
interface IAuthStrategy {
  authenticate(req: Request, res: Response, next: NextFunction): void;
}

```

1. **Implement Concrete Strategies**: Implement different authentication strategies.

```tsx
import { Request, Response, NextFunction } from 'express';

class JwtAuthStrategy implements IAuthStrategy {
  authenticate(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers['authorization'];
    if (token) {
      // Verify the JWT token
      try {
        const decoded = jwt.verify(token, 'your_secret_key');
        req.user = decoded;
        next();
      } catch (error) {
        res.status(401).send('Unauthorized');
      }
    } else {
      res.status(401).send('Unauthorized');
    }
  }
}

class ApiKeyAuthStrategy implements IAuthStrategy {
  authenticate(req: Request, res: Response, next: NextFunction): void {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === 'your_api_key') {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }
}

class OAuthStrategy implements IAuthStrategy {
  authenticate(req: Request, res: Response, next: NextFunction): void {
    // Implement OAuth logic here
    const token = req.headers['authorization'];
    if (token) {
      // Validate the OAuth token with the provider
      // Assume a function validateOAuthToken exists
      validateOAuthToken(token)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch(() => {
          res.status(401).send('Unauthorized');
        });
    } else {
      res.status(401).send('Unauthorized');
    }
  }
}

```

1. **Use Strategy in Middleware**: Use the selected strategy in the route handlers.

```tsx
import express from 'express';
import { JwtAuthStrategy } from './JwtAuthStrategy';
import { ApiKeyAuthStrategy } from './ApiKeyAuthStrategy';
import { OAuthStrategy } from './OAuthStrategy';

const app = express();
const jwtAuthStrategy = new JwtAuthStrategy();
const apiKeyAuthStrategy = new ApiKeyAuthStrategy();
const oauthStrategy = new OAuthStrategy();

app.use('/api/protected', (req, res, next) => {
  // Use JWT for /api/protected routes
  jwtAuthStrategy.authenticate(req, res, next);
});

app.use('/api/admin', (req, res, next) => {
  // Use API Key for /api/admin routes
  apiKeyAuthStrategy.authenticate(req, res, next);
});

app.use('/api/social', (req, res, next) => {
  // Use OAuth for /api/social routes
  oauthStrategy.authenticate(req, res, next);
});

app.get('/api/protected/data', (req, res) => {
  res.send('This is protected data');
});

app.get('/api/admin/data', (req, res) => {
  res.send('This is admin data');
});

app.get('/api/social/data', (req, res) => {
  res.send('This is social data');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

### Benefits

- **Flexibility**: You can easily switch between different authentication methods without modifying the main application logic.
- **Code Reusability**: Each authentication mechanism is encapsulated in its own class, making it reusable across different parts of the application.
- **Separation of Concerns**: The authentication logic is separated from the route handling logic, making the code cleaner and easier to maintain.