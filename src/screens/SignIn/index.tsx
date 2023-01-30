import React from 'react'
import { 
    View, 
    Text,
    Image, 
} from 'react-native';
import {NavigateProps} from '../../utils/navigateProps'
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import IllustrationImg from '../../assets/illustration.png';
import EducamonoImg from '../../assets/educamono.png';
import { styles } from './styles';

export function SignIn(){
  const {navigate} = useNavigation<NavigateProps>();

  function handleSignIn() {
    navigate('Login');
  }

  return(
    <View style={styles.container}>      
      
      <Image 
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conheça a mentoria {`\n`}
          <Image
            source={EducamonoImg}
          />
        </Text>

        <Text style={styles.subtitle}>
        Conte com profissionais médicos com {`\n`}
        ampla expertise em situações críticas {`\n`}
        para te auxiliar nas tomadas de decisões.
        </Text>

      <Button
        style={{paddingLeft: 106, paddingRight: 106}}
        type='cadaster'
        title="Login" 
        activeOpacity={0.8}
        onPress={handleSignIn}
      />
      </View>
    </View>
  );
}