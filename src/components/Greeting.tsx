type GreetingProps = {
  name: string;
  age: number;
};

export default function Greeting({ name, age }: GreetingProps) {
  return (
    <p>
      Hello, my name is {name} and I am {age} years old.
    </p>
  );
}

