import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import DynamicField from "./DynamicField";
const App = () => {
  const testingobj = {
    City: "mirpur",
    Street: "usa",
    address: [
      { address: "dhaka", zip: "123", City: "dh", status: true },
      { address: "com", zip: "133", City: "uk", status: false },
      { address: "jos", zip: "23", City: "cm", status: true },
      { address: "dhaka", zip: "123", City: "dh", status: true },
      { address: "com", zip: "133", City: "uk", status: false },
      { address: "jos", zip: "23", City: "cm", status: true },
    ],
    assignment: "male",
    checkedActive: 1,
    client_dob: "",
    country: "NY",
    dob: "2021-08-05",
    email: "testdfv@sdf.dsf",
    first_date: "",
    first_name: "cbvxdfg",
    fruit: "Male",
    gender: "Male",
    group: "work",
    group2: "work",
    language: "male",
    last_name: "sdgsdg",
    middle_name: null,
    more_zip0: "34",
    more_zip1: "45234",
    phone: "+14353464363",
    pos: "work",
    race_details: "male",
    referred_by: "male",
    region: "work",
    zip: "500",
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: testingobj.address,
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    name: "address",
    control,
  });

  const onSubmit = (data) => console.log(data);
  console.log("check fields", fields);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"section"}>
          <input
            defaultValue={testingobj.City}
            {...register(`DAddress`)}
            placeholder="First Name"
          />
          <input
            defaultValue={testingobj.last_name}
            placeholder="name"
            {...register(`DZip`)}
          />
          <input
            defaultValue={testingobj.first_name}
            placeholder="name"
            {...register(`DCity`)}
          />
          <button type="button" onClick={() => append()}>
            APPEND
          </button>
        </div>

        <DynamicField propdata={{ fields, register, errors, remove }} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
