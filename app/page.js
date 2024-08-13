import Test from "@/components/Test";
import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);
  return (
    <Test />
  );
}
