import BlueButton from "./components/BlueButton";
import { Switch } from "@mui/material";

export default function Home() {
  return (
    <>
      <Switch defaultChecked color="primary" />
      <Switch disabled defaultChecked />
      <BlueButton />
    </>
  );
}
