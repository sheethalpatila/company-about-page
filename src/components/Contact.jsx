import React from "react";
import { TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <form className="max-w-lg mx-auto mt-6">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
