import User from "../components/features/User";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-4xl text-violet-600 antialiased">
            Welcome to SamyCo
          </CardTitle>
          <CardDescription className="text-l">
            Your AI Powered{" "}
            <span className="text-l text-violet-500 font-bold">Do It!</span>{" "}
            coach
          </CardDescription>
        </CardHeader>
        <CardContent>
          <User />
        </CardContent>
        <CardFooter>
          <p className="text-xs text-slate-500">
            &#169; powered by your computer, private and secure
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
