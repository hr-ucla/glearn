import React, {useState} from 'react';
import { View } from 'react-native';
import SignIn from './SignIn.js';
import Deliverables from './Deliverables.js';

export default function App() {
  return (
    <>
      <SignIn />
      <Deliverables />
    </>
  );
}