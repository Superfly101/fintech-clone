import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

type EmailCodeFactor = {
  strategy: "email_code";
  emailAddressId: string;
  safeIdentifier: string;
  primary?: boolean;
};

const Page = () => {
  // const [countryCode, setCountryCode] = useState("+234");
  const [email, setEmail] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const router = useRouter();

  const { signIn } = useSignIn();

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Email) {
      try {
        const { supportedFirstFactors } = await signIn!.create({
          identifier: email,
        });

        const emailCodeFactor = supportedFirstFactors.find(
          (factor) => factor.strategy === "email_code"
        );

        const { emailAddressId }: any = emailCodeFactor;

        signIn?.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId,
        });

        // const { supportedFirstFactors } = await signIn!.create({
        //   identifier: email,
        // });

        // const firstPhoneFactor: any = supportedFirstFactors.find((factor) => {
        //   return factor.strategy === "phone_code";
        // });

        // const { phoneNumberId } = firstPhoneFactor;

        // await signIn?.prepareFirstFactor({
        //   strategy: "phone_code",
        //   phoneNumberId,
        // });

        router.push({
          pathname: "/verify/[email]",
          params: { email, signingIn: "true" },
        });
      } catch (error) {
        console.log("error", JSON.stringify(error, null, 2));
        if (isClerkAPIResponseError(error)) {
          if (error.errors[0].code === "form_identifier_not_found") {
            Alert.alert("Error", error.errors[0].message);
          }
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={defaultStyles.container}>
          <Text style={defaultStyles.header}>Welcome Back</Text>
          <Text style={defaultStyles.descriptionText}>
            Enter the email address associated with your account.
          </Text>

          <View style={styles.inputContainer}>
            {/* <TextInput
              style={styles.input}
              placeholder="Country code"
              placeholderTextColor={Colors.gray}
              value={countryCode}
            /> */}
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Email address"
              placeholderTextColor={Colors.gray}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <TouchableOpacity
            style={[
              defaultStyles.pillButton,
              email !== "" ? styles.enabled : styles.disabled,
              { marginBottom: 20 },
            ]}
            onPress={() => onSignIn(SignInType.Email)}
          >
            <Text style={defaultStyles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <View
              style={{
                flex: 1,
                height: StyleSheet.hairlineWidth,
                backgroundColor: Colors.gray,
              }}
            />
            <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
            <View
              style={{
                flex: 1,
                height: StyleSheet.hairlineWidth,
                backgroundColor: Colors.gray,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Email)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: "row",
                gap: 16,
                marginTop: 20,
                backgroundColor: "#fff",
              },
            ]}
          >
            <Ionicons name="mail" size={24} color={"#000"} />
            <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
              Continue with email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Google)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: "row",
                gap: 16,
                marginTop: 20,
                backgroundColor: "#fff",
              },
            ]}
          >
            <Ionicons name="logo-google" size={24} color={"#000"} />
            <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
              Continue with email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Apple)}
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: "row",
                gap: 16,
                marginTop: 20,
                backgroundColor: "#fff",
              },
            ]}
          >
            <Ionicons name="logo-apple" size={24} color={"#000"} />
            <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
              Continue with email
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default Page;
