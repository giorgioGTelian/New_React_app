import 'style.css';
import React, { useState } from "react";
import Field from "./components/field.js";
import Translate from "./components/translate";
import Languages from "./components/languages";



export default function App() {
  const [language, setLanguage] = React.useState('es');
  const [text, setText] = React.useState('es');

  return (
    <div>
      <Field onChange={setText} />
        <Languages language= {language} OnLanguageChange={setLanguage} />
        <hr /> 
        <Translate text={text} language={language} />

    </div>
  );
}
