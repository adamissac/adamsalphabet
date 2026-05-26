import Section from "../components/Section";

export default function Loading() {
  return (
    <Section tone="default" size="lg" reveal={false}>
      <div className="grid gap-4 max-w-3xl">
        <div className="skeleton h-7 w-32" />
        <div className="skeleton h-12 w-3/4" />
        <div className="skeleton h-5 w-full" />
        <div className="skeleton h-5 w-5/6" />
        <div className="skeleton h-64 w-full mt-6 rounded-lg" />
      </div>
    </Section>
  );
}
