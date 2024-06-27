import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import {
  isClerkAPIResponseError,
  useSignIn,
  useSignUp,
} from "@clerk/clerk-expo";
import { Link, useLocalSearchParams } from "expo-router";
import { Fragment, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const Page = () => {
  const { email, signingIn } = useLocalSearchParams<{
    email: string;
    signingIn: string;
  }>();

  const [code, setCode] = useState("");
  const { signIn } = useSignIn();
  const { signUp, setActive } = useSignUp();

  const CELL_COUNT = 6;

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  useEffect(() => {
    if (code.length === 6) {
      if (signingIn === "true") {
        verifySignIn();
      } else {
        verifyCode();
      }
    }
  }, [code]);

  const verifyCode = async () => {
    try {
      const completedSignUp = await signUp?.attemptEmailAddressVerification({
        code,
      });

      await setActive!({ session: completedSignUp!.createdSessionId });
    } catch (error) {
      console.log("error", JSON.stringify(error, null, 2));
      if (isClerkAPIResponseError(error)) {
        Alert.alert("Error", error.errors[0].message);
      }
    }
  };
  const verifySignIn = async () => {
    try {
      const completedSignIn = await signIn?.attemptFirstFactor({
        code,
        strategy: "email_code",
      });

      await setActive!({ session: completedSignIn!.createdSessionId });
    } catch (error) {
      console.log("error", JSON.stringify(error, null, 2));
      if (isClerkAPIResponseError(error)) {
        Alert.alert("Error", error.errors[0].message);
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>6-digit code</Text>
        <Text style={defaultStyles.descriptionText}>
          Code sent to {email} unless you already have an account.
        </Text>

        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={code}
          onChangeText={setCode}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.OS === "ios" ? "one-time-code" : "sms-otp"}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Fragment key={index}>
              <View
                style={[styles.cellRoot, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
              {index === 2 ? (
                <View key={`seperator-${index}`} style={styles.seperator} />
              ) : null}
            </Fragment>
          )}
        />

        <Link href={"/login"} replace asChild>
          <TouchableOpacity>
            <Text style={[defaultStyles.textLink]}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: 20,
    marginHorizontal: "auto",
    gap: 12,
  },
  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
  },

  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },

  focusCell: {
    borderColor: "#000",
  },
  seperator: {
    height: 2,
    width: 10,
    backgroundColor: Colors.gray,
    alignSelf: "center",
  },
});

export default Page;
