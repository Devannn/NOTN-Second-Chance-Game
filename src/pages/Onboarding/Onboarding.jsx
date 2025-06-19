import "./Onboarding.css";
import Button from "../../components/Buttons/Button";

export default function Onboarding() {
  return (
    <div className="onboarding-wrapper">
      <div className="button-container">
        <Button link="/intro" label={"Start"}></Button>
      </div>
    </div>
  );
}
