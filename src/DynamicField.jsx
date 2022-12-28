import React from "react";

const DynamicField = ({ propdata }) => {
  const { fields, register, errors, remove } = propdata;
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <section className={"section"} key={field.id}>
              <input
                placeholder="address"
                type="text"
                {...register(`address.${index}.address`, {
                  // required: true
                })}
                className={errors?.address?.[index]?.address ? "error" : ""}
                defaultValue={field.address}
              />
              <input
                placeholder="zip"
                type="number"
                {...register(`address.${index}.zip`, {
                  valueAsNumber: true,
                  // required: true
                })}
                className={errors?.address?.[index]?.zip ? "error" : ""}
                defaultValue={field.zip}
              />
              <input
                placeholder="City"
                type="text"
                {...register(`address.${index}.City`, {
                  //   valueAsNumber: true,
                  // required: true
                })}
                className={errors?.address?.[index]?.City ? "error" : ""}
                defaultValue={field.City}
              />
              <div className={"st"}>
                <input
                  type="checkbox"
                  // id={id}
                  {...register(`address.${index}.status`)}
                  defaultChecked={field.status}
                />{" "}
                Status
              </div>
              <button type="button" onClick={() => remove(index)}>
                DELETE
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicField;
