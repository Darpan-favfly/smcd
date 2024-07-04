import DefaultSection from "@/components/counter/CounterSection";

const CounterSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CounterSection;
