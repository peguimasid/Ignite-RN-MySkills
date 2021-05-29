import React, { useCallback, useState, useEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Button from "../../components/Button";

import styles from "./styles";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillsCounter, setSkillsCounter] = useState(0);

  const handleAddSkill = useCallback(() => {
    setSkills((prevState) => [...prevState, inputValue]);
    setInputValue("");
  }, [inputValue]);

  useEffect(() => {
    setSkillsCounter(skills.length);
  }, [skills]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Guilhermo</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="New Skill"
          placeholderTextColor="#555"
        />
        <Button onPress={handleAddSkill}>Adicionar</Button>

        <Text style={[styles.title, { marginTop: 50, marginBottom: 20 }]}>
          My Skills: ({skillsCounter})
        </Text>
        <FlatList
          data={skills}
          keyExtractor={(skill) => skill}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5} style={styles.skillContainer}>
              <Text style={styles.skillText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default Home;
