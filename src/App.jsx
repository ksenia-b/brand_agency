import React from "react";
import Button from "./components/Button/index.jsx";
import FileUpload from "./components/FileUpload/index.jsx";
import Input from "./components/Input"
import Card from "./components/Card/index.jsx";
import salvador from "./assets/i/salvador.jpg";
import takamara from "./assets/i/takamara.jpg";
import RadioButton from "./components/RadioButton/index.jsx";
const POSITIONS = ["Frontend developer", "Backend developer", "Designer", "QA"];

function App() {
  const [value, setValue] = React.useState('');

  return (
    <div className={'font-nunito flex-col gap-2'}>
      <Button>Normal</Button>
      <FileUpload/>
      <Input
          name="foo"
          id="foo"
          type="text"
          htmlFor="foo"
          value={value}
          onChange={({ target }) => setValue(target.value)}
      />
        <Card  image={salvador}
            name={"Salvador Stewart Flynn Thomas..."}
              position={"Frontend Developer Frontend ..."}
              email={"frontend_develop@gmail.com"} phone={"+38 (098) 278 44 24"}/>
        <RadioButton items={POSITIONS} question="Select your position"/>

    </div>
  )
}

export default App
