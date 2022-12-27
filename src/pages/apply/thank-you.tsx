import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Layout from "../../components/layout";

function ThankYouPage() {
  const router = useRouter();
  const data = trpc.formData.getDataById.useQuery({
    id: router.query?.id as string,
  });
  return (
    <Layout title="Thank You">
      <h1>Thank you!</h1>
      <p>Here is the data you submitted:</p>
      <ul>
        <li>First Name: {data?.data?.firstName}</li>
        <li>Last Name: {data?.data?.lastName}</li>
        <li>Date of Birth: {data?.data?.dateOfBirth}</li>
        <li>Title: {data?.data?.title}</li>
      </ul>
    </Layout>
  );
}

export default ThankYouPage;
