import { UserRender } from "@/features/ejercicio2/components";

const dataUser = {
  image:
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  name: "John",
  lastname: "Doe",
  age: 25,
  address: {
    street: "Fake Street",
    number: 123,
    city: "Fake City",
    country: "Fake Country",
  },
};

const Ejercicio2 = () => {
  return <UserRender dataUser={dataUser} />;
};

export default Ejercicio2;
