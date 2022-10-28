import { Button, Form, FormLayout, Page, TextField } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { loginFetch } from "../../helper/networkHelper.js/index.js";
import { setItem } from "../../helper/storageHelper/index.js";
import Loader from "../../HOC/Loader";
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("password123");

  const selector = useSelector(state => state)
  const nav = useNavigate()

  const loginHandler = async () => {
    props.setLoading(true);
    let res = await loginFetch(
      new URLSearchParams({ username: username, password: password })
    );
    if (res.success) {
      setItem("user", { key: res.data.token, name: name });
    } else {
      alert("Invalid");
    }
    props.setLoading(false);
  };
  
  useEffect(()=>{
    if(selector.user) nav('/Dashboard')
  })

  return (
    <Page>
      <Form onSubmit={loginHandler} autoComplete={false}>
        <FormLayout>
          <TextField
            label="Your Name"
            type="text"
            value={name}
            onChange={(value) => setName(value)}
            helpText="We'll show this Name to your profile"
          />
          <TextField
            label="Username"
            type="text"
            value={username}
            onChange={(value) => setUsername(value)}
            helpText="Enter your username"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(value) => setPassword(value)}
            helpText="Never Disclose your password to anyone"
          />
          <Button submit primary loading={props.loading}>
            Submit
          </Button>
        </FormLayout>
      </Form>
    </Page>
  );
};

export default Loader(Login);
