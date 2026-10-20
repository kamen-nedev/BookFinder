import { useNavigation } from "@react-navigation/native";
import { Header } from "@ui";

export type AppHeaderProps = {
  title: string;
  right?: React.ReactNode;
};

export const AppHeader = ({ title, right }: AppHeaderProps) => {
  const navigation = useNavigation();

  return (
    <Header
      title={title}
      right={right}
      onBack={navigation.canGoBack() ? () => navigation.goBack() : undefined}
    />
  );
};
