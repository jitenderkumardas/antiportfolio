export default function SectionHeading({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-text-muted text-lg max-w-xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-accent to-accent-glow rounded-full" />
        </div>
    );
}
