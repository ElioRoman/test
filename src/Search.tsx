import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField, Box } from "@mui/material";
import { Store } from "./store";

type IFormInput = {
  name: string;
};

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    Store.getData(data.name);

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <TextField
          size="small"
          autoFocus={true}
          {...register("name", {
            pattern: /^[A-Za-z0-9]+$/i,
          })}
          helperText={
            errors?.name?.type === "pattern" &&
            "Alphabetical characters and numbers only"
          }
          error={errors?.name?.type === "pattern"}
          required
        />

        <Button type="submit" sx={{ ml: 1 }} variant="contained">
          submit
        </Button>
      </Box>
    </>
  );
};

export default Search;
