const multiplyValue = (inputNum: number, multiplier?: number): number => {

    if (typeof multiplier !== "undefined") {
        return inputNum * multiplier
    } else {
        return inputNum * 2
    }
}


type UserInputs = string | number | boolean
const processInput = (input: UserInputs): string | number => {

    if (typeof input === 'string') return input.trim().toLowerCase();
    if (typeof input === 'number') return input * 10 
    return input ? 'Active' : 'Inactive'
}


type Coordinates = readonly [number, number, string]
const formatCoordinate = (coordinates: Coordinates): string => {

    const [latitude, longitude, locationName] = coordinates;
    return `Location: ${locationName} (${latitude}, ${longitude})`
}


const concatenateArrays = <T> (...inputs: T[][]): T[] => {
    return inputs.flat()
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const result = courses.filter(
        course => course.isPublished === true && course.students >= minStudents
    );
    return result
}


const pluckValues = <T, K extends keyof T> (items: T[], key: K): T[K][] => {
    return items.map(item => item[key])
}


class Employee {
    constructor(
        protected name: string, private baseSalary: number
    ) {}

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary);
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
      throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return "Access Granted";
};