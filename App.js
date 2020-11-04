import React, { useState } from 'react';
import { View } from 'react-native';
import SignIn from './SignIn.js';
import Module from './Module.js';
import sampleModule from './moduleDataExample.js';

export default function App() {
    return (
    <>
      <Module module={sampleModule} />
    </>
  );
}