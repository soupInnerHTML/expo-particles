import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {enableScreens} from "react-native-screens";
import {configure} from "mobx";

export default () => {
  enableScreens();
  configure({
    enforceActions: 'never',
  });
  GoogleSignin.configure();
}
