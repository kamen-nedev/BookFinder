import { useNetInfo } from "@react-native-community/netinfo";

const useIsOffline = () => {
  const { isConnected, isInternetReachable } = useNetInfo();
  return isConnected === false || isInternetReachable === false;
};

export default useIsOffline;
