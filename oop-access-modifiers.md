# Access Modifiers in TypeScript

## Introduction
`Access modifiers` in TypeScript control the permission of access or modification in class properties and methods. Think of a parcel delivery system, where a customer should only see the recipient's name and tracking number, but should not be able to change every detail stored inside a parcel. TypeScript access modifiers help to set those boundaries and keeps shared objects easier to manage.
 
## How the modifiers work
- `public` property or method can be accessed from anywhere in the code. It is the default, so writing the keyword is optional. 
- `private` property accessible only inside the class that declares it. 
- `protected` allows access within the class and any child class that inherits (extends) from it, but not from outside those classes. 
- `readonly` is different because it prevents to change a value rather than hiding a property.

Here is a small example:

```typescript
class Parcel {
  constructor(
    public recipient: string,
    private pickupCode: string,
    protected baseFee: number,
    public readonly trackingId: string
  ) {}

  verifyCode(code: string): boolean {
    return code === this.pickupCode;
  }
}

class DeliveryFee extends Parcel {
  totalFee(): number {
    return this.baseFee + 50;
  }
}

const parcel = new DeliveryFee("Minhaz", "P42", 120, "TR-9");
console.log(parcel.recipient);          // Minhaz
console.log(parcel.verifyCode("P42"));  // true
console.log(parcel.totalFee());         // 170
console.log(parcel.trackingId);         // TR-9
```

The constructor keywords create and initialize the values. The recipient is public, so we can read or change it directly. The pickup code is private, so we check it through the class method instead. DeliveryFee can use `baseFee` because that property is protected, although code outside the class cannot access it. The tracking ID is readable, but TypeScript rejects attempts to assign it a new value.

## Conclusion
Use private to protect sensitive data, protected to share it with child classes, and readonly for values that must never change after creation. 
