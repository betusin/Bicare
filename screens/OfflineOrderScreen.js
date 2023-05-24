import {
  Text,
  View,
  SafeAreaView,
} from "react-native";
import page from '../styles';
import { Image, TouchableOpacity } from "react-native";


export default function OfflineOrderScreen({ navigation }) {
  return (
    <SafeAreaView style={page.container}>
      <View style={page.view}>
        <Image
          style={page.tinyLogo}
          source={require('../img/logoWhiteTrial2.png')}
        />

        <View style={page.profileColumn}>
          <View style={[page.profileRows]}>
            <Text style={[page.profileField, page.profileFieldTitle]}>Repair order:</Text>
            <Text style={[page.profileField, page.profileFieldValue]}>number</Text>
          </View>

          <View style={[page.profileRows]}>
            <Text style={[page.profileField, page.profileFieldTitle]}>Description of problem and offer:</Text>
            <Text style={[page.profileField, page.profileFieldValue]}>database information on order</Text>
          </View>

          <View style={[page.profileRows]}>
            <Text style={[page.profileField, page.profileFieldTitle]}>Status:</Text>
            <Text style={[page.profileField, page.profileFieldValue]}>Completed successfully!</Text>
          </View>
        </View>


        <TouchableOpacity
          style={page.buttonProfile}
        >
          <Text
            style={page.buttonTextSmall}
          >
            Back
          </Text>

        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
