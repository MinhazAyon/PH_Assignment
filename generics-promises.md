# TypeScript Generics and Promise<T>

## Introduction
`Generics` in TypeScript allow us to write reusable code that works with different data types while maintaining type safety. Suppose a single helper that downloads data from many API endpoints, such as products, orders, and reviews. Each endpoint returns a completely different outputs. If the helper returns `any`, TypeScript may give an error. Writing one function per type would be repetitive, and generics solve that problem.
 
## How the modifiers work
A generic lets us leave a space for a type and fill it when we use the code. We usually call it `T`, although any name works. Instead of using `any`, we can keep the specific type attached to the result. This works in functions, interfaces, and asynchronous operations.

`Promise<T>` is itself a generic. A promise is a placeholder for a value that arrives later, and `T` describes that value. So `Promise<string>` eventually gives a string, and `Promise<Product[]>` eventually gives a list of products.

Here is a small example:

```typescript
type Product = { id: number; title: string; price: number };

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return (await res.json()) as T;
}

async function showPrice() {
  const item = await getJson<Product>("/api/products/7");
  console.log(item.title, item.price);
}
```

Here, `res.json()` gives back `Promise<any>`, because the compiler cannot know what the server will send. The `as T` line tells TypeScript to trust the type you supplied. Since the function is `async`, it always returns a promise, so the return type is `Promise<T>`, not `T`. When you write `await`, the promise is unwrapped, and `item` becomes a plain `Product`.

There is an important catch with the `as T` part. It tells TypeScript what shape we expect, but it does not check whether the server actually sent that shape. For real applications, we should validate unknown API data before trusting it, and handle rejected requests with `try/catch` where appropriate.

## Conclusion
Generics let one reusable function work with many types while keeping each result precisely typed. `Promise<T>` describe what will arrive, and `await` hands it over with exactly the right type.
