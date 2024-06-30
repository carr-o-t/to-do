import { cn } from "../../lib/utils";
import { Card, CardContent } from "../ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerHeading: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  headerHeading,
}: CardWrapperProps) => {
  return (
    <Card className="max-w-lg w-full ">
      <div
        className="w-full flex flex-col gap-y-4 items-center justify-center"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem", // Adjust gap size as needed
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <h1
          className={cn("text-3xl font-semibold")}
          style={{
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontWeight: "600",
            margin: 0,
          }}
        >
          {headerHeading}
        </h1>
        <p
          className="text-muted-foreground text-sm"
          style={{
            margin: 0,
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            color: "hsl(215 20.2% 65.1%)",
          }}
        >
          {headerLabel}
        </p>
      </div>
      <CardContent>{children}</CardContent>
      {/* <CardActions>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardActions> */}
    </Card>
  );
};
