// Modeling the entities in the SPDX 3.0 base profile
//

import { MinItems, MustMatch } from "./validation";

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

interface Artifact {
    SPDXID: string;
    name : string; 
    supplier : string; // why not identity?
    originator: string;
    checksum : string;

}

interface Package extends Artifact {
    versionInfo: string;
    packageFileName: string;
    downloadLocation : string; // url

}

interface File extends Artifact {

}

interface Snippet extends Artifact {

}

interface Annotation {
    annotator: identity;
    annotationDate : date;
    annotationType : string; // ??? enum?
    comment : string;
    SPDXREF : string; // elementReference
}


