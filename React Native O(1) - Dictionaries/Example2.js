import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Example components (replace with your actual components)
const ComponentA = () => <View style={styles.component}><Text>Component A</Text></View>;
const ComponentB = () => <View style={styles.component}><Text>Component B</Text></View>;
const ComponentC = () => <View style={styles.component}><Text>Component C</Text></View>;

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('A');

  // Dictionary to map component names to components
  const componentMap = {
    A: ComponentA,
    B: ComponentB,
    C: ComponentC
  };

  // Function to handle component selection
  const handleSelectComponent = (componentName) => {
    setSelectedComponent(componentName);
  };

  // Render the selected component
  const SelectedComponent = componentMap[selectedComponent];

  return (
    <View style={styles.container}>
      {/* Buttons to change the selected component */}
      <TouchableOpacity onPress={() => handleSelectComponent('A')}>
        <Text style={styles.button}>Show Component A</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectComponent('B')}>
        <Text style={styles.button}>Show Component B</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectComponent('C')}>
        <Text style={styles.button}>Show Component C</Text>
      </TouchableOpacity>

      {/* Render the selected component dynamically */}
      {SelectedComponent && <SelectedComponent />} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10
  },
  component: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    margin: 15,
    borderRadius: 5,
  }
});

export default App;
