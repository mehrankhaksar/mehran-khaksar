import HygraphClient from "@/lib/hygraph";

const GET_PROFILE = HygraphClient.gql`
    query Profile {
        profile() {
            bio {
                raw
            }
            cv {
                url
            }
            fullName
            profilePicture {
                url
            }
            role
        }
    }
`;

export { GET_PROFILE };
