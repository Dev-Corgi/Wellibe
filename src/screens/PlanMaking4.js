import React,{useState,useEffect,useContext} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text, Pressable} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import SelectionList from '../components/SelectionList';
import {useNavigation} from '@react-navigation/native';
import RegistrationTooltip from '../components/RegistrationTooltip';
import Button1 from '../components/Button1';
import { ScreenNameContext } from "../store/ScreenNameContext";
import { ProgressContext } from "../store/ProgressContext";
const PlanMaking4 = () => {

  const navigation = useNavigation();

  const [isButtonActive, setisButtonActive] = useState(false);
  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const { progress, setProgress } = useContext(ProgressContext);

  useEffect(() => {
    setScreenName("세부 설정")
    setProgress(100);
    }, [])

  return (
    <View style = {styles.view}>
      <RegistrationTooltip
        title={"목표하는 하루 트레이닝\n시간은 얼마나 될까요?"}
        message={"5분 이상을 추천드릴게요!"}
      ></RegistrationTooltip>
      <SelectionList
       style={{marginTop: 32}}
          selections={[
            '5분 이하.',
            '5분 이상',
          ]}
          onSelect = {() => setisButtonActive(true)}
          ></SelectionList>
      <Button1
          style={{ position: "absolute", bottom: 36 }}
          text={"다음"}
          onPress={() =>
            {if (isButtonActive) {
              navigation.navigate("PlanMaking1");
              navigation.navigate("PlanLoading");
            }}
          }
          isActive={isButtonActive}
        ></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    width: '100%',
    height: '100%',
  },

  contentFrame: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 27,
  },

  title: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 22,
    color: Color.black(1),
    lineHeight: 34,
    width: '100%',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default PlanMaking4;