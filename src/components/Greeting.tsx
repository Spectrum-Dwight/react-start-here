type Props = {
  name: string;
  age: number;
};

export default function Greeting({name, age}: Props) {

  return (
    <p>
      Hello, my name is {name} and I am {age} years old.
    </p>
  );
}

