import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import StartGameScreen from './screens/start-game-screen/index';
import GameScreen from './screens/game-screen/index';
import { styles } from './styles';


const App = () => {
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if(userNumber) {
    content = <GameScreen userOptions={userNumber} />
  }
  return (
    <SafeAreaView style={styles.container}>
        {content}
    </SafeAreaView>
  );
};


export default App;
