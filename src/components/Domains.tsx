import SectionHeading from "./SectionHeading";
import DomainCard from "./DomainCard";
import { domains } from "@/data/domains";

export default function Domains() {
    return (
        <section id="domains" className="section">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    title="Domains of Interest"
                    subtitle="Areas I explore and build in"
                />
                <div className="grid sm:grid-cols-2 gap-6">
                    {domains.map((domain) => (
                        <DomainCard key={domain.title} domain={domain} />
                    ))}
                </div>
            </div>
        </section>
    );
}
