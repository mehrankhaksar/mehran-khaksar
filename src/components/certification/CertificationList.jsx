import { getCertifications } from "@/services/certificationService";
import CertificationListClient from "./CertificationListClient";

export default async function CertificationList() {
  const certifications = await getCertifications();

  return (
    <section>
      <CertificationListClient certifications={certifications} />
    </section>
  );
}
