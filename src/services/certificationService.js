"use server";

import { GET_CERTIFICATIONS } from "@/graphql/certification/queries";
import HygraphClient from "@/lib/hygraph";

const getCertifications = async () => {
  const response = await HygraphClient.request(GET_CERTIFICATIONS);
  return response.certifications;
};

export { getCertifications };
