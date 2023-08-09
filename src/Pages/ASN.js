import React from "react";
import axios from "axios";
// const bcrypt = require("bcryptjs");

const SecretString =
  "$2a$08$1kAIcN0mWO66T5Q.z.XhXOeDEmssaDnYOO3BXVUDMG12wTsJc1aj.";
function ASN() {
  //   const authToken = () => {
  //     bcrypt.genSalt(8, function(err, salt) {
  //       bcrypt.hash("KWRbYoAtzs", salt, function(err, hash) {
  //         console.log(err);
  //         console.log(hash);
  //       });
  //       console.log(err);
  //       console.log(salt);
  //     });
  //   };
  const headers = {
    "Content-Type": "multipart/form-data",
    Auth: "$2a$08$1kAIcN0mWO66T5Q.z.XhXOeDEmssaDnYOO3BXVUDMG12wTsJc1aj.",
    "Access_Control-Allow-Origin": "http://localhost:5000/",
  };
  console.log("Auth " + headers.Auth);
  const onClicksubmit = () => {
    axios
      .post("http://localhost:7373/fetchTcAsnId/85206382802", {
        headers: { headers },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Verify ASN</h2>
      <input type="text" placeholder="Enter TC_ASN_ID" />
      <button onClick={onClicksubmit}> Submit</button>
    </div>
  );
}

export default ASN;
