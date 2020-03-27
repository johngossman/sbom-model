import { MinItems } from "./validation";

interface organization {
    name: string;
}

interface tool {
    name: string;
    version: string;
}

interface person {
    name: string;
    email: string;
    organization: organization;
}

type identity = organization | tool | person;

interface documentMetadata {
    spdxVersion: string;
    dataLicense: string;
    SPDXID: string;
    documentNamespace: string;
    documentName: string;
    created: datetime;
    creators: identity[] & MinItems<1>;
}

interface document {
    metadata : documentMetadata;
}

interface Package {

}

interface File {

}

interface Snippet {

}

type Artifact = Package | File | Snippet;

