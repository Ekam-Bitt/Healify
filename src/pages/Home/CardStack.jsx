import Card from "./Card";
export default function CardStack(props) {
  return (
    <div className="relative flex justify-between left-[25%]">
      <Card title="Generic Medicines"></Card>
      <Card title="Tele-Medicine"></Card>
      {/* <Card title="Mental Health"></Card> */}
      <Card title="Hospital Services"></Card>
    </div>
  );
}
